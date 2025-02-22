class Lampada {
    private interruptor: boolean
    private watts: number

    constructor(watts: number) {
        this.interruptor = false
        this.watts = watts
    };

    medirPotencia(): number {
        return this.watts
    };

    desligar(): boolean | string {
        if(this.interruptor) {
            return !this.interruptor
        }
        else {
            return "O interruptor já está desligado"
        }
    };

    ligar(): boolean | string {
        if(!this.interruptor) {
            return this.interruptor
        }
        else {
            return "O interruptor já está ligado"
        }
    };
};

const lampada = new Lampada(50);

console.log(lampada.desligar());
console.log(lampada.ligar());
console.log(lampada.medirPotencia());