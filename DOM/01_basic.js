const parent = document.querySelector('.parent');
// console.log(parent);
// console.log(parent.children[1].innerHTML);


// for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerHTML);
// }

// parent.children[1].style.color = "orange";


// function addLanguage(langName){
//     const li = document.createElement('li');
//     li.innerHTML = `${langName}`;
//     document.querySelector('.language').appendChild(li);
// }

// addLanguage("Python")
// addLanguage("Typescript")


function addOptiLanguage(langName){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li)
}

addOptiLanguage('Go')
addOptiLanguage('Python')


// How to edit the value of the code
const second_lang = document.querySelector('li:nth-child(2');
second_lang.innerHTML = "Ruby"