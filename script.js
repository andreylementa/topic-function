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

// Функции Принимающие Callback Функции

const removeSpaces = function (text) {
  return text.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (text) {
  const [first, ...others] = text.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order Function
const converter = function (str, func) {
  console.log(`The original text: ${str}`);
  console.log(`The converted text: ${func(str)}`);

  console.log(`Converted by: ${func.name}`);
};

converter('Hello to everyone!', upperFirstWord);
converter('Hello to everyone!', removeSpaces);

// Callback functions are very common in JS
const twice = num => console.log(num * 2);
[1, 2, 3].forEach(twice);
