import { Conta } from "../Conta/Conta";

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

export { ContaPoupanca };
