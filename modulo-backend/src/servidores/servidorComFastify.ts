import Fastify from "fastify";

const servidor = Fastify({
    logger: true
});

servidor.get('/', function controlador (req, res) {
    const saudacao = 'Bem vindo ao primeiro servidor Node.js com Fastity'
    return res.send(saudacao)
});

servidor.listen({
    port: 3000
});