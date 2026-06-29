import "./Tour.css";

export default function Tour({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="tour-overlay">
      <button className="close-btn" onClick={onClose}>
        ✕
      </button>

      <section className="tour-scene">
        <h1>🏰 Welcome to Hogwarts</h1>
        <p>Your magical journey begins.</p>
      </section>

      <section className="tour-scene">
        <h1>🚂 Hogwarts Express</h1>
        <p>The train whistles as it crosses the Scottish Highlands.</p>
      </section>

      <section className="tour-scene">
        <h1>🛶 Crossing the Black Lake</h1>
        <p>The castle slowly appears through the mist.</p>
      </section>

      <section className="tour-scene">
        <h1>🕯 Great Hall</h1>
        <p>Thousands of floating candles welcome every student.</p>
      </section>

      <section className="tour-scene">
        <h1>📚 Library</h1>
        <p>Ancient magical books surround you.</p>
      </section>

      <section className="tour-scene">
        <h1>🧪 Potions Classroom</h1>
        <p>Professor Snape begins today's lesson.</p>
      </section>

      <section className="tour-scene">
        <h1>🧹 Quidditch Stadium</h1>
        <p>The Golden Snitch flies overhead.</p>
      </section>

      <section className="tour-scene">
        <h1>🌲 Forbidden Forest</h1>
        <p>The trees whisper mysterious secrets.</p>
      </section>
    </div>
  );
}
