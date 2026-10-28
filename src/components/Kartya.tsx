
import type { Tanuloszoba } from "../Adatok";
import "../css/Kartya.css";

interface KartyaProps {
  szoba: Tanuloszoba;
  foglalas: (id: number) => void;
}

function Kartya({ szoba, foglalas }: KartyaProps) {
  const megtelt = szoba.foglalt >= szoba.ferohely;

  return (
    <article className="kartya">
      <h2>{szoba.nev}</h2>
      <p>{szoba.tipus}</p>

      <div className="adatok">
        <p>ID: {szoba.id}</p>
        <p>Szobatípus: {szoba.tipus}</p>
        <p>Emelet: {szoba.emelet}.</p>
        <p>Férőhely: {szoba.ferohely} fő</p>
        <p>Foglalt helyek: {szoba.foglalt} fő</p>
      </div>

      {megtelt && <strong>Megtelt</strong>}

      <button
        disabled={megtelt}
        onClick={() => foglalas(szoba.id)}
      >
        {megtelt ? "Nincs szabad hely" : "Helyet foglalok"}
      </button>
    </article>
  );
}

export default Kartya;
