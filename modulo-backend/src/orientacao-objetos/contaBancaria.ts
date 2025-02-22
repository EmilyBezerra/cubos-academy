class ContaBancaria {
    private numeroConta: string;
    private nomeTitular: string;
    private saldo: number;

    constructor(numeroConta: string, nomeTitular: string, saldo: number) {
        this.numeroConta = numeroConta;
        this.nomeTitular = nomeTitular;
        this.saldo = saldo;
    }

    deposito(valor: number): void {
        this.saldo += valor;
    }

    saque(valor: number): string | void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            return "Saldo insuficiente";
        }
    }

    getSaldo(): number {
        return this.saldo;
    }
}


const contaBancaria = new ContaBancaria("123456", "Emily Bezerra", 1000);

contaBancaria.deposito(500);
console.log(contaBancaria.getSaldo()); 

const resultadoSaque = contaBancaria.saque(2000);
if (resultadoSaque) {
    console.log(resultadoSaque); 
}

console.log(contaBancaria.getSaldo()); 
