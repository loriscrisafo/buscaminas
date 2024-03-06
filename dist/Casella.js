var Casella = /** @class */ (function () {
    function Casella(esMina, fila, columna) {
        this.esMina = esMina;
        this.revelada = false;
        this.marca = false;
        this.id = fila + "-" + columna;
        this.minesAdjacents = 0;
    }
    Casella.prototype.click = function () {
        if (this.marca == false) {
            this.revelada = true;
        }
    };
    return Casella;
}());
export { Casella };
export default Casella;
