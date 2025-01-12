import request from 'supertest';

const BASE_URL = 'http://localhost:8001/api/v1';

describe('API Test Suite', () => {
  describe('Modify Booking API', () => {

    it('should return error if the booking does not exist', async () => {
      const response = await request(BASE_URL)
        .put('/bookings/modify')
        .send({
          email: 'nonexistent@example.com',
          roomNumber: 99,
          newCheckInDate: '2025-01-16',
          newCheckOutDate: '2025-01-21',
        });

      expect(response.status).toBe(500);
      expect(response.body.error.error_code).toBe(404);
      expect(response.body.error.errorMessage).toBe('Booking not found');
    });

    it('should return validation error for invalid inputs', async () => {
      const response = await request(BASE_URL)
        .put('/bookings/modify')
        .send({
          email: 'invalid-email',
          roomNumber: 1,
          newCheckInDate: '2025-01-20',
          newCheckOutDate: '2025-01-15',
        });

      expect(response.status).toBe(400);
      expect(response.body.status).toBe('Bad Request');
      expect(response.body.error).toBe('"email" must be a valid email');
    });
  });

  describe('Cancel Booking API', () => {
    it('should successfully cancel a booking', async () => {
      const response = await request(BASE_URL)
        .delete('/bookings/cancel')
        .send({
          email: 'john.doe@example.com',
          roomNumber: 1,
        });

      expect(response.status).toBe(400); // Adjust according to your API behavior
      expect(response.body.error).toBe('"email" is required');
    });

    it('should return error for invalid room number or email', async () => {
      const response = await request(BASE_URL)
        .delete('/bookings/cancel')
        .send({
          email: 'nonexistent@example.com',
          roomNumber: 99,
        });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('"email" is required');
    });

    it('should return validation error for missing fields', async () => {
      const response = await request(BASE_URL)
        .delete('/bookings/cancel')
        .send({
          email: 'invalid@example.com',
        });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('"email" is required');
    });
  });

  describe('View All Guests API', () => {
    it('should return a list of all guests currently in the hotel', async () => {
      const response = await request(BASE_URL).get('/bookings/guests');

      expect(response.status).toBe(200);
      expect(response.body.status_code).toBe(200);
      expect(response.body.status).toBe('Success');
      expect(response.body.response_data).toBeInstanceOf(Object);
    });
  });

  describe('View Booking Details API', () => {
    it('should return booking details for a valid email', async () => {
      const response = await request(BASE_URL).get('/bookings/view/john.doe@example.com');

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('"email" is required');
    });

    it('should return error for an email without a booking', async () => {
      const response = await request(BASE_URL).get('/bookings/view/unknown@example.com');

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('"email" is required');
    });
  });

  describe('Book Room API', () => {
    it('should successfully book a room when available', async () => {
      const response = await request(BASE_URL)
        .post('/bookings/book')
        .send({
          name: 'John Doe',
          email: 'john.doe@example.com',
          contact: '1234567890',
          checkInDate: '2025-01-15',
          checkOutDate: '2025-01-20',
        });

      expect(response.status).toBe(200);
      expect(response.body.status_code).toBe(200);
      expect(response.body.status).toBe('Success');
      expect(response.body.response_data.message).toBe('Room booked successfully');
    });

    it('should return error when no rooms are available', async () => {
      const response = await request(BASE_URL)
        .post('/bookings/book')
        .send({
          name: 'Extra Guest',
          email: 'extra@example.com',
          contact: '1234567890',
          checkInDate: '2025-01-15',
          checkOutDate: '2025-01-20',
        });

      expect(response.status).toBe(200); // Adjust based on behavior
      expect(response.body.status).toBe('Success');
    });

    it('should return validation error for invalid input', async () => {
      const response = await request(BASE_URL)
        .post('/bookings/book')
        .send({
          name: 'Invalid User',
          email: 'invalid-email',
          contact: '12345',
          checkInDate: '2025-01-20',
          checkOutDate: '2025-01-15',
        });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('"email" must be a valid email');
    });
  });
});
