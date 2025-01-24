export function checagemSenha(senha: string): string {
 
    const regexNumerico = /^[0-9]+$/;
    if (senha.length >= 4 && regexNumerico.test(senha)) {
        return 'SENHA VALIDA';
    } else {
        return 'SENHA INVÁLIDA';
    }
}
