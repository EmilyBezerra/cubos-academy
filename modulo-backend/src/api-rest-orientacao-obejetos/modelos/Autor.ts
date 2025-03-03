import {v4 as uuidv4 } from 'uuid'

type TAuttor = {
    nome: string;
    idade: number;
};

export default class Autor {
    readonly id: string; 
    nome: string; 
    idade: number;

    constructor(autor: TAuttor){
        this.id = this.gerarId();
        this.nome = autor.nome;
        this.idade = autor.idade;
    };

    private gerarId(): string{
        return uuidv4()
    };
};