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
