function verificarIdade(idade) {
    return new Promise((resolver, rejeitar) => {
        if(idade > 17) {
            resolver(`${idade} anos está liberado`)
            return
        }

        rejeitar(`${idade} anos não está liberado`)
    })
}

verificarIdade(18).then((resultado) => {
    console.log(resultado)
}).catch((erro) => {
    console.log(erro)
})