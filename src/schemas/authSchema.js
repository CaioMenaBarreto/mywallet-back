import Joi from "joi"

//Aqui criamos schemas utilizando Joi para realizar a validação dos dados informados pelo usuário
export const signUpSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})

export const signInSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})