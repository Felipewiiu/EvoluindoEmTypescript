import { Negociacao } from "./negociacao";

export default class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona (negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    lista(): Array<Negociacao> {
        return this.negociacoes
    }
     
}







// const list: Array <number> = []

// list.push('10');
// list.push(5)
// list.push(true)