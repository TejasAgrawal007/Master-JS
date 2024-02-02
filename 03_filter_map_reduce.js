// const myNumbs = [1, 23, 4, 5, 6, 78, 9];

// const result = myNumbs.filter((nums) => nums > 5)
// console.log(result);  




// const result = myNumbs.filter((nums) => nums > 5)
// console.log(result);


// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];


// const userBook = books.filter((bk) =>  bk.genre === 'History' )

// const userBook = books.filter((bk) => {
//     return bk.genre >= 2000 && bk.genre === 'History'
// })
// console.log(userBook);

// Chaining

// const myNumbs = [1,2,3,4,5,6,7,8,9,10];

// const newNumbers = myNumbs
//                     .map((num)=>num*10)
//                     .map((num)=>num + 1)
//                     .filter((num)=> num >= 40);
// console.log(myNumbs);                
// console.log(newNumbers);                


// Reduce - 


// const myNumbs = [1, 2, 3];

// const myTotal = myNumbs.reduce(function (acc, currVal) {
//     console.log(`acc : ${acc} and currVal : ${currVal}`);
//     return acc + currVal;
// }, 0)

// const myTotal = myNumbs.reduce((acc, currVal)=> acc + currVal ,0)
// console.log(myTotal);


const shoopingCart = [
    {
        itemName: "JS Course",
        price: 2999,
    },

    {
        itemName: "Cpp Course",
        price: 3999,
    },

    {
        itemName: "Python Course",
        price: 4999,
    },
]


// const totalPrice = shoopingCart.reduce((acc, items) => acc + items.price, 0)
// console.log(totalPrice);

