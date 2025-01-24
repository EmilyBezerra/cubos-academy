export function calcularResultadoVenda (precoVenda: number, precoCompra: number): string {
    const resultadoVenda: number = precoVenda - precoCompra

    if (resultadoVenda > 0) 
    {
        return `O valor do lucro é de R$ ${resultadoVenda}`
    }

    else if (resultadoVenda <0)
    {
        return `O valor do prejuízo é de R$ ${resultadoVenda}`
    }

    else 
    {
        return `Venda a preço de custo`
    }
}

