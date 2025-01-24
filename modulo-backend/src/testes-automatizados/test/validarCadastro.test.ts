import { validarCadastro } from "../validarCadastro";

describe("Função validarCadastro", () => {
  test("Deve retornar true quando todos os campos forem preenchidos", () => {
    const dados = {
      nome: "Shaolin",
      email: "monge@gmail.com",
      senha: "1234",
    };
    expect(validarCadastro(dados)).toBe(true);
  });

  test("Deve retornar mensagem de erro quando o campo nome estiver ausente", () => {
    const dados = {
      email: "monge@gmail.com",
      senha: "1234",
    };
    expect(validarCadastro(dados)).toBe("Todos os campos são obrigatórios");
  });

  test("Deve retornar mensagem de erro quando o campo email estiver ausente", () => {
    const dados = {
      nome: "Shaolin",
      senha: "1234",
    };
    expect(validarCadastro(dados)).toBe("Todos os campos são obrigatórios");
  });

  test("Deve retornar mensagem de erro quando o campo senha estiver ausente", () => {
    const dados = {
      nome: "Shaolin",
      email: "monge@gmail.com",
    };
    expect(validarCadastro(dados)).toBe("Todos os campos são obrigatórios");
  });

  test("Deve retornar mensagem de erro quando nenhum campo for fornecido", () => {
    const dados = {};
    expect(validarCadastro(dados)).toBe("Todos os campos são obrigatórios");
  });
});
