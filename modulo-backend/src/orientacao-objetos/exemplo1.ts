class Carro {
   public cor: string
   private marca: string
   private modelo: string
   private ano: number
   public potencia: number

   public ligado: boolean
   public aceleracao: number

    constructor(cor: string, marca: string, modelo: string, ano: number, potencia: number) {
        this.cor = cor
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.potencia = potencia
        this.ligado = false
        this.aceleracao = 0
    };

    public ligarOuDesligar(): void {
        if(this.ligado) {
            this.desacelerar()
            this.ligado = false
        } else {
            this.ligado = true
        }
    };

    public acelerar(rpm: number): void {
        this.aceleracao += rpm     
    };

    public estadoDoCarro(): string {
    return this.ligado ? 'O carro está ligado' : 'O carro está desligado'
    };

    private desacelerar() {
            this.aceleracao = 0
    }
};

const fusca = new Carro('Preto', 'Volkswagen', 'Fusca', 1970, 90 );

console.log(fusca);
console.log(fusca.estadoDoCarro());

