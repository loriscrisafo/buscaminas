export class Casella {
  esMina: boolean;
  revelada: boolean;
  marca: boolean;
  id: string;
  minesAdjacents: number;
  constructor(esMina: boolean, fila: number, columna: number) {
    this.esMina = esMina;
    this.revelada = false;
    this.marca = false;
    this.id = fila + "-" + columna;
    this.minesAdjacents = 0;

  }
  public click() {
    if (this.marca == false) {
      this.revelada = true;
    }

  }

}

export default Casella;
