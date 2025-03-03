import {v4 as uuidv4 } from 'uuid'

type TPost = {
    titulo: string
};

export default class Post {
    readonly id: string; 
    constructor(post: TPost){
        this.id = this.gerarId();
;
    };

    private gerarId(): string{
        return uuidv4()
    };
};