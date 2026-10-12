# BookShelf

Небольшой учебный каталог из 24 книг: реальные произведения, локальные авторские SVG-обложки и адаптивный интерфейс на русском языке. Данные загружаются через HTTP из статического JSON. Внешние сервисы, аккаунты и ключи не нужны.

## Окружение

Node.js 24 LTS и npm. Для запуска production-версии — Docker с Docker Compose. React, TypeScript в strict mode, Vite и обычный CSS.

## Запуск через npm

```bash
npm ci
npm run dev
```

Откройте `http://localhost:5173`. Если порт занят, Vite выберет следующий свободный и выведет адрес в терминале.

```bash
npm run lint
npm run build
```

Сборка сначала проверяет TypeScript, затем создаёт `dist/`. Для локального просмотра сборки: `npm run preview`.

## Запуск через Docker

```bash
docker compose up --build
```

Откройте `http://localhost:8080`. Multi-stage Dockerfile собирает приложение на Node.js 24, Nginx обслуживает результат. Для остановки: `docker compose down`.

## Данные и структура

- `public/api/books.json` — данные книг, доступны по `/api/books.json` и в development, и в production. Значения рейтинга демонстрационные.
- `public/covers/` — 24 оригинальные SVG-обложки без внешних изображений или шрифтов.
- `src/types/book.ts` — единая модель `Book`.
- `src/api/books.ts` — HTTP-загрузка и проверка формата данных.
- `src/App.tsx` — состояние каталога, загрузка и повторная попытка при ошибке.
- `src/components/` — шапка, главный экран, карточки, сетка и подвал.
- `src/styles.css` — оформление и адаптивная сетка: 4, 2 или 1 карточка.
- `Dockerfile`, `compose.yaml`, `nginx.conf` — production-сборка и статическая раздача.
