// Advance Looop

// 1. for of  


// const arr = [1,2,3,4,5,6,7,8,9]

// for (const x of arr) {
//     console.log(x);
// }


// const str = "Tejas Agrawal";

// for (const x of str) {
//     console.log("Hey ", x);
// }


// Map

const map = new Map();
map.set('IN', 'India')
map.set('USA', 'United State Of America')
map.set('Fr', 'France')


// for (const [keys, values] of map) {
//     console.log(keys , " :- ", values);
// }


myObject = {
    js: "javascript",
    py: "python",
    rb: "Ruby",
}


// for (const key in myObject) {
//     console.log(`${key} -> ${myObject[key]}`);
// }

const coding = ["Cpp", "java", "python", 'Javascript'];

// coding.forEach((items) => {
//     console.log(`Hello -> ${items}`);
// })

// coding.forEach((items, index, arr) => {
//     console.log(items, index, arr);
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFile: ".js",
    },
    {
        languageName: "Cpp",
        languageFile: ".cpp",
    },
    {
        languageName: "Python",
        languageFile: ".py",
    }
]

myCoding.forEach((items)=>{
    console.log(items.languageName);
})
