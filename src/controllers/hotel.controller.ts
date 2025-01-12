import { Request, Response } from 'express';
import { bookings, rooms } from '../model/hotels.model';
import { v4 as uuid } from 'uuid';
import customException from '../exceptions/customException';
import { StatusCodes } from '../utils/statusCode';


// Book Room
export const bookRoom = (req: Request) => {
    const { name, email, contact, checkInDate, checkOutDate } = req.body;

    // Find available room
    const availableRoom = rooms.find((room) => !room.isBooked);
    if (!availableRoom) throw customException.completeCustomException(StatusCodes.NOT_FOUND, "No rooms Available!!")

    // Book room
    availableRoom.isBooked = true;
    const bookingId = uuid();
    bookings.push({
        id: bookingId,
        roomNumber: availableRoom.number,
        name,
        email,
        contact,
        checkInDate,
        checkOutDate,
    });

    return {
        message: 'Room booked successfully',
        bookingId,
        roomNumber: availableRoom.number,
        guestName: name,
        stayDuration: `${checkInDate} to ${checkOutDate}`,
    };
};

// View Booking Details
export const viewBookingDetails = (req: Request) => {
    const { email } = req.params;

    const guestBooking = bookings.find((booking) => booking.email === email);
    if (!guestBooking) throw customException.completeCustomException(StatusCodes.NOT_FOUND,'Booking not found');
    return guestBooking;
};

// View All Guests
export const viewAllGuests = (req: Request) => {
    const guests = bookings.map((booking) => ({
        roomNumber: booking.roomNumber,
        guestName: booking.name,
    }));

    return guests;
};

// Cancel Booking
export const cancelBooking = (req: Request) => {

    const { email, roomNumber } = req.body;

    const bookingIndex = bookings.findIndex(
        (booking) => booking.email === email && booking.roomNumber === roomNumber
    );
    if (bookingIndex === -1) throw customException.completeCustomException(StatusCodes.NOT_FOUND,"Booking not Found!!");

    // Release room
    const room = rooms.find((room) => room.number === roomNumber);
    if (room) room.isBooked = false;

    bookings.splice(bookingIndex, 1);

    return  { message: 'Booking canceled successfully' };
};

// Modify Booking
export const modifyBooking = (req: Request) => {
    const { email, roomNumber, newCheckInDate, newCheckOutDate } = req.body;

    const booking = bookings.find(
        (booking) => booking.email === email && booking.roomNumber === roomNumber
    );
    if (!booking) throw customException.completeCustomException(StatusCodes.NOT_FOUND, 'Booking not found')

    booking.checkInDate = newCheckInDate;
    booking.checkOutDate = newCheckOutDate;
    return { message: 'Booking modified successfully', booking };
}
