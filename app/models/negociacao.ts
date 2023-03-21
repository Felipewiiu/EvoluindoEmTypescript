export class Negociacao {
    

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

  

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date{//geter não pode ter o mesmo nome de uma propriedade por isso está sem underline
        const data = new Date(this._data.getTime())
        return data
    }
}

// const n = new Negociacao()

// n.quantidade = 20 // as propriedades são públicas mas ninguém consegue sobreescrever