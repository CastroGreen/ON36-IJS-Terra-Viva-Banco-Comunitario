class Cliente {
  nomeCompleto: string;
  numeroIdentificacao: string;
  endereco: string;
  numeroTelefone: string;
  contas: Conta[];

  constructor(
    nomeCompleto: string,
    numeroIdentificacao: string,
    endereco: string,
    numeroTelefone: string
  ) {
    this.nomeCompleto = nomeCompleto;
    this.numeroIdentificacao = numeroIdentificacao;
    this.endereco = endereco;
    this.numeroTelefone = numeroTelefone;
    this.contas = [];
  }

  adicionarConta(conta: Conta) {
    this.contas.push(conta);
  }
}

interface Conta {
  numeroConta: string;
  saldo: number;

  depositar(valor: number): void;
  sacar(valor: number): void;
  transferir(valor: number, contaDestino: Conta): void;
}

class ContaCorrente implements Conta {
  numeroConta: string;
  saldo: number;
  limiteChequeEspecial: number;

  constructor(
    numeroConta: string,
    saldoInicial: number,
    limiteChequeEspecial: number
  ) {
    this.numeroConta = numeroConta;
    this.saldo = saldoInicial;
    this.limiteChequeEspecial = limiteChequeEspecial;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): void {
    if (valor <= this.saldo + this.limiteChequeEspecial) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente.");
    }
  }

  transferir(valor: number, contaDestino: Conta): void {
    if (valor <= this.saldo + this.limiteChequeEspecial) {
      this.sacar(valor);
      contaDestino.depositar(valor);
    } else {
      console.log("Saldo insuficiente.");
    }
  }
}

class ContaPoupanca implements Conta {
  numeroConta: string;
  saldo: number;
  taxaJuros: number;

  constructor(numeroConta: string, saldoInicial: number, taxaJuros: number) {
    this.numeroConta = numeroConta;
    this.saldo = saldoInicial;
    this.taxaJuros = taxaJuros;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): void {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente.");
    }
  }

  transferir(valor: number, contaDestino: Conta): void {
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
  "João Silva",
  "123456789",
  "Rua A, 123",
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
