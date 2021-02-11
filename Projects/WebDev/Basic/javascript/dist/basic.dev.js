"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// ECMA SCRIPT , high level(abstraction) interpreted(program is run directly without compilation no need for compiler), Multi paradigm,  
// lang of browser or client --> runs on client browser  as well as on server (node.js)
// alert("hello")
// console.log("hello world");
// console.error("this is an error");
// console.warn("this is a warning");
// variables : var let const ==============================================================================================
//var is globally scoped ----> can cause conflict   USE let and const
// let can resign value 
// const can not be resigned
// primitive data type : strings ,number(float and int) ,boolean , null, undefined =============================================
// const a = 3.9
// const n = null;
// console.log(typeof n);   // number
// Concatenation  ============================================================================================
var name = "Riaaaaa"; //  or 'Ria'

var age = 20; // console.log("My name is "+ name + "."+ "I am "+ age+ " years old.");
// // template  ================================================================================================
// console.log(`My name is ${name}.I am ${age} years old.`);
// console.log(name.length);
// console.log(name.`toUpper`Case());
// console.log(name.toLowerCase());
// console.log(name.substring(1, 4).toUpperCase());

var s = ' tech , mech , pech';
console.log(s.split("ch")); // te, me, pe
// Arrays  =============================================================================================================

var fruits = ['apples', 'oranges', 'grapes', true]; // console.log(fruits);
// fruits.unshift('berry'); // in the beginning
// fruits.push('mango');  // int the end
// fruits.pop();   // pops last ele
// console.log(fruits);
// object  key : value pairs  =========================================================================================

person = {
  firstName: 'Ria',
  lastName: 'Jaiswal',
  age: 20,
  subjects: ['sub1', 'subj2', 'subj3'],
  // embedded object
  address: {
    state: 'Delhi',
    city: 'Delhi',
    locality: 'GH-9,Paschim Vihar'
  }
}; // console.log(typeof person.address);
// console.log(person);
// array of objects  ===================================================================================================

var todo = [{
  id: 1,
  text: 'bla1',
  isCompleted: true
}, {
  id: 2,
  text: 'bla2',
  isCompleted: false
}, {
  id: 3,
  text: 'bla3',
  isCompleted: true
}]; // console.log(todo[1]);
// convert javascript data to JSON format to send it to server==========================================================
// const todoJSON = JSON.stringify(todo);
// console.log(todoJSON);
// for each--------------------------------------------
// for(let i of todo){
//     console.log(i);
// }
//for each----------------------------------------------
// todo.forEach( function(i)  // i to traverse each element
//     {
//         console.log(i.text);
//     }
// )
// map ------------------------------------------------
// const todoText = todo.map(function (i) {
//     return i.text;
// })
// console.log(todoText); // todoText is an array returned by map
// filter -------------------------------------------------------------
// const todoCompleted = todo.filter(function (i) {
//     return i.isCompleted == true;
// }).map(function (i) {
//     return i.text;
// })
// console.log(todoCompleted);
// CONDITONALS ARE THE SAME AS CPP OR JAVA
// SAME TERNARY OPERATOR
// Functions ===========================================================================================
// function addNos(n1, n2) {       
//     return n1 + n2;
// }
// console.log(addNos());  // NaN  : not a number
// console.log(addNos(5,4));
// if u dont want nan then specify in func parameters the default value of n1 and n2 --->function addNos(n1 = 1, n2 = 1)
// Arrow Functions -----------------------------------------introduced in ES6-------------------------------------make func sytax short
// hello = () => "Hello World!";
// const addNos = (n1, n2) => {
//     return n1 + n2;
// }
// console.log(addNos(5, 6));
// forEach using arrow func :   todo.forEach( (i) => console.log(i));
// OOPS =======================================================================================
// CONSTRUCTOR FUNCTION --------------------------------------------------------

function Person(firstName, lastName, dob) {
  var _this = this;

  // constructor start with caps 
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); // this.getFullName = () => {
  //     return this.firstName + this.lastName;
  // }

  this.getDOB = function () {
    return _this.dob;
  };
}

Person.prototype.getFullName = function () {
  return this.firstName + this.lastName;
}; // prototyping 
// Instantiate object


var person_1 = new Person('Ria', 'Jaiswal', '28 March 2000'); // console.log(person_1);
// console.log(person_1.dob.getDate(), person_1.dob.getMonth() + 1, person_1.dob.getFullYear());
// console.log("Name: " + person_1.getFullName(), " & DOB: ", person_1.getDOB());
// CLASS IN ES6 ================================================================================= instead of prototype

var Person_class =
/*#__PURE__*/
function () {
  function Person_class(firstName, lastName, dob) {
    _classCallCheck(this, Person_class);

    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); // this.getFullName = () => {
    //     return this.firstName + this.lastName;
    // }
  }

  _createClass(Person_class, [{
    key: "getFullName",
    value: function getFullName() {
      return this.firstName + this.lastName;
    }
  }, {
    key: "getDOB",
    value: function getDOB() {
      return this.dob;
    }
  }]);

  return Person_class;
}(); // console.log(new Person_class('Riaaa', 'Jaiswal', '28 March 2000'));


var Person__ = function Person__(a, b, c) {
  _classCallCheck(this, Person__);

  this.a = a;
  this.b = b;
  this.c = c;
};

;

function personDetail(a, b) {
  return new Person__(a, b, a + " " + b);
}

console.log(personDetail("ria", "jaiswal"));