interface Conta {
  numeroConta: string;
  saldo: number;

  depositar(valor: number): void;
  sacar(valor: number): void;
  transferir(valor: number, contaDestino: Conta): void;
}

export { Conta };
