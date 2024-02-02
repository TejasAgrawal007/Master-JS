const model = document.querySelector('.model');
const btn = document.querySelector('.btn');
let close = document.querySelector('.close');


btn.addEventListener('click', () => {
    model.style.display = "block";
})

close.addEventListener('click', () => {
    model.style.display = "none";
})

window.addEventListener('click', (e) => {
    if (e.target == model) {
        model.style.display == "none";
    }
})


const body = document.querySelector('body');
const mode = document.querySelector('.mode');


mode.addEventListener('click', () => {
    body.classList.toggle('dark_mode');
})