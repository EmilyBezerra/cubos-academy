import 'dotenv/config';
import express, { Request, Response } from 'express';


const numero1 = Number(process.env.NUM_1);
const numero2 = Number(process.env.NUM_2);

const servidor = express();


if (isNaN(numero1) || isNaN(numero2)) {
    console.error('Erro: NUM_1 e NUM_2 devem ser números válidos.');
    process.exit(1); 
}

const controladorSomar = (req: Request, res: Response) => {
    return res.send(`A soma de ${numero1} e ${numero2} é: ${numero1 + numero2}`);
};

const controladorSubtrair = (req: Request, res: Response) => {
    return res.send(`A subtração de ${numero1} e ${numero2} é: ${numero1 - numero2}`);
};

const controladorMultiplicar = (req: Request, res: Response) => {
    return res.send(`A multiplicação de ${numero1} e ${numero2} é: ${numero1 * numero2}`);
};

const controladorDividir = (req: Request, res: Response) => {
    if (numero2 === 0) {
        return res.send('Erro: Não é possível dividir por zero.');
    }
    return res.send(`A divisão de ${numero1} e ${numero2} é: ${numero1 / numero2}`);
};

servidor.get('/somar', controladorSomar);
servidor.get('/subtrair', controladorSubtrair);
servidor.get('/multiplicar', controladorMultiplicar);
servidor.get('/dividir', controladorDividir);

servidor.listen(process.env.PORT, () => {
    console.log('Servidor rodando na porta 3000');
});



