# My Wallet API

Aplicação em que é possível gerenciar o back-end de uma carteira digital através de requisições HTTP(s) seguindo a convenção REST.

# Demo
[Link do projeto](https://mywalletapi-af8b.onrender.com)

# Como funciona?

Este projeto é uma API REST para atender a uma carteira digital. Ela possui 3 entidades: `/`, `sign-up` e `transactions`, que são referentes ao login, cadastro e as transações respectivamente.

## Entidade /

### Rota POST `/`

 - Realiza o login do usuário desde que as informações passadas sejam de um usuário já cadastrado anteriormente. A estrutura esperada para o login é:
```
{
	email: string;
	password: string
}
```
Se a estrutura não for respeitada, um erro 422 é retornado e se os dados informados estiverem na estrutura esperada mas não forem dados de um usuário que já realizou o cadastro o 401 será retornado.

## Entidade Sign-Up

### Rota POST `/sign-up`

 - Realiza o cadastro do usuário desde que as informações passadas sejam de um usuário não cadastrado anteriormente. A estrutura esperada para o login é:
```
{
    name: string;
	email: string;
	password: string
}
```
Se a estrutura não for respeitada, um erro 422 é retornado e se os dados informados estiverem na estrutura esperada mas forem dados de um usuário que já realizou o cadastro o 409 será retornado.

## Entidade Transactions

### Rota POST `/transactions`

- Cria uma nova transação na carteira. 

A estrutura esperada para uma transação é:
```
{
	value: number;
	description: string;
    type: string.
}
```
Se a estrutura não for respeitada, um erro 422 é retornado.

### Rota GET `/transactions`

- Retorna todas as transações do usuário.

### Rota PUT `/transactions/:id`

- Atualiza os dados de uma transação dado o seu id e os campos enviados. Se o id não corresponder a nenhuma transação, o erro 404 é retornado. A estrutura esperada para editar uma transação é:
```
{
	value: number;
	description: string;
    type: string.
}
```

Se a estrutura não for respeitada, um erro 422 é retornado.


### Rota DELETE `/transactions/:id`

- Deleta uma transação específica dado um id. Se não for encontrado, retorna um erro 404. Se não houver nenhum erro, a transação será deletada.


# Tecnologias utilizadas
Para este projeto, foram utilizadas:

- Node (versão 18.17.1);
- Express;
- Express-async-errors;
- Cors;
- Postgres;
- Joi;
- Dotenv;
- HTTP-STATUS;
- Nodemon. 
- Bcrypt;
- Pg;
- Uuid;
- Dayjs.

# Como rodar em desenvolvimento
Para executar este projeto em desenvolvimento, é necessário seguir os passos abaixo:

- Clonar o repositório;
- Baixar as dependências necessárias com o comando: `npm install`;
- Em seguida, criar o arquivo `.env` com base no `.env.example`;
- Este arquivo `.env` é composto pelas seguintes propriedades:
```
  DATABASE_URL="postgres://<user>:<password>@localhost:5432/<dbName>"
```
- A propriedade `DATABASE_URL` é usada para fazer a conexão com o banco de dados.

- Para rodar o projeto em desenvolvimento, execute o comando `npm run dev`;

# Como rodar em produção
- Subir na plataforma de sua preferência (Ex: Render).
