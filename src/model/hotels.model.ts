export interface Room {
    number: number;
    isBooked: boolean;
  }
  
  export interface Booking {
    id: string;
    roomNumber: number;
    name: string;
    email: string;
    contact: string;
    checkInDate: string;
    checkOutDate: string;
  }
  
  export const rooms: Room[] = Array.from({ length: 10 }, (_, i) => ({
    number: i + 1,
    isBooked: false,
  }));
  
  export const bookings: Booking[] = [];
  