const score = 400;
// console.log(score);

const balence = new Number(100);
// console.log(balence);

// console.log(balence.toString());
// console.log(balence.toString().length);
// console.log(balence.toFixed(2));


const anotherNumber = 123.55;
// console.log(anotherNumber.toPrecision(3));


const hundreads = 10000;
// console.log(hundreads.toLocaleString());
// For Indian Value - en-In
// console.log(hundreads.toLocaleString('en-In'));



// **************Math****************


// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(-5.53));

// floor -> top ceil -> bottom

// console.log(Math.floor(4.5));
// console.log(Math.ceil(4.5));


// console.log(Math.min(2,11,4,5,8,7));
// console.log(Math.max(2,11,4,5,8,7));


// console.log(Math.random());
// console.log((Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);