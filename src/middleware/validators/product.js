const Joi = require("joi");
const validator = require("../validator");

const addProductSchema = validator(
  Joi.object({
    email:Joi.string().required(),
    phone:Joi.string().required(),
    country:Joi.string().required(),
    username:Joi.string().required(),

    title:Joi.string().required(),
    price:Joi.string().required(),
    category:Joi.string().required(),
    isPhysical:Joi.string(),
    description:Joi.string().required().max(60),
    
    imagesObj:  Joi.array().items().min(1).required(),
    extraDes:  Joi.array().items(),
  })
);


module.exports = {addProductSchema};
