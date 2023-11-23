var apiLink = "https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f";
fetch(apiLink, {
    method: "GET"
}).then(function (resp) { return resp.json(); }).then(function (clothesObj) {
    // console.log("Abbigliamento:", clothesObj)
    var CapoAbbigliamento = /** @class */ (function () {
        function CapoAbbigliamento(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
            this.id = _id;
            this.codprod = _codprod;
            this.collezione = _collezione;
            this.capo = _capo;
            this.modello = _modello;
            this.quantita = _quantita;
            this.colore = _colore;
            this.prezzoivaesclusa = _prezzoivaesclusa;
            this.prezzoivainclusa = _prezzoivainclusa;
            this.disponibile = _disponibile;
            this.saldo = _saldo;
        }
        CapoAbbigliamento.prototype.getSaldoCapo = function () {
            return (this.prezzoivainclusa * this.saldo) / 100;
        };
        CapoAbbigliamento.prototype.getAcquistoCapo = function () {
            return this.prezzoivainclusa - this.getSaldoCapo();
        };
        return CapoAbbigliamento;
    }());
    var spesaTotale = 0;
    clothesObj.forEach(function (element) {
        var capo = element.capo;
        capo = new CapoAbbigliamento(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
        var costoCapo = Math.floor(capo.getAcquistoCapo());
        spesaTotale += costoCapo;
        console.log("Il capo:", capo.capo, "con costo", capo.prezzoivainclusa + "€" + ", con un saldo del", capo.saldo + "%" + " ti viene a costare:", costoCapo + "€");
    });
    console.log("Totale carrello:", Math.floor(spesaTotale) + "€");
});
