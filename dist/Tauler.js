import Casella from './Casella.js';
var Tauler = /** @class */ (function () {
    function Tauler(files, columnes) {
        this.files = files;
        this.columnes = columnes;
        this.caselles = [];
        // Initialize the caselles array
        for (var i = 0; i < files; i++) {
            this.caselles[i] = [];
        }
        for (var i = 0; i < files; i++) {
            for (var j = 0; j < columnes; j++) {
                var mina = Math.random() < 0.1;
                this.caselles[i][j] = new Casella(mina, i, j);
            }
        }
        for (var i = 0; i < files; i++) {
            for (var j = 0; j < columnes; j++) {
                var casella = this.caselles[i][j];
                if (i > 0) {
                    if (this.caselles[i - 1][j].esMina) {
                        casella.minesAdjacents++;
                    }
                }
                if (i < files - 1) {
                    if (this.caselles[i + 1][j].esMina) {
                        casella.minesAdjacents++;
                    }
                }
                if (j > 0) {
                    if (this.caselles[i][j - 1].esMina) {
                        casella.minesAdjacents++;
                    }
                }
                if (j < columnes - 1) {
                    if (this.caselles[i][j + 1].esMina) {
                        casella.minesAdjacents++;
                    }
                }
                if (i > 0 && j > 0) {
                    if (this.caselles[i - 1][j - 1].esMina) {
                        casella.minesAdjacents++;
                    }
                }
                if (i > 0 && j < columnes - 1) {
                    if (this.caselles[i - 1][j + 1].esMina) {
                        casella.minesAdjacents++;
                    }
                }
                if (i < files - 1 && j > 0) {
                    if (this.caselles[i + 1][j - 1].esMina) {
                        casella.minesAdjacents++;
                    }
                }
                if (i < files - 1 && j < columnes - 1) {
                    if (this.caselles[i + 1][j + 1].esMina) {
                        casella.minesAdjacents++;
                    }
                }
            }
        }
    }
    return Tauler;
}());
export default Tauler;
