const apiLink:string = "https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f";

fetch(apiLink, {
    method: "GET"
}).then((resp) => {return resp.json()}).then((clothesObj) => {
    // console.log("Abbigliamento:", clothesObj)



    class CapoAbbigliamento {
        id: number;
        codprod: number;
        collezione: string
        capo: string
        modello: number
        quantita: number
        colore: string
        prezzoivaesclusa: number
        prezzoivainclusa: number
        disponibile: string
        saldo: number

        constructor(_id: number,
            _codprod: number,
            _collezione: string,
            _capo: string,
            _modello: number,
            _quantita: number,
            _colore: string,
            _prezzoivaesclusa: number,
            _prezzoivainclusa: number,
            _disponibile: string,
            _saldo: number ){
                this.id = _id
                this.codprod = _codprod
                this.collezione = _collezione
                this.capo = _capo
                this.modello = _modello
                this.quantita = _quantita
                this.colore = _colore
                this.prezzoivaesclusa = _prezzoivaesclusa
                this.prezzoivainclusa = _prezzoivainclusa
                this.disponibile = _disponibile
                this.saldo = _saldo
            }

            getSaldoCapo(){
                return (this.prezzoivainclusa * this.saldo)/100;
            }


            getAcquistoCapo(){
                return this.prezzoivainclusa - this.getSaldoCapo()
            }
    }

    let spesaTotale:number = 0;

    clothesObj.forEach(element => {
        let capo = element.capo
        capo = new CapoAbbigliamento(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo)
        let costoCapo:number = Math.floor(capo.getAcquistoCapo());
        spesaTotale += costoCapo
        console.log("Il capo:", capo.capo, "con costo", capo.prezzoivainclusa+"€"+ ", con un saldo del", capo.saldo+"%"+" ti viene a costare:", costoCapo+"€")


    });

    console.log("Totale carrello:", Math.floor(spesaTotale)+"€")




})

