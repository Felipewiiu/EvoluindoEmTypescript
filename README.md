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


