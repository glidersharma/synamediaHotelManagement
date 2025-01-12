import Joi from 'joi';

export const validateBookingSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    contact: Joi.string().required(),
    checkInDate: Joi.date().iso().required(),
    checkOutDate: Joi.date().iso().greater(Joi.ref('checkInDate')).required(),
});



export const validateCancellationSchema = Joi.object({
    email: Joi.string().email().required(),
    roomNumber: Joi.number().required(),
});



export const validateModificationSchema = Joi.object({
    email: Joi.string().email().required(),
    roomNumber: Joi.number().required(),
    newCheckInDate: Joi.date().iso().required(),
    newCheckOutDate: Joi.date().iso().greater(Joi.ref('newCheckInDate')).required(),
});

export const validateGetBookingSchema = Joi.object({
    email: Joi.string().email().required(),
});

