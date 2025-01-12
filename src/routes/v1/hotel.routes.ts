import express, { NextFunction, Request, Response } from "express";
import { sendSuccessResponse } from "../../response/responseHandler";
import { validateBooking, validateCancellation, validateGetBooking, validateModification } from "../../validations/order.validations";
import { bookRoom, cancelBooking, modifyBooking, viewAllGuests, viewBookingDetails } from "../../controllers/hotel.controller";

const hotelRouter = express.Router();

hotelRouter.post('/book', validateBooking, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const booking = bookRoom(req);
        sendSuccessResponse(req, res, booking);
    }
    catch (err) {
        next(err);
    }
});

hotelRouter.get('/view/:email', validateGetBooking, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const guestBooking = viewBookingDetails(req);
        sendSuccessResponse(req, res, guestBooking);
    }
    catch (err) {
        next(err);
    }
});

hotelRouter.get('/guests', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const guests = viewAllGuests(req);
        sendSuccessResponse(req, res, {});
    }
    catch (err) {
        next(err);
    }
});

hotelRouter.delete('/cancel', validateCancellation, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const cancel = cancelBooking(req);
        sendSuccessResponse(req, res, cancel);
    }
    catch (err) {
        next(err);
    }
});

hotelRouter.put('/modify', validateModification, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const modifiedBooking = modifyBooking(req);
        sendSuccessResponse(req, res, {});
    }
    catch (err) {
        next(err);
    }
});

export default hotelRouter;