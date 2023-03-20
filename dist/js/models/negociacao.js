export class Negociacao {
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
// const n = new Negociacao()
// n.quantidade = 20 // as propriedades são públicas mas ninguém consegue sobreescrever
