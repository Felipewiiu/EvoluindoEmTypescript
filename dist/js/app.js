import { NegociacaoController } from './controllers/negociacao-controller.js';
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});

// neste modelo conseguimos colocar dinâmicamente uma propriedade em um objeto

const objeto = {
    nome: "Felipe",
    sobreNome: "Oliveira"
}

console.log(objeto)

objeto.naturalidade = "BR"

console.log(objeto)
