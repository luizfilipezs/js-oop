# Programação orientada a objetos na JavaScript

## O que é um objeto?

Antes de entendermos o conceito de programação orientada a objetos, é válido compreender o que é um objeto. 

Na JavaScript, o objeto pode ser interpretado como um dicionário, pois possui um conjunto de `key/value`, isto é, um conjunto de chaves e valores.

Por exemplo, se você deseja saber o que significa a palavra "inspiração", procura por ela dentro de um dicionário para saber qual é o valor correspondente a ela. Na JS, o que ocorre é o mesmo. Se deseja saber qual é o valor de determinada chave, ou propriedade, de um objeto, faz referência a ela.

### Sintaxe

O objeto na JS é representado por `{}`. Seguindo o exemplo anterior, suponhamos que deseja criar uma variável cujo valor é um pequeno dicionário de palavras. Veja como podemos fazer:

```
var dicionario = {
	programar: 'Significado de programar',
	café: 'Significado de café',
	inspiração: 'Significado de inspiração',
	codificar: 'Signifcado de codificar'
};
```
Certo, temos nosso dicionário. Mas como procuramos o significado de "inspiração" dentro dele?
```
var significado = dicionario.inspiração;
```
Se imprimirmos o valor da variável `significado` na tela ou no console, o valor obtido será "Significado de inspiração". Bem mais simples do que folhear um dicionário, não acha?

Agora vamos para um outro exemplo. Suponhamos que deseja desenvolver um jogo de corrida. Para isto, cada carro possuirá as informações nome, velocidade atual e velocidade máxima e algumas ações, como acelerar ou freiar. Como podemos fazer isso?
```
var carro1 = {
	nome: 'Carro 1',
	velocidadeAtual: 0,
	velocidadeMaxima: 220,
	acelerar: function(valor) {
		if (this.velocidadeAtual + valor <= this.velocidadeMaxima) {
			this.velocidadeAtual += valor;
		}
	},
	freiar: function(valor) {
		if (this.velocidadeAtual - valor >= 0) {
			this.velocidadeAtual -= valor;
		}
	}
};
```

Certo, agora estamos com um objeto um pouco diferente: ele possui propriedades métodos. O que difere um método de uma propriedade? É que seus valores são funções. Ou seja, métodos realizam ações, podendo modificar as propriedades do objeto ao qual fazem parte. No nosso exemplo, o método `acelerar` acessa as propriedades `velocidadeAtual` e `velocidadeMaxima`, verifica se a velocidade do carro pode ser aumentada e, se sim, altera o valor da `velocidadeAtual`, acrescentando o valor que passamos como argumento.

Na prática, poderíamos utilizar o código acima da seguinte forma para testar os comandos:
```
carro1.acelerar(20); // Altera a velocidade para 20
carro1.acelerar(25); // Altera a velocidade para 45
carro1.freiar(10); // Altera a velocidade para 35
```

Agora preste atenção a um detalhe:
```
acelerar: function(valor) {
	if (this.velocidadeAtual + valor <= this.velocidadeMaxima) {
		this.velocidadeAtual += valor;
	}
},
```
Porque utilizamos a palavra-chave `this` antes do nome da propriedade que desejamos ler ou alterar? Porque propriedades e métodos são dependentes do objeto ao qual fazem parte. Portanto, se escrevêssemos apenas `velocidadeAtual`, o nosso interpretador buscaria por uma variável com este nome ao invés da propriedade dentro do objeto. Isto quer dizer que sempre devemos utilizar a seguinte sintaxe para ler propriedades fora do objeto:

`nomeDoObjeto.nomeDaPropriedade;`

Mas para ler uma propriedade dentro do objeto ao qual ela faz parte, devemos utilizar a sintaxe:

`this.nomeDaPropriedade;`


## Quais as vantagens de um código orientado a objetos?

A vantagem já começa pelo fato de que tudo na JS é um objeto, o que inclui o escopo global onde escrevemos o nosso código. Quer ver?
```
console.log('Algum texto aqui');
this.console.log('Outro texto aqui');
```
Se rodar este código e abrir o console, as duas linhas irão aparecer, incluindo aquela que possui a palavra-chave `this` antes da referência ao `console`.

Mas as vantagens se tornam perceptíveis ao passo que o nosso código aumenta. No mesmo exemplo do jogo de carros, controlar as propriedades do carro dentro de um objeto é realmente muito eficaz. Mas e se você tivesse que criar 10 carros? Aí o código ficaria bem extenso, sem considerar ainda que seria fácil cometer erros, como por exemplo, escrever errado o nome de alguma propriedade ou método. Como podemos contornar esta situação?

## Classes

As classes permitem que criemos um modelo de objeto que representará uma entidade específica do nosso código. Como ficaria o código anterior se quiséssemos adicionar um novo carro, mas sem o uso de uma classe?

