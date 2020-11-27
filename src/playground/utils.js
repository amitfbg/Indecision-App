

// console.log("UTILS");

const square=(x)=> x*x;
const add= (a,b)=>a+b;
const sub= (a,b)=>a-b;

//not object defenition
export{square, add, sub as default};


// export const isAdult=(x)=> x>18;

// export const canDrink=(x)=> x>=21;



//import './utils.js';
// import sub, {square, add} from './utils.js';

// console.log("YOYOYOYOY!!!!");
// console.log(square(4));
// console.log(add(100,23));
// console.log(sub(100,20));


//example------

// import {isAdult, canDrink} from './utils.js';
// console.log(isAdult(21));
// console.log(isAdult(12));
// console.log(canDrink(22));
// console.log(canDrink(18));

// install -> import -> use
// yarn add validator@8.0.0

//import validator from 'validator';

//  console.log(validator.isEmail('a@gmail.com'));


//we removed react and reactDom from script so rendering we need to do this
//for react and react-dom
// yarn add react@16.0.0 react-dom@16.0.0
// import React from 'react';
//import ReactDOM from 'react-dom';

// still not worling because our js code is not converted with babbel
// to add babel
// yarn add babel-core@6.25.0 babel-loader@7.1.1
// now go to webpack.config add module