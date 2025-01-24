export function validarCadastro(dados: { nome?: string; email?: string; senha?: string }): string | true {
    if (!dados.nome || !dados.email || !dados.senha) {
      return "Todos os campos são obrigatórios";
    }
    return true;
  }
  