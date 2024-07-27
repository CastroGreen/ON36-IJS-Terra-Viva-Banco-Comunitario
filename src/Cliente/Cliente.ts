import { Conta } from "../Conta/Conta";

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

export { Cliente };
