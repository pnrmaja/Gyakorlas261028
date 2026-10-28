
import type { Tanuloszoba } from "../Adatok";
import Kartya from "./Kartya";
import "../css/Kartyak.css";

interface KartyakProps {
  szobak: Tanuloszoba[];
  foglalas: (id: number) => void;
}

function Kartyak({ szobak, foglalas }: KartyakProps) {
  return (
    <section className="kartyak">
      {szobak.map((szoba) => (
        <Kartya
          key={szoba.id}
          szoba={szoba}
          foglalas={foglalas}
        />
      ))}
    </section>
  );
}

export default Kartyak;
