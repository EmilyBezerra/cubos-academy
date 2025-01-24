
## Funções Implementadas

### 1. Calculadora (`calculadora.ts`)
Contém as seguintes operações matemáticas:
- `soma(numero1: number, numero2: number): number`
- `subtracao(numero1: number, numero2: number): number`
- `multiplicacao(numero1: number, numero2: number): number`
- `divisao(numero1: number, numero2: number): number`

**Testes**:
Os testes verificam a precisão dos resultados das operações básicas de soma, subtração, multiplicação e divisão.

### 2. Checagem de Senha (`checagemSenha.ts`)
Valida senhas baseadas em dois critérios:
1. Ter pelo menos 4 caracteres.
2. Conter apenas números.

- `checagemSenha(senha: string): string`

**Testes**:
Testam se senhas válidas e inválidas retornam as mensagens esperadas.

### 3. Resultado de Venda (`resultadoVenda.ts`)
Calcula o resultado de uma venda (lucro, prejuízo ou preço de custo):
- `calcularResultadoVenda(precoVenda: number, precoCompra: number): string`

**Testes**:
- Verifica se o cálculo retorna corretamente "lucro", "prejuízo" ou "preço de custo".

### 4. Validação de Cadastro (`validarCadastro.ts`)
Verifica se os dados de cadastro possuem todos os campos obrigatórios:
- `validarCadastro(dados: { nome?: string; email?: string; senha?: string }): string | true`

**Testes**:
- Verifica as mensagens de erro quando campos obrigatórios estão ausentes.
- Retorna `true` quando todos os campos são fornecidos.

## Testes Automatizados

Os testes estão localizados na pasta `src/testes/` e foram implementados com Jest.

### Instruções para rodar o projeto

1. Crie um fork deste repositório
2. Clone o repositório para sua máquina ultilizando o comando `git clone` + url do projeto
3. Abra em seu editor de código 
4. Use o comando `npm install` no seu terminal para instalar as dependências necessárias para rodar o projeto
5. Dentro da pasta `src/testes/` use o comando npm `run jest para` para rodar os testes 


