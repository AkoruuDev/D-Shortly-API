import Joi from "joi";

export const signInSchema = Joi.object({
    email: Joi
        .string()
        .min(1)
        .max(100)
        .required(),
    password: Joi
        .string()
        .min(1)
        .required()
}).options({ abortEarly: false });

export const signUpSchema = Joi.object({
    name: Joi
        .string()
        .min(1)
        .max(50)
        .required(),
    email: Joi
        .string()
        .min(1)
        .max(100)
        .required(),
    password: Joi
        .string()
        .min(6)
        .required(),
    confirmPassword: Joi
        .ref('password')

}).options({ abortEarly: false });