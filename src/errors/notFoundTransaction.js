// Função chamada quando um usuário tenta acessar a aplicação com um email não cadastrado
export function notFoundTransaction() {
    return {
        name: 'notFoundTransaction',
        message: "Essa transação não existe"
    };
}