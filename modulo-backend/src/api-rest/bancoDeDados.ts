type TIntrutores = {
    id: number,
    nome: string,
    email: string;
};

type TAula = {
    id: number
    nome: string
}

export let proximoId = 1

export const instrutores: TIntrutores[] = [ 
    {
        id: proximoId++,
        nome:  'Guido',
        email: 'guido@email.com'
    },
    {
        id: proximoId++,
        nome:  'Maria',
        email: 'maria@email.com'
    },
    {
        id: proximoId++,
        nome:  'João',
        email: 'joao@email.com'
    },
];


