import type { Book } from '../types/book';
import { BookCard } from './BookCard';

export function BookGrid({ books }: { books: Book[] }) {
  return <div className="book-grid">{books.map((book) => <BookCard key={book.id} book={book} />)}</div>;
}
