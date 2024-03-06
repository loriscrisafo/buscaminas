import Tauler from "./Tauler.js";

class Joc {
  tauler: Tauler;

  constructor(files: number, columnes: number) {
    this.tauler = new Tauler(files, columnes);
    console.log('joc creat');
    document.getElementById("estat")?.innerHTML = `<img src="img/begin.gif" alt="">`;
  }

  public revelarTauler() {
    for (let i = 0; i < this.tauler.files; i++) {
      for (let j = 0; j < this.tauler.columnes; j++) {
        this.tauler.caselles[i][j].revelada = true;
      }
    }
    this.dibuixarTauler();
  }
  public revelarCasella(i: number, j: number) {
    this.tauler.caselles[i][j].click();
    if (!this.tauler.caselles[i][j].esMina && this.tauler.caselles[i][j].minesAdjacents == 0) {
      this.revelarCasellaRec(i, j);


    }
    this.dibuixarTauler();
    this.comprovarGuanyat();
  }
  public comprovarGuanyat() {
    let guanyat = true;
    let perdut = false;
    for (let i = 0; i < this.tauler.files; i++) {
      for (let j = 0; j < this.tauler.columnes; j++) {
        let casella = this.tauler.caselles[i][j];
        if (casella.esMina == false && casella.revelada == false) {
          guanyat = false;
        }
        if (casella.esMina && casella.revelada) {
          perdut = true;
        }
      }
    }
    if (guanyat) {
      this.revelarTauler();
      document.getElementById("estat")?.innerHTML += "<h1>Has guanyat!</h1>";
    }
    if (perdut) {
      this.revelarTauler();
      document.getElementById("estat")?.innerHTML = `<img src="img/lost.gif" alt=""> <h1>Has perdut :C</h1>`;

    }
  }
  public revelarCasellaRec(i: number, j: number) {
    if (this.tauler.caselles[i][j]) {
      if (this.tauler.caselles[i][j].esMina == false && this.tauler.caselles[i][j].marca == false) {
        this.tauler.caselles[i][j].revelada = true;
        if (i > 0) {

          if (this.tauler.caselles[i - 1][j].minesAdjacents == 0 && this.tauler.caselles[i - 1][j].revelada == false) {
            this.revelarCasellaRec(i - 1, j);
          } else if (this.tauler.caselles[i - 1][j].esMina == false || this.tauler.caselles[i - 1][j - 1].marca == true) {
            this.tauler.caselles[i - 1][j].revelada = true;
          }

        }


        if (i < this.tauler.files - 1) {
          if (this.tauler.caselles[i + 1][j].minesAdjacents == 0 && this.tauler.caselles[i + 1][j].revelada == false ) {
            this.revelarCasellaRec(i + 1, j);
          }
          else if (this.tauler.caselles[i + 1][j].esMina == false || this.tauler.caselles[i - 1][j - 1].marca == true) {
            this.tauler.caselles[i + 1][j].revelada = true;
          }
        }
        if (j > 0) {
          if (this.tauler.caselles[i][j - 1].minesAdjacents == 0 && this.tauler.caselles[i][j - 1].revelada == false ) {
            this.revelarCasellaRec(i, j - 1);
          } else if (this.tauler.caselles[i][j - 1].esMina == false || this.tauler.caselles[i - 1][j - 1].marca == true) {
            this.tauler.caselles[i][j - 1].revelada = true;
          }
        }
        if (j < this.tauler.columnes - 1) {
          if (this.tauler.caselles[i][j + 1].minesAdjacents == 0 && this.tauler.caselles[i][j + 1].revelada == false ) {
            this.revelarCasellaRec(i, j + 1);
          }
          else if (this.tauler.caselles[i][j + 1].esMina == false || this.tauler.caselles[i - 1][j - 1].marca == true) {
            this.tauler.caselles[i][j + 1].revelada = true;
          }
        }
        if (i > 0 && j > 0) {
          if (this.tauler.caselles[i - 1][j - 1].minesAdjacents == 0 && this.tauler.caselles[i - 1][j - 1].revelada == false) {
            this.revelarCasellaRec(i - 1, j - 1);
          }
          else if (this.tauler.caselles[i - 1][j - 1].esMina == false || this.tauler.caselles[i - 1][j - 1].marca == true) {
            this.tauler.caselles[i - 1][j - 1].revelada = true;
          }
        }
        if (i > 0 && j < this.tauler.columnes - 1) {
          if (this.tauler.caselles[i - 1][j + 1].minesAdjacents == 0 && this.tauler.caselles[i - 1][j + 1].revelada == false) {
            this.revelarCasellaRec(i - 1, j + 1);
          }
          else if (this.tauler.caselles[i - 1][j + 1].esMina == false || this.tauler.caselles[i - 1][j - 1].marca == true) {
            this.tauler.caselles[i - 1][j + 1].revelada = true;
          }
        }
        if (i < this.tauler.files - 1 && j > 0) {
          if (this.tauler.caselles[i + 1][j - 1].minesAdjacents == 0 && this.tauler.caselles[i + 1][j - 1].revelada == false) {
            this.revelarCasellaRec(i + 1, j - 1);
          }
          else if (this.tauler.caselles[i + 1][j - 1].esMina == false || this.tauler.caselles[i - 1][j - 1].marca == true) {
            this.tauler.caselles[i + 1][j - 1].revelada = true;
          }
        }
        if (i < this.tauler.files - 1 && j < this.tauler.columnes - 1) {
          if (this.tauler.caselles[i + 1][j + 1].minesAdjacents == 0 && this.tauler.caselles[i + 1][j + 1].revelada == false ) {
            this.revelarCasellaRec(i + 1, j + 1);
          }
          else if (this.tauler.caselles[i + 1][j + 1].esMina == false || this.tauler.caselles[i - 1][j - 1].marca == true) {
            this.tauler.caselles[i + 1][j + 1].revelada = true;
          }
        }



      } else {
        return;
      }
    } else {
      return;

    }
  }
  public dibuixarTauler() {
    document.getElementById("joc")?.innerHTML = "";

    for (let i = 0; i < this.tauler.files; i++) {

      let fila = document.createElement("div");
      fila.classList.add("fila");
      document.getElementById("joc")?.appendChild(fila);

      for (let j = 0; j < this.tauler.columnes; j++) {
        let casella = this.tauler.caselles[i][j];
        let casilla = document.createElement("div");
        casilla.classList.add("casella");
        casilla.classList.add("noRevelada");
        casilla.innerHTML = "‎ ";

        if (this.tauler.caselles[i][j].marca == true && this.tauler.caselles[i][j].revelada == false) {
          casilla.innerHTML = "&#128681;";
        } else {
          casilla.innerHTML = "‎";
        }

        casilla.id = i + "-" + j;


        if (casella.esMina) {
          casilla.classList.add("mina");
        }

        if (casella.revelada) {
          casilla.classList.remove("noRevelada");
          if (casella.minesAdjacents != 0 && casella.esMina == false) {
            casilla.innerHTML = casella.minesAdjacents.toString();
          }
        }
        fila.appendChild(casilla);


      }

    }
    document.querySelectorAll(".casella").forEach(casella => {
      casella.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        let id = casella.id.split("-");
        let i = parseInt(id[0]);
        let j = parseInt(id[1]);
        if (this.tauler.caselles[i][j].marca == false) {
          this.tauler.caselles[i][j].marca = true;
        } else {
          this.tauler.caselles[i][j].marca = false;
        }
        this.dibuixarTauler();
      });

      casella.addEventListener("click", (e) => {
        console.log("click");
        let id = casella.id.split("-");
        let i = parseInt(id[0]);
        let j = parseInt(id[1]);
        this.revelarCasella(i, j);
      });
    });
  }
}
export default Joc;