```
var carro1 = {
	nome: 'Carro 1',
	velocidadeAtual: 0,
	velocidadeMaxima: 220,
	acelerar: function(valor) {
		if (this.velocidadeAtual + valor <= this.velocidadeMaxima) {
			this.velocidadeAtual += valor;
		}
	},
	freiar: function(valor) {
		if (this.velocidadeAtual - valor >= 0) {
			this.velocidadeAtual -= valor;
		}
	}
};

var carro2 = {
	nome: 'Carro 2',
	velocidadeAtual: 0,
	velocidadeMaxima: 220,
	acelerar: function(valor) {
		if (this.velocidadeAtual + valor <= this.velocidadeMaxima) {
			this.velocidadeAtual += valor;
		}
	},
	freiar: function(valor) {
		if (this.velocidadeAtual - valor >= 0) {
			this.velocidadeAtual -= valor;
		}
	}
};
```

Como citado antes, extenso. Já pensou ter de criar 1000 carros deste modo? Ainda bem que podemos criar uma classe que facilitará nosso trabalho. Veja só:

```
class Carro {
	nome;
	velocidadeAtual = 0;
	velocidadeMaxima = 220;
	acelerar(valor) {
		if (this.velocidadeAtual + valor <= this.velocidadeMaxima) {
			this.velocidadeAtual += valor;
		}
	}
	freiar(valor) {
		if (this.velocidadeAtual - valor >= 0) {
			this.velocidadeAtual -= valor;
		}
	}
}
```

Agora, se quisermos criar um novo carro, podemos invocar a nossa classe utilizando a palavra-chave `new`:
```
var carro1 = new Carro();
```
Podemos alterar os valores do objeto ou utilizar seus métodos, da seguinte forma:
```
carro1.nome = 'Carro1';
carro1.acelerar(100);
```
Tudo bem, o código acima funciona, mas ainda não está prático o bastante. Que tal inserirmos preenchermos a propriedade `nome` logo quando criamos o objeto? Para isso, podemos inserir um construtor na nossa classe. O método `constructor` é rodado assim que criamos uma nova instância da nossa classe. Podemos acrescentar ele ao nosso código da seguinte maneira:

```
class Carro {
	nome;
	// Outras propriedades
	...
	constructor(nome) {
		this.nome = nome;
	}
	...
	//Outros métodos
}
```

Agora, ao criar nossos carros, podemos fazer da seguinte forma:

```
var carro1 = new Carro('Carro 1');
var carro2 = new Carro('Carro 2');
```

Lembra daquele código enorme que escrevemos no princípio? Agora ele foi diminuído para apenas duas linhas. Podemos modificar outras propriedades no nosso `constructor`. Todo jogo de corrida legal possui carros com velocidades diferentes. Vamos deixar o nosso assim também?

Podemos deixar um valor de velocidade máxima padrão caso nenhum outro seja informado, bem como podemos inserir um valor personalizado. Veja:
```
class Carro {
	nome;
	...
	velocidadeMaxima;
	constructor(nome, velocidadeMaxima) {
		this.nome = nome;
		this.velocidadeMaxima = velocidadeMaxima || 220;
	}
	...
}
```

Nossos carros já podem ser criados dessa forma:
```
var carro1 = new Carro('Carro lento', 60);
var carro2 = new Carro('Carro com velocidade padrão');
var carro3 = new Carro('Carro veloz', 300);
```
As velocidades máximas destes carros serão, respectivamente: 60, 220 e 300.

### O que significa ser um carro?

As classes devem sempre representar uma entidade. No nosso caso, a entidade é o carro. Ao criar uma classe baseado em uma entidade - neste caso o carro -, pare e pense: o que significa ser um carro? O que um carro tem? O que ele faz? As propriedades e métodos da classe serão instanciadas em todos os objetos por ela criados. Portanto, só coloque na classe Carro aquilo que todos os carros do jogo irão possuir.

Isso quer dizer que haverá casos em que você terá carros com as mesmas propriedades e métodos da classe Carro, entretanto com algumas características distintas. Por exemplo, vamos supor que alguns carros tenham a opção turbo, que faz com que o carro vá direto à sua velocidade máxima.

Estes carros continuarão tendo as mesmas propriedades e métodos que os outros, entretanto terão também o método `turbo`. E agora? Como resolvemos isso?

### Extends 

Para criar carros com a opção turbo, podemos criar uma nova classe que irá estender a classe Carro.
```
class Turbo extends Carro {
	super(nome, velocidadeMaxima);
	turbo() {
		this.velocidadeAtual = this.velocidadeMaxima;
	}
}
```
O que faz o `super`? Ele é obrigatório, pois estende o `constructor` da classe original, no caso, Carro. Se o `constructor` possui parâmetros, passamos eles ao `super`, senão deixamos ele vazio, assim: `super();`.

Que tal criarmos nossos carros?

```
var carro1 = new Carro('Carro normal');
var carro2 = new Turbo('Carro com turbo', 320);
carro2.turbo();
carro2.freiar(20);
```
A velocidade atual de `carro2` é 300.
