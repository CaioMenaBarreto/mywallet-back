import Joi from "joi"

//Aqui criamos schemas utilizando Joi para realizar a validação dos dados informados pelo usuário

// Schema para validação de dados durante o processo de cadastro (sign-up)
export const signUpSchema = Joi.object({
    name: Joi.string().required(), // Campo 'name' como string obrigatória
    email: Joi.string().email().required(), // Campo 'email' como string no formato de e-mail obrigatório
    password: Joi.string().min(6).required() // Campo 'password' como string com no mínimo 6 caracteres obrigatórias
})

// Schema para validação de dados durante o processo de login (sign-in)
export const signInSchema = Joi.object({ 
    email: Joi.string().email().required(), // Campo 'email' como string no formato de e-mail obrigatório
    password: Joi.string().min(6).required() // Campo 'password' como string com no mínimo 6 caracteres obrigatórias
})