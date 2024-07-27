import { Conta } from "../Conta/Conta";

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

export { ContaCorrente };
