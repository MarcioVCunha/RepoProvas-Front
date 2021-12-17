import joi from 'joi';

const stringSchema = joi.object({
  name: joi.string().min(3).required(),
  link: joi.string().regex(/[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/).required()
});

export default stringSchema;