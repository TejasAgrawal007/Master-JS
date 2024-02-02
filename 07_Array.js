// Array

// let myArray = [0,1,2,3,45,"Dipu"];
// console.log(myArray);

// const newArray = new Array(1,2,3,5,69,8);
// console.log(newArray[0]);


let myArray = [1,4,6,8,9];
// console.log(myArray);

// myArray.push(900);
// myArray.pop();
// myArray.unshift(12);
// console.log(myArray);
// myArray.shift();

// console.log("This is my Array => " , myArray);


const newArray = myArray.join(); // value convert into the string
// console.log(myArray);
// console.log(newArray);


// slice and splice



// **********More on Arrays**********

const marvel_heroes = [ "Thor", "IronMan", "spideran"];

const dc_heroes = ["Flash","Superman" , "Joker"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);
// let result = marvel_heroes.concat(dc_heroes);
// console.log(result);

// ***Sprade Operator
// const all_new_heroes = [...marvel_heroes, ...dc_heroes];
// console.log(all_new_heroes);


// *** Flat

// const another_array = [1,2,3,[4,5],6,7,[8,7]];
// console.log(another_array);

// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);


// console.log(Array.isArray("Tejas"));
// console.log(Array.from("Tejas"));


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));