class Carro {
	nome;
	velocidadeAtual = 0;
	velocidadeMaxima;
	constructor(nome, velocidadeMaxima) {
		this.nome = nome;
		this.velocidadeMaxima = velocidadeMaxima || 220;
	}
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

class Turbo extends Carro {
	super(nome, velocidadeMaxima) {
		this.nome = nome;
		this.velocidadeMaxima = valocidadeMaxima;
	};
	turbo() {
		this.velocidadeAtual = this.velocidadeMaxima;
	}
}
