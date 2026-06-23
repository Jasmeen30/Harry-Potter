import "./Section3.css";

const spells = [
  {
    name: "Expelliarmus",
    description: "Disarming Charm",
  },
  {
    name: "Lumos",
    description: "Creates light at the wand tip",
  },
  {
    name: "Alohomora",
    description: "Unlocking Charm",
  },
  {
    name: "Expecto Patronum",
    description: "Summons a Patronus",
  },
];

export default function Section3() {
  return (
    <section className="spells" id="spells">
      <div className="spells-heading">
        <h2>Book of Spells</h2>
        <p>Ancient magic passed through generations.</p>
      </div>

      <div className="spells-grid">
        {spells.map((spell) => (
          <div className="spell-card" key={spell.name}>
            <h3>{spell.name}</h3>
            <p>{spell.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
