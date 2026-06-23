import "./Section4.css";

export default function Section4() {
  return (
    <section className="diagon-alley" id="shop">
      <div className="alley-content">
        <h2>Diagon Alley</h2>

        <div className="shop-grid">
          <div className="shop-card">
            <h3>Ollivanders</h3>
            <p>Wands since 382 BC.</p>
          </div>

          <div className="shop-card">
            <h3>Flourish & Blotts</h3>
            <p>Magical books and knowledge.</p>
          </div>

          <div className="shop-card">
            <h3>Weasleys' Wizard Wheezes</h3>
            <p>Jokes and magical inventions.</p>
          </div>
          <div className="shop-card">
            <h3>🪄 Ollivanders</h3>
            <p>Wands since 382 BC.</p>
          </div>

          <div className="shop-card">
            <h3>📚 Flourish & Blotts</h3>
            <p>Magical books and knowledge.</p>
          </div>

          <div className="shop-card">
            <h3>🎭 Weasleys' Wizard Wheezes</h3>
            <p>Jokes and magical inventions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
