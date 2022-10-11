import Joi from 'joi-browser';

const cardSchmea = {
	teacherName: Joi.string().min(2).max(255).required(),
	teacherDescription: Joi.string().min(2).max(1024).required(),
	classAddress: Joi.string().min(2).max(500).required(),
	teacherPhone: Joi.string()
		.min(9)
		.max(15)
		.required()
		.regex(/^0[2-9][-]?\d{7,9}$|^05[0-9][-]?\d{7,9}$|^07[7,3][-]?\d{7,9}$/),
	teacherImage: Joi.string().min(11).max(1024).uri().allow('')
};

export default cardSchmea;
