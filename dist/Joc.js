import Tauler from "./Tauler.js";
var Joc = /** @class */ (function () {
    function Joc(files, columnes) {
        var _a;
        this.tauler = new Tauler(files, columnes);
        console.log('joc creat');
        (_a = document.getElementById("estat")) === null || _a === void 0 ? void 0 : _a.innerHTML = "<img src=\"img/begin.gif\" alt=\"\">";
    }
    Joc.prototype.revelarTauler = function () {
        for (var i = 0; i < this.tauler.files; i++) {
            for (var j = 0; j < this.tauler.columnes; j++) {
                this.tauler.caselles[i][j].revelada = true;
            }
        }
        this.dibuixarTauler();
    };
    Joc.prototype.revelarCasella = function (i, j) {
        this.tauler.caselles[i][j].click();
        if (!this.tauler.caselles[i][j].esMina && this.tauler.caselles[i][j].minesAdjacents == 0) {
            this.revelarCasellaRec(i, j);
        }
        this.dibuixarTauler();
        this.comprovarGuanyat();
    };
    Joc.prototype.comprovarGuanyat = function () {
        var _a, _b;
        var guanyat = true;
        var perdut = false;
        for (var i = 0; i < this.tauler.files; i++) {
            for (var j = 0; j < this.tauler.columnes; j++) {
                var casella = this.tauler.caselles[i][j];
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
            (_a = document.getElementById("estat")) === null || _a === void 0 ? void 0 : _a.innerHTML += "<h1>Has guanyat!</h1>";
        }
        if (perdut) {
            this.revelarTauler();
            (_b = document.getElementById("estat")) === null || _b === void 0 ? void 0 : _b.innerHTML = "<img src=\"img/lost.gif\" alt=\"\"> <h1>Has perdut :C</h1>";
        }
    };
    Joc.prototype.revelarCasellaRec = function (i, j) {
        if (this.tauler.caselles[i][j]) {
            if (this.tauler.caselles[i][j].esMina == false && this.tauler.caselles[i][j].marca == false) {
                this.tauler.caselles[i][j].revelada = true;
                if (i > 0) {
                    if (this.tauler.caselles[i - 1][j].minesAdjacents == 0 && this.tauler.caselles[i - 1][j].revelada == false) {
                        this.revelarCasellaRec(i - 1, j);
                    }
                    else if (this.tauler.caselles[i - 1][j].esMina == false || this.tauler.caselles[i - 1][j - 1].marca == true) {
                        this.tauler.caselles[i - 1][j].revelada = true;
                    }
                }
                if (i < this.tauler.files - 1) {
                    if (this.tauler.caselles[i + 1][j].minesAdjacents == 0 && this.tauler.caselles[i + 1][j].revelada == false) {
                        this.revelarCasellaRec(i + 1, j);
                    }
                    else if (this.tauler.caselles[i + 1][j].esMina == false || this.tauler.caselles[i - 1][j - 1].marca == true) {
                        this.tauler.caselles[i + 1][j].revelada = true;
                    }
                }
                if (j > 0) {
                    if (this.tauler.caselles[i][j - 1].minesAdjacents == 0 && this.tauler.caselles[i][j - 1].revelada == false) {
                        this.revelarCasellaRec(i, j - 1);
                    }
                    else if (this.tauler.caselles[i][j - 1].esMina == false || this.tauler.caselles[i - 1][j - 1].marca == true) {
                        this.tauler.caselles[i][j - 1].revelada = true;
                    }
                }
                if (j < this.tauler.columnes - 1) {
                    if (this.tauler.caselles[i][j + 1].minesAdjacents == 0 && this.tauler.caselles[i][j + 1].revelada == false) {
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
                    if (this.tauler.caselles[i + 1][j + 1].minesAdjacents == 0 && this.tauler.caselles[i + 1][j + 1].revelada == false) {
                        this.revelarCasellaRec(i + 1, j + 1);
                    }
                    else if (this.tauler.caselles[i + 1][j + 1].esMina == false || this.tauler.caselles[i - 1][j - 1].marca == true) {
                        this.tauler.caselles[i + 1][j + 1].revelada = true;
                    }
                }
            }
            else {
                return;
            }
        }
        else {
            return;
        }
    };
    Joc.prototype.dibuixarTauler = function () {
        var _this = this;
        var _a, _b;
        (_a = document.getElementById("joc")) === null || _a === void 0 ? void 0 : _a.innerHTML = "";
        for (var i = 0; i < this.tauler.files; i++) {
            var fila = document.createElement("div");
            fila.classList.add("fila");
            (_b = document.getElementById("joc")) === null || _b === void 0 ? void 0 : _b.appendChild(fila);
            for (var j = 0; j < this.tauler.columnes; j++) {
                var casella = this.tauler.caselles[i][j];
                var casilla = document.createElement("div");
                casilla.classList.add("casella");
                casilla.classList.add("noRevelada");
                casilla.innerHTML = "‎ ";
                if (this.tauler.caselles[i][j].marca == true && this.tauler.caselles[i][j].revelada == false) {
                    casilla.innerHTML = "&#128681;";
                }
                else {
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
        document.querySelectorAll(".casella").forEach(function (casella) {
            casella.addEventListener("contextmenu", function (e) {
                e.preventDefault();
                var id = casella.id.split("-");
                var i = parseInt(id[0]);
                var j = parseInt(id[1]);
                if (_this.tauler.caselles[i][j].marca == false) {
                    _this.tauler.caselles[i][j].marca = true;
                }
                else {
                    _this.tauler.caselles[i][j].marca = false;
                }
                _this.dibuixarTauler();
            });
            casella.addEventListener("click", function (e) {
                console.log("click");
                var id = casella.id.split("-");
                var i = parseInt(id[0]);
                var j = parseInt(id[1]);
                _this.revelarCasella(i, j);
            });
        });
    };
    return Joc;
}());
export default Joc;
