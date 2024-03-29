# EvoluindoEmTypescript

- Para a instalação use : `npm install typescript@4.2.2 --save-dev`

# Configurando o arquivo tsconfig.json

```
{
    "compilerOptions": {
        "outDir": "dist/js",// serve para configurar pasta
        "target": "ES6", // versão do ecmascript
        "noEmitOnError": true, // evita que o compilador gere um javascript com problemas
        

    },

    "include": ["app/**/*"]
}
```
> Dica: o npm start que fica dentro do packge.json serve para rodar 3 comandos

- "concurrently \

- "npm run watch\" --> para compilar automaticamente

- \"npm run server\"", --> para rodar o servidor local

## Conceito de controler

Esse controller vai ser a ponte entre as interações do usuário na minha página e a criação de modelos, ele vai ser o meio de campo. Ele vai ter uma dependência de elementos de UI, a minha data, a minha quantidade, o meu valor, e vai fazer a comunicação disso com o nosso modelo.

## Configurando o TSconfig para não aceitar o tipo (any)

```
{
    "compilerOptions": {
        "outDir": "dist/js",
        "target": "ES6",
        "noEmitOnError": true,
        "noImplicitAny": true,
    },
    "include": ["app/**/*"]
}
```

## Boas práticas 

- Em propriedades de uma classe é preciso definir o tipo que ele é;
- Definir tipos de parêmetros de métodos;
- explicitar no início do projeto o "noImplicitAny": true,
- 

## Dicas do construtor

Se no construtor da sua classe você coloca o modificador private, explicita isso, ou public, isso indica para o TypeScript que ele vai por debaixo dos panos criar uma propriedade da sua classe que contenha o mesmo nome do seu com os parâmetros do construtor, e por debaixo dos panos ele vai fazer a atribuição, vai pegar esse valor e vai jogar lá para você.


## Herança de classes

- Para uma classe herdar atributos de outra classe é preciso chamar o `extends`

```
export class NegociacoesView extends View {
    private elemento: string
}
```

- protected => significa que só a classe view e seus filhos podem acessar seus atributos.


## Tipo generico ( T )

- Generics são para tipos o que valores são para argumentos de função — eles são uma maneira de dizer aos nossos componentes (funções, classes ou interfaces) o tipo que queremos usar quando executarmos esse pedaço de código, da mesma forma como dizemos a uma função quais valores usar como argumentos quando nós a executamos.



