import type { Book } from '../types/book';

function isBook(value: unknown): value is Book {
  if (typeof value !== 'object' || value === null) return false;
  const book = value as Record<string, unknown>;
  return ['id', 'title', 'author', 'genre', 'description', 'cover'].every(
    (key) => typeof book[key] === 'string' && book[key].length > 0,
  ) && typeof book.year === 'number' && Number.isInteger(book.year)
    && typeof book.rating === 'number' && book.rating >= 0 && book.rating <= 5
    && typeof book.cover === 'string' && book.cover.startsWith('/covers/');
}

export async function loadBooks(signal?: AbortSignal): Promise<Book[]> {
  const response = await fetch('/api/books.json', { signal });
  if (!response.ok) throw new Error('Не удалось загрузить каталог.');
  const data: unknown = await response.json();
  if (!Array.isArray(data) || !data.every(isBook)
    || new Set(data.map((book) => book.id)).size !== data.length) {
    throw new Error('Некорректные данные каталога.');
  }
  return data;
}
