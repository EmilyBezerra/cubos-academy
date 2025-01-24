import { soma, subtracao, multiplicacao, divisao } from "../calculadora";

describe('Testes de calculadora ', () => {
    test('Deve verificar o resultado de uma soma', () => {
        expect(soma(5, 5)).toBeCloseTo(10) 
    });
    test('Deve verificar o resultado de uma subtração', () => {
        expect(subtracao(5, 5)).toBeCloseTo(0)
    });
    test('Deve verificar o resultado de uma multiplicação', () => {
        expect(multiplicacao(5, 5)).toBeCloseTo(25)
    });
    test('Deve verificar o resultado de uma divisão', () => {
        expect(divisao(5, 5)).toBeCloseTo(1)
    });
});