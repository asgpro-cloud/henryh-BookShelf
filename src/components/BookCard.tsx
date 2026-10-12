import type { Book } from '../types/book';

const ratingFormat = new Intl.NumberFormat('ru-RU', { minimumFractionDigits: 1 });

export function BookCard({ book }: { book: Book }) {
  return (
    <article className="book-card">
      <div className="cover-stage">
        <img className="book-cover" src={book.cover} alt={`Обложка книги «${book.title}»`} width="240" height="360" loading="lazy" />
      </div>
      <div className="book-meta"><span className="book-genre">{book.genre}</span><span className="book-rating" aria-label={`Рейтинг: ${ratingFormat.format(book.rating)} из 5`}><span aria-hidden="true">★</span> {ratingFormat.format(book.rating)}</span></div>
      <h3>{book.title}</h3>
      <p className="book-author">{book.author}<span aria-hidden="true"> · </span><span>{book.year}</span></p>
      <p className="book-description">{book.description}</p>
    </article>
  );
}
