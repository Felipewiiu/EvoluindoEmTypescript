export default class Negociacaoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
// const list: Array <number> = []
// list.push('10');
// list.push(5)
// list.push(true)
