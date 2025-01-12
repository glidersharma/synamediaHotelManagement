# Hotel Room Booking API

## Description

This project provides APIs for managing room bookings in a hotel. The features include booking a room, viewing booking details, listing all current guests, canceling bookings, and modifying bookings. The API ensures automated room assignment based on availability.

---

## Features

### 1. **Booking Room API**
- Users can book a room by providing:
  - Name
  - Contact details
  - Check-in date
  - Check-out date
- The system automatically assigns a room based on availability.
- Returns a confirmation with booking details:
  - Room number
  - Guest name
  - Stay duration

### 2. **View Booking Details API**
- Retrieve booking details by providing the guest's email address.

### 3. **View All Guests in the Hotel API**
- Get a list of all current guests, including their room numbers.

### 4. **Cancel Room Booking API**
- Guests can cancel their booking by providing:
  - Email address
  - Room details

### 5. **Modify Booking API**
- Guests can modify their check-in or check-out dates by providing:
  - Email address
  - Existing booking details

---
npm install

npm run test
