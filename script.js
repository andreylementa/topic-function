'use strict';

// Default Parameters

const bookings = [];

const makeBooking = function (
  flightNum,
  passengersNum = 1,
  price = 99 * passengersNum
) {
  // Before ES6
  // passengersNum = passengersNum || 1;
  // price = price || 99;

  const booking = {
    flightNum,
    passengersNum,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

makeBooking('QE123');
makeBooking('TU235', 3, 390);
makeBooking('QE123', 1);
makeBooking('QE123', 4);
makeBooking('QE123', undefined, 400);

// Passing arguments. Values vs Reference

const flightNumber = 'BV328';
const passenger1145 = {
  firstName: 'Jack',
  lastName: 'Brown',
  passport: 128490,
};

const checkIn = function (flight, passenger) {
  flight = 'bv328';
  passenger.firstName = passenger.firstName.toLowerCase();
  passenger.lastName = passenger.lastName.toLowerCase();

  if (passenger.passport === 128490) {
    alert('Welcome to the board!');
  } else {
    alert('Incorrect passport!');
  }
};

checkIn(flightNumber, passenger1145);
console.log(flightNumber);
console.log(passenger1145);

// This is the same as doing it
const flight = flightNumber;
const passenger = passenger1145;

const changePassportNumber = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

changePassportNumber(passenger1145);
checkIn(flightNumber, passenger1145);

const upperFirstWord = function (text) {
  const [firstWord, ...otherText] = text.split(' ');

  const result = [firstWord.toUpperCase(), ...otherText].join(' ');
  return result;
};

const converter = function (text, func) {
  console.log(`The original text: ${text}`);
  console.log(`The converted text: ${func(text)}`);
  console.log(func.name);
};
converter('This text conv', upperFirstWord);
