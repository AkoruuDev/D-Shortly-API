import Joi from "joi";

export const shortenSchema = Joi.object({
    authorization: Joi
            .string()
            .required(),
    url: Joi
            .string()
            .uri()
            .required()
}).options({ abortEarly: false});

export const authSchema = Joi.object({
        authorization: Joi
                .string()
                .required(),
        id: Joi
                .number()
                .min(1)
                .required()
}).options({ abortEarly: false});

export const authorizationSchema = Joi.object({
        authorization: Joi
                .string()
                .required()
}).options({ abortEarly: false});

export const idSchema = Joi.object({
        id: Joi
                .number()
                .required()
                .min(1)
}).options({ abortEarly: false});

export const urlSchema = Joi.object({
        url: Joi
                .string()
                .required()
                .length(10)
}).options({ abortEarly: false});