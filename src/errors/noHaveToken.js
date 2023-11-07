// Função chamada quando a senha está incorreta
export function noHaveToken() {
    return {
        name: 'unauthorizedError',
        message: 'Faça o login para acessar a sua carteira.'
    };
}