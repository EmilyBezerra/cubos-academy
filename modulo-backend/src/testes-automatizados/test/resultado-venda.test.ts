import { calcularResultadoVenda } from "../resultadoVenda";

describe('Teste do resultado de uma venda', () => {
    test('Deve calcular o prejuízo de uma venda', () => {
        expect(calcularResultadoVenda(10, 20)).toBe('O valor do prejuízo é de R$ -10');
    });

    test('Deve calcular o lucro de uma venda', () => {
        expect(calcularResultadoVenda(20, 10)).toBe('O valor do lucro é de R$ 10');
    });

    test('Deve calcular o preço a custo', () => {
        expect(calcularResultadoVenda(10, 10)).toBe('Venda a preço de custo');
    });
});
