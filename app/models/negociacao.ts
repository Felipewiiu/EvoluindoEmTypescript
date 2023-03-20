export class Negociacao {
    

    constructor(
        public readonly data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

  

    get volume(): number {
        return this.quantidade * this.valor;
    }
}

// const n = new Negociacao()

// n.quantidade = 20 // as propriedades são públicas mas ninguém consegue sobreescrever