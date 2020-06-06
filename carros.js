class Carro {
  constructor(nome, velocidadeMaxima) {
    this.nome = nome;
    this.velocidadeMaxima = velocidadeMaxima || 220;
    this.velocidadeAtual = 0;
  }
  acelerar(valor) {
    if (this.velocidadeAtual + valor <= this.velocidadeMaxima) {
      this.velocidadeAtual += valor;
    }
  }
  frear(valor) {
    if (valor && this.velocidadeAtual >= valor) {
      this.velocidadeAtual -= valor;
    } else {
      this.velocidadeAtual = 0;
    }
  }
}

class Turbo extends Carro {
  turbo() {
    this.velocidadeAtual = this.velocidadeMaxima;
  }
}