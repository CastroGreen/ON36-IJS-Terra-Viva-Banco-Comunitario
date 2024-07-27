// console.log(cliente1);
import { Cliente } from "./Cliente/Cliente";
import { ContaCorrente } from "./ContaCorrente/ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca/ContaPoupanca";

// Criando um cliente
const cliente1 = new Cliente(
  "Ozzy Silva",
  "123456789",
  "Rua Amazonas, 12366",
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
