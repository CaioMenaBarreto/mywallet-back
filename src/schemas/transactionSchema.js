import Joi from "joi"

// Schema para validação de dados durante o processo de manipulação de transações
export const transactionSchema = Joi.object({
    value: Joi.number().positive().precision(2).required(), // Campo 'value' como número positivo com precisão de 2 casas decimais obrigatório
    description: Joi.string().required(), // Campo 'description' como string obrigatória
    type: Joi.string().required().valid("income", "expense") // Campo 'type' como string obrigatória, aceitando apenas "income" ou "expense"
});