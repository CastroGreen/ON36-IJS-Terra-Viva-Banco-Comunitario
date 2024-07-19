"use strict";
class Cliente {
  constructor(nomeCompleto, numeroIdentificacao, endereco, numeroTelefone) {
    this.nomeCompleto = nomeCompleto;
    this.numeroIdentificacao = numeroIdentificacao;
    this.endereco = endereco;
    this.numeroTelefone = numeroTelefone;
    this.contas = [];
  }
  adicionarConta(conta) {
    this.contas.push(conta);
  }
}

class ContaCorrente {
  constructor(numeroConta, saldoInicial, limiteChequeEspecial) {
    this.numeroConta = numeroConta;
    this.saldo = saldoInicial;
    this.limiteChequeEspecial = limiteChequeEspecial;
  }
  depositar(valor) {
    this.saldo += valor;
  }
  sacar(valor) {
    if (valor <= this.saldo + this.limiteChequeEspecial) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente.");
    }
  }
  transferir(valor, contaDestino) {
    if (valor <= this.saldo + this.limiteChequeEspecial) {
      this.sacar(valor);
      contaDestino.depositar(valor);
    } else {
      console.log("Saldo insuficiente.");
    }
  }
}

class ContaPoupanca {
  constructor(numeroConta, saldoInicial, taxaJuros) {
    this.numeroConta = numeroConta;
    this.saldo = saldoInicial;
    this.taxaJuros = taxaJuros;
  }
  depositar(valor) {
    this.saldo += valor;
  }
  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente.");
    }
  }
  transferir(valor, contaDestino) {
    if (valor <= this.saldo) {
      this.sacar(valor);
      contaDestino.depositar(valor);
    } else {
      console.log("Saldo insuficiente.");
    }
  }
}

// Criando um cliente
const cliente1 = new Cliente(
  "Ozzy Silva",
  "123456789",
  "Rua Amazonas, 123",
  "11987654321"
);

// Criando contas para o cliente
const contaCorrente1 = new ContaCorrente("001", 1000, 500);
const contaPoupanca1 = new ContaPoupanca("002", 2000, 0.01);

// Adicionando contas ao cliente
cliente1.adicionarConta(contaCorrente1);
cliente1.adicionarConta(contaPoupanca1);

// Realizando operações
contaCorrente1.depositar(200);
contaCorrente1.sacar(500);
contaCorrente1.transferir(300, contaPoupanca1);

console.log(cliente1);
