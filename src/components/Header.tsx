export function Header() {
  return (
    <header className="site-header container">
      <div className="brand">
        <svg className="brand-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M16 7C12 4 7 4 3 6v21c4-2 9-2 13 1 4-3 9-3 13-1V6c-4-2-9-2-13 1Zm0 0v21" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
        <span>BookShelf<span className="brand-dot">.</span></span>
      </div>
      <p className="header-tagline">Небольшой каталог больших историй</p>
    </header>
  );
}
