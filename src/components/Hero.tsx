export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span /> МЕСТО ДЛЯ ХОРОШИХ КНИГ</p>
        <h1 id="hero-title">Откройте следующую <em>любимую книгу</em></h1>
        <p className="hero-description">От знакомой классики до новых открытий. Истории, которые вдохновляют, увлекают и остаются с вами надолго.</p>
        <div className="hero-note"><span className="note-line" /> Для любопытных. Для мечтателей. Для вас.</div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="art-orbit" />
        <span className="art-star star-one">✳</span>
        <span className="art-star star-two">✳</span>
        <div className="art-book book-back"><span className="book-line" /><span className="book-circle" /></div>
        <div className="art-book book-front"><span className="art-book-label">BOOK<br />SHELF</span><span className="book-arch" /><span className="art-book-caption">МИР МЕЖДУ СТРОК</span></div>
        <div className="art-book book-side"><span className="spine-lettering">ЕЩЁ ОДНА ГЛАВА</span></div>
        <span className="art-caption">У каждой книги — свой мир</span>
      </div>
    </section>
  );
}
