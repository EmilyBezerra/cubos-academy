import express, { Response, Request } from 'express'

const servidor = express()

const controlador = (req: Request, res: Response) => {
    return res.send('Meu primeiro servidor Node.js com express')
};

servidor.get('/home', controlador);

servidor.listen(3000);