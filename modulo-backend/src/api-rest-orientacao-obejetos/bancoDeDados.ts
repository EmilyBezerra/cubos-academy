import Autor from "./modelos/Autor";
import Post from "./modelos/Post";

export const autores: Autor[] = [
    new Autor({
        nome: 'Guido',
        idade: 33
    })
];
export const posts: Post[] = [
    new Post({
        titulo: 'Meu primeiro post',
        descricao: 'Descrição do meu primeiro post',
        autor: new Autor({
            nome: 'Emily',
            idade: 25
        })
    })
];