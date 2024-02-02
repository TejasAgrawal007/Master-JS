//objects


let jsUser = {
    "Name": "Dipu",
    "Age": 20,
    "Blood group": "B+ve",
    "Marks": [10, 20, 30],
}

// console.log(jsUser);
// console.log(jsUser["Marks"][0]);

jsUser.Name = "Tejas";
// Object.freeze(jsUser);
console.log(jsUser);


jsUser.greeting = function () {
    console.log(`Hello JS User, ${this.Name}`);
}

console.log(jsUser.greeting());