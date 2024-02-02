

const sayHello = function(){
    console.log("Hello Tejas");
}

const changeText = () => {
    document.querySelector('.title').innerHTML = "Best JS Series!";
}

setTimeout(changeText,5000);