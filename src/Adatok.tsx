export interface Tanuloszoba {
  id: number;
  nev: string;
  tipus: string;
  emelet: number;
  ferohely: number;
  foglalt: number;
}

export const TANULOSZOBAK: Tanuloszoba[] = [
  {
    id: 1,
    nev: "Csendes sarok",
    tipus: "Egyéni tanulás",
    emelet: 1,
    ferohely: 12,
    foglalt: 7,
  },
  {
    id: 2,
    nev: "Közös ötletelő",
    tipus: "Csoportmunka",
    emelet: 2,
    ferohely: 20,
    foglalt: 11,
  },
  {
    id: 3,
    nev: "Digitális műhely",
    tipus: "Számítógépes terem",
    emelet: 3,
    ferohely: 16,
    foglalt: 9,
  },
];
