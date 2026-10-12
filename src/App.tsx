import { useEffect, useState } from 'react';
import { loadBooks } from './api/books';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BookGrid } from './components/BookGrid';
import { Footer } from './components/Footer';
import type { Book } from './types/book';

type CatalogState =
  | { status: 'loading' }
  | { status: 'error' }
  | { status: 'success'; books: Book[] };

function bookCount(count: number): string {
  const ending = count % 10;
  const teen = count % 100 >= 11 && count % 100 <= 14;
  return `${count} ${teen ? 'книг' : ending === 1 ? 'книга' : ending >= 2 && ending <= 4 ? 'книги' : 'книг'}`;
}

export default function App() {
  const [state, setState] = useState<CatalogState>({ status: 'loading' });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    loadBooks(controller.signal).then(
      (books) => { if (!controller.signal.aborted) setState({ status: 'success', books }); },
      () => { if (!controller.signal.aborted) setState({ status: 'error' }); },
    );
    return () => controller.abort();
  }, [attempt]);

  function retry() {
    setState({ status: 'loading' });
    setAttempt((previous) => previous + 1);
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="catalog container" aria-labelledby="catalog-title" aria-busy={state.status === 'loading'}>
          <div className="catalog-heading">
            <div><p className="eyebrow">ВАША КНИЖНАЯ ПОЛКА</p><h2 id="catalog-title">Все книги</h2></div>
            {state.status === 'success' && <span className="catalog-count">{bookCount(state.books.length)} <span aria-hidden="true">↙</span></span>}
          </div>
          {state.status === 'loading' && <div className="catalog-message" role="status"><span className="loading-spinner" aria-hidden="true" /><p>Собираем вашу книжную полку…</p></div>}
          {state.status === 'error' && <div className="catalog-message error-message" role="alert"><h3>Не удалось загрузить книги</h3><p>Попробуйте ещё раз — ваша следующая история ждёт.</p><button onClick={retry}>Повторить попытку <span aria-hidden="true">↻</span></button></div>}
          {state.status === 'success' && (state.books.length > 0 ? <BookGrid books={state.books} /> : <div className="catalog-message"><p>На этой полке пока нет книг.</p></div>)}
        </section>
      </main>
      <Footer />
    </>
  );
}
