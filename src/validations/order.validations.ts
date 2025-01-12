import { NextFunction, Request, Response } from "express";
import { validateBookingSchema, validateCancellationSchema, validateGetBookingSchema, validateModificationSchema } from "../schema/booking.schema";

const validateBooking = (req: Request, res: Response, next: NextFunction): void => {
    const result = validateBookingSchema.validate(req.body);
    if (result?.error) {
        next(result?.error);
    }
    else {
        next();
    }
}

const validateModification = (req: Request, res: Response, next: NextFunction): void => {
    const result = validateModificationSchema.validate(req.body);
    if (result?.error) {
        next(result?.error);
    }
    else {
        next();
    }
}

const validateCancellation = (req: Request, res: Response, next: NextFunction): void => {
    const result = validateCancellationSchema.validate(req.query);
    if (result?.error) {
        next(result?.error);
    }
    else {
        next();
    }
}



const validateGetBooking = (req: Request, res: Response, next: NextFunction): void => {
    const result = validateGetBookingSchema.validate(req.query);
    if (result?.error) {
        next(result?.error);
    }
    else {
        next();
    }
}

export { validateBooking, validateCancellation, validateModification,validateGetBooking };