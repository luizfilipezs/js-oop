# Introdução à JavaScript

Neste pequeno tutorial, a proposta é permitir que você conheça os princípios básicos da sintaxe da linguagem JavaScript.

Lógica de programação é algo que você aprende apenas uma vez e aperfeiçoa e continua a desenvolver pelo resto da vida. Todas as linguagens possuem suas próprias sintaxes, que vão se distinguir ou se assemelhar muito de acordo com o objetivo de cada uma.

Felizmente, se você possui boas noções de lógica de programação, irá conseguir se adaptar às diferentes sintaxes e desafios que encontrar em linguagens com as quais você nunca trabalhou antes.

Portanto, os requisitos para seguir este tutorial são:

- Algum nível de conhecimento de lógica de prgramação
- Um editor de código (o mais indicado é o [VSCode](https://code.visualstudio.com/download))

## Notas antes de começarmos

Ao longo dos exemplos que utilizaremos aqui, alguns comentários serão utilizados no código. Comentários são trechos que não são interpretados. Portanto, podemos utilizá-los para escrever qualquer coisa.

Na JavaScript há dois tipos de comentários:

- **Uma linha:** Estes comentários só abrangem a linha em que foram escritos. Exemplo:
  ```js
  // Este é um comentário de uma linha
  ```
- **Múltiplas linhas:** Estes comentários podem abranger quantas linhas forem necessárias.
  ```js
  /*
    Este comentário pode abranger quantas linhas
    eu desejar
  */
  ```

Por fim, para testar as funcionalidades que aprenderá aqui, você pode utilizar o comando `console.log()`. Ele permite que você imprima seu código no console do navegador (para ver o console no Google Chrome ou no Firefox, basta pressionar a tecla `F12`).

Exemplo:

```js
console.log("Teste");
```

## Você já viu isto antes

Na escola, e talvez na faculdade também, você estudou matemática. Não se prenda ao mito de que para ser um bom programador é importante ser bom com contas também, mas alguns processos envolvidos em escrever um algoritmo se assemelham muito aos que utilizamos para resolver problemas matemáticos.

### Variáveis

Quando desejamos armazenar um determinado valor em algum lugar, utilizamos variáveis. Veja o exemplo abaixo:

```js
var x = 10;
var y = 20;

x + y;
```

O código acima parece muito o que víamos o professor escrever na lousa; mas é puro código JavaScript.

Utilizar variáveis permite que você guarde valores para utilizar mais tarde, ou alterar. Por exemplo:

```js
var z = x + y; // x é igual a 30

z = z + z; // z é igual a 60
```

> Note que uma vez declarada sua variável, você não precisa mais utilizar a palavra-chave `var` antes dela.

O código acima poderia ser escrito de diferentes formas, como acontece na matemática. Por exemplo:

```js
z = z * 2; // multiplica o valor de z por 2
z += z; // acrescenta ao valor de z o valor dele próprio
```

Em todos estes casos, obteríamos o mesmo resultado. Mas convenhamos que o último modo foi o mais simples, não foi? Por isso, sempre busque utilizar a forma mais enxuta e legível de realizar uma operação.

## Tipos

A JavaScript possui diversos tipos primitivos, que são aqueles mais básicos e que dão origem a outros tipos. Conheça agora os principais.

### `Number`

Já vimos algo sobre os números enquanto entendíamos variáveis. As operações que podemos realizar com eles são basicamente aquelas que vemos no mundo real.

#### Adição

```js
1 + 2
```

#### Subtração

```js
1 - 2
```

#### Multiplicação

```js
1 * 2
```

#### Divisão

```js
1 / 2
```

#### Resto

Retorna o resto de uma divisão. Por exemplo:

```js
10 % 3
```

Neste caso, o valor retornado é `1`.

### `String`

Representa um valor em texto.

```js
var nome = "John";
```

Também podemos unir dois textos:

```js
var boasVindas = "Bem-vindo, ";
var nomeCompleto = "John Depp";
var mensagem = boasVindas + nomeCompleto;
```

Isto irá imprimir `"Bem-vindo, John Depp"`.

Há muitas operações que podem ser realizadas com strings. Podemos, por exemplo, deixar o texto todo mínusculo ou maiúsculo:

```js
mensagem.toLowerCase(); // "bem-vindo, john depp"
mensagem.toUpperCase(); // "BEM-VINDO, JOHN DEPP"
```

Ou obter o comprimento da `string`:

```js
mensagem.length; // 20
```

Não há problemas em unir strings a números também. Veja:

```js
var idade = 19;
var nome = "Louis";

console.log(nome + " tem " + idade + " anos"); // "Louis tem 19 anos"
```

### `Array`

Representa uma lista. Exemplo:

```js
var listaCompras = ["feijao", "arroz", "alface"];
```

Para descobrir quantos ítens há em um `array`, você pode ler a propriedade `length` (comprimento) dele.

```js
listaCompras.length; // 3
```

Acessar os ítens de um `array` também é simples. Basta informar o índice dele na lista.

```js
listaCompras[0]; // "feijao"
listaCompras[2]; // "alface"
```

> Perceba que os índices de um `array` começam pelo número `0`. Portanto, o primeiro índice do nosso exemplo é `0` e o último é `2`.

Também podemos sobescrever o valor de um índice:

```js
listaCompras[2] = "banana";
listaCompras[2]; // "banana"
```

Vale lembrar que um `array` pode conter quaisquer valores dentro de si, o que inclui até mesmo outros arrays e variáveis. Por exemplo:

```js
var lista = [
  1,
  2,
  "Janela",
  [
    "feijao",
    "arroz",
    "alface"
  ],
  nomeCompleto
]
```

## Exemplo prático

OK, já temos bastante conhecimento novo para assimilar. Então, vamos começar desenvolvendo um algoritmo simples, utilizando mais um recurso da JavaScript: funções.

As funções executam um determinado código quantas vezes nós precisarmos. Para o nosso exemplo, vamos criar uma que dá as boas-vindas ao usuário:

```js
function boasVindas(nome) {
  console.log("Boas-vindas a você, " + nome);
}
```

Se você executar o código acima nada irá acontecer. Mas por quê? Porque uma função não é executada até que seja chamada. Então vamos lá:

```js
boasVindas("Sílvia");
boasVindas("Carlos");
boasVindas("João");
```

Após executar o código acima, você deverá ver o seguinte no console do seu navegador:

```js
"Boas-vindas a você, Sílvia"
"Boas-vindas a você, Carlos"
"Boas-vindas a você, João"
```

Certo. Agora podemos deixar nosso código mais completo. Que tal criar uma lista de pessoas que já foram agraciadas com as nossas boas-vindas? Vamos reescrever nosso código:

```js
// Lista de nomes já chamados
var pessoas = [];

// Função que dá boas-vindas
function boasVindas(nome) {
  console.log("Boas-vindas a você, " + nome);

  // Adicionar nome à lista
  pessoas.push(nome);
}

// Dar boas-vindas
boasVindas("Sílvia");
boasVindas("Carlos");
boasVindas("João");

// Mostrar nomes já chamados
console.log(pessoas);
```

Legal! Utilizando o método `push()` do `array`, conseguimos adicionar ítens à nossa lista de pessoas.

### Condicionais

Já estamos sendo bem educados com os nossos usuários. Mas não queremos cometer o erro de dar boas-vindas a eles mais de uma vez. Como podemos evitar este engano?

Uma boa maneira de fazer isso é por adicionar uma condicional que avalia se o nome já existe na lista. Veja como a nosssa funcão `boasVindas` ficaria:
```js
function boasVindas(nome) {
  console.log("Boas-vindas a você, " + nome);

  if (!pessoas.includes(nome)) {
    // Adicionar nome à lista
    pessoas.push(nome);
  }
}
```

O método `includes` do `array` verifica se o valor passado dentro dele existe na lista. Se sim, retorna `true` (verdadeiro), se não retorna `false` (falso).

Quando o retorno de um método ou de uma variável é `true` ou `false`, dizemos que seu tipo é `boolean`. Os booleanos servem justamente para sabermos se algo é verdade ou não.

O que a condicional `if` faz é avaliar se um `boolean` é verdadeiro e, se for, irá executar o código dentro das chaves (`{}`).

No nosso exemplo, queremos saber se a lista de pessoas inclui o nome que determinamos. Então, imagine que o nome `"Carlos"` já foi chamado uma vez. Na segunda, ao perguntarmos se a lista de pessoas inclui aquele nome, `true` seria retornado, indicando que sim. Mas isso faria com que o código dentro das chaves fosse rodado e o nome incluído novamente. Não é isso que nós queremos, certo?

Por isso, utilizamos o operador de `!` antes da nossa condição. Ele inverte o valor do `boolean`. Ou seja, ao utilizarmos a condição `!pessoas.includes(nome)` estamos como que dizendo: "Se a lista NÃO possuir este nome dentro dela, rode o código dentro das chaves".

Deste modo, um nome só será adicionado à lista se ele realmente ainda não estiver lá. Para verificar isto, basta fazer o teste novamente:

```js
boasVindas("Sílvia");
boasVindas("Carlos");
boasVindas("Carlos");
boasVindas("João");
```

Agora, a lista de pessoas não terá nomes repetidos. No nosso exemplo, ela ficou da seguinte forma:

`["Sílvia", "Carlos", "João"]`

#### if/else

Talvez você queira ser notificado quando repetir um nome sem querer. Poderíamos mostrar esse aviso da seguinte maneira:

```js
if (!pessoas.includes(nome)) {
   // Adicionar nome à lista
  pessoas.push(nome);
} else {
  // Avisar que pessoa já está na lista
  console.warn(nome + " já foi adicionado à lista de pessoas!");
}
```

O código dentro das chaves de `else` é rodado quando a condição de `if` é falsa.

Para guardar bem isso na mente, veja um exemplo mais simples:

```js
if (1 < 2) {
  console.log("Um é menor que dois");
} else {
  console.log("Um é maior que dois");
}
```

No exemplo acima, o código dentro de `if` seria rodado, pois `1` é realmente menor que `2`. Para fins de teste, troque o operador `<` (menor que) pelo operador `>` (maior que) e veja o que acontece.

Você ainda pode passar mais de uma condição com as palavras-chave `else if`, utilizando o último `else` como código a ser executado caso nenhuma seja verdadeira:

```js
if (1 < 2) {
  console.log("Um é menor que dois");
}
else if (1 === 2) {
  console.log("Um é igual a dois");
}
else {
  console.log("Um é maior que dois");
}
```

> O operador `===` verifica se um elemento é igual a outro de todas as formas. Ou seja, ele checa tanto o **valor** como o **tipo** de um e de outro. Por exemplo, `1 == "1"` retorna `true`, pois o valor dos dois elementos é o mesmo, apesar de serem de tipos diferentes. Por outro lado, `1 === "1"` retorna `false`, pois um é do tipo `Number` e o outro é do tipo `String`, ou seja, os dois elementos não são totalmente iguais.