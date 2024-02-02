const name = "Tejas ";
const repoCount = 50;

// console.log(`Hello My name is ${name} and my Repo Count = ${repoCount}`);


// Anothere way to initilize the string

const gameName = new String('Tejas-ta');
// console.log(gameName[0]);
console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());


const newString = gameName.slice(0,5);
// console.log(newString);


const anotherString = "  Tejas   ";
// console.log(anotherString);
console.log(anotherString.trim());


const someName = new String('Dipu');

const updatedeName = someName.replace('Dipu', 'Dipti Agrawal');

// console.log(updatedeName);

// console.log(updatedeName.includes('Tejas'));


const str5 = "Tejas-vinod-Agrawal";
console.log(str5.split('-'));