window.onscroll = function(){
    myFunc();
}

function myFunc(){
    
    var winScroll = document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    var scrolled = (winScroll / height) * 100;

    document.getElementById("myBar").style.width = scrolled + "%";

}

// Dark mode

let btn = document.querySelector(".btn");
let body = document.querySelector('body');

btn.addEventListener('click', () => {
    body.classList.toggle('dark_mode');
})