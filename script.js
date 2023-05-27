//'use strict';

//// Default Parameters

//const bookings = [];

//const makeBooking = function (
//  flightNum,
//  passengersNum = 1,
//  price = 99 * passengersNum
//) {
//  // Before ES6
//  // passengersNum = passengersNum || 1;
//  // price = price || 99;

//  const booking = {
//    flightNum,
//    passengersNum,
//    price,
//  };
//  console.log(booking);
//  bookings.push(booking);
//};

//makeBooking('QE123');
//makeBooking('TU235', 3, 390);
//makeBooking('QE123', 1);
//makeBooking('QE123', 4);
//makeBooking('QE123', undefined, 400);

//// Passing arguments. Values vs Reference

//const flightNumber = 'BV328';
//const passenger1145 = {
//  firstName: 'Jack',
//  lastName: 'Brown',
//  passport: 128490,
//};

//const checkIn = function (flight, passenger) {
//  flight = 'bv328';
//  passenger.firstName = passenger.firstName.toLowerCase();
//  passenger.lastName = passenger.lastName.toLowerCase();

//  if (passenger.passport === 128490) {
//    alert('Welcome to the board!');
//  } else {
//    alert('Incorrect passport!');
//  }
//};

//checkIn(flightNumber, passenger1145);
//console.log(flightNumber);
//console.log(passenger1145);

//// This is the same as doing it
//const flight = flightNumber;
//const passenger = passenger1145;

//const changePassportNumber = function (person) {
//  person.passport = Math.trunc(Math.random() * 1000000000);
//};

//changePassportNumber(passenger1145);
//checkIn(flightNumber, passenger1145);

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

// Функции Возвращающие Функции

const greet = function (greetingText) {
  return function (name) {
    console.log(`${greetingText} ${name}!`);
  };
};

const hi = greet('Hi');
hi('Jack');
hi('Diana');
hi('Mick');

greet('Hey')('Lilu');

// greet() =>
const arrGreet = greetingText => name =>
  console.log(`${greetingText} ${name}!`);

arrGreet('Hello')('Lilu');

// Методы call(), apply(), bind()

const book = function (flightNumber, passengerName) {
  console.log(
    `${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode}${flightNumber}`
  );
  this.bookings.push({
    flight: `${this.iataCode}${flightNumber}`,
    passengerName,
  });
};

const airline1 = {
  airlineName: 'SkyUp',
  iataCode: 'SU',
  bookings: [],
  //   book(flightNumber, passengerName) {
  //     console.log(
  //       `${passengerName} has booked a ticket on ${this.airlineName} flight ${this.iataCode}${flightNumber}`
  //     );
  //     this.bookings.push({
  //       flight: `${this.iataCode}${flightNumber}`,
  //       passengerName,
  //     });
  //   },
};

// airline1.book(346, 'Jim Green');
// airline1.book(635, 'Michael Jordan');
// console.log(airline1);

const airline2 = {
  airlineName: 'EuroFlights',
  iataCode: 'EF',
  bookings: [],
};

// const book = airline1.book;

// This doesn't work
// book(345, 'Linda Wilams');

// call()
book.call(airline2, 345, 'Linda Wilams');
console.log(airline2);

book.call(airline1, 111, 'Bob Smith');
console.log(airline1);

// apply() - old approach
const flightData = [111, 'Nick Wong'];
// book.apply(airline2, flightData);

book.call(airline2, ...flightData);
console.log(airline2);
