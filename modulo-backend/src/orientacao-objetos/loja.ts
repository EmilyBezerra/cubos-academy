class Loja {
    private nome: string
    private endereco: string 

    constructor (nome: string, endereco: string) {
        this.nome = nome
        this.endereco = endereco
    };

    alterarNome (nome: string): void {
        this.nome = nome
    }; 

    alterarEndereco (endereco: string): void {
        this.endereco = endereco
    }; 

};

const studio = new Loja('Gojira Studio', 'Av. Ana Costa nº 100');
console.log(studio);
studio.alterarNome('Gojira Tatto  Studio');
console.log(studio);
studio.alterarEndereco('Av. Ana Costa nº 100 - Yara Center');
console.log(studio);