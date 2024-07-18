"use strict";
var Cliente = /** @class */ (function () {
    function Cliente(nomeCompleto, numeroIdentificacao, endereco, numeroTelefone) {
        this.nomeCompleto = nomeCompleto;
        this.numeroIdentificacao = numeroIdentificacao;
        this.endereco = endereco;
        this.numeroTelefone = numeroTelefone;
        this.contas = [];
    }
    Cliente.prototype.adicionarConta = function (conta) {
        this.contas.push(conta);
    };
    return Cliente;
}());
var ContaCorrente = /** @class */ (function () {
    function ContaCorrente(numeroConta, saldoInicial, limiteChequeEspecial) {
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
        this.limiteChequeEspecial = limiteChequeEspecial;
    }
    ContaCorrente.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    ContaCorrente.prototype.sacar = function (valor) {
        if (valor <= this.saldo + this.limiteChequeEspecial) {
            this.saldo -= valor;
        }
        else {
            console.log("Saldo insuficiente.");
        }
    };
    ContaCorrente.prototype.transferir = function (valor, contaDestino) {
        if (valor <= this.saldo + this.limiteChequeEspecial) {
            this.sacar(valor);
            contaDestino.depositar(valor);
        }
        else {
            console.log("Saldo insuficiente.");
        }
    };
    return ContaCorrente;
}());
var ContaPoupanca = /** @class */ (function () {
    function ContaPoupanca(numeroConta, saldoInicial, taxaJuros) {
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
        this.taxaJuros = taxaJuros;
    }
    ContaPoupanca.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    ContaPoupanca.prototype.sacar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
        else {
            console.log("Saldo insuficiente.");
        }
    };
    ContaPoupanca.prototype.transferir = function (valor, contaDestino) {
        if (valor <= this.saldo) {
            this.sacar(valor);
            contaDestino.depositar(valor);
        }
        else {
            console.log("Saldo insuficiente.");
        }
    };
    return ContaPoupanca;
}());
// Criando um cliente
var cliente1 = new Cliente("João Silva", "123456789", "Rua A, 123", "11987654321");
// Criando contas para o cliente
var contaCorrente1 = new ContaCorrente("001", 1000, 500);
var contaPoupanca1 = new ContaPoupanca("002", 2000, 0.01);
// Adicionando contas ao cliente
cliente1.adicionarConta(contaCorrente1);
cliente1.adicionarConta(contaPoupanca1);
// Realizando operações
contaCorrente1.depositar(200);
contaCorrente1.sacar(500);
contaCorrente1.transferir(300, contaPoupanca1);
console.log(cliente1);
