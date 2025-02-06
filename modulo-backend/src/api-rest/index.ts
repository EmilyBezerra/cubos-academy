import express from 'express';
import 'dotenv/config'

const servidor = express();

servidor.get('/', (req, res) => {
    return res.send('OK')
});

servidor.listen(process.env.PORT);