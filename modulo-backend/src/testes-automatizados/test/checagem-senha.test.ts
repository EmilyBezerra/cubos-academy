import { checagemSenha } from "../checagemSenha"

describe('Teste para checar se a senha é valida', () => {
    test('Verifica se a senha é valida', () => {
        expect(checagemSenha('12345')).toBe('SENHA VALIDA')
    }) 

    test('Verifica se a senha é invalida', ()  => {
        expect(checagemSenha('a1234')).toBe('SENHA INVÁLIDA')
    })
}) 