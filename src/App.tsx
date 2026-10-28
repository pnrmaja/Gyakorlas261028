
import { useState } from "react";
import { TANULOSZOBAK } from "./Adatok";
import type { Tanuloszoba } from "./Adatok";
import Kartyak from "./components/Kartyak";
import "./css/App.css";

function App() {
  const [szobak, setSzobak] = useState<Tanuloszoba[]>(
    TANULOSZOBAK
  );

  const [szuro, setSzuro] = useState("Összes típus");

  function foglalas(id: number) {
    setSzobak((elozo) =>
      elozo.map((szoba) =>
        szoba.id === id && szoba.foglalt < szoba.ferohely
          ? { ...szoba, foglalt: szoba.foglalt + 1 }
          : szoba
      )
    );
  }

  const tipusok = [
    ...new Set(szobak.map((szoba) => szoba.tipus)),
  ];

  const szurtSzobak =
    szuro === "Összes típus"
      ? szobak
      : szobak.filter((szoba) => szoba.tipus === szuro);

  return (
    <main className="oldal">
      <header className="fejlec">
        <h1>TANULÓSZOBÁK NEKED</h1>
        <p>Találd meg a számodra megfelelő tanulóhelyet!</p>
      </header>

      <div className="szuro">
        <label htmlFor="szobatipus">Szobatípus:</label>
        <select
          id="szobatipus"
          value={szuro}
          onChange={(e) => setSzuro(e.target.value)}
        >
          <option>Összes típus</option>
          {tipusok.map((tipus) => (
            <option key={tipus} value={tipus}>
              {tipus}
            </option>
          ))}
        </select>
      </div>

      <Kartyak szobak={szurtSzobak} foglalas={foglalas} />
    </main>
  );
}

export default App;
