const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");


buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        
        if (e.target.id === 'darkblue') {
            body.style.backgroundColor = e.target.id;
        }
        
        if (e.target.id === 'lightseagreen') {
            body.style.backgroundColor = e.target.id;
        }
        
        if (e.target.id === 'lightskyblue') {
            body.style.backgroundColor = e.target.id;
        }
        
        if (e.target.id === 'lightgreen') {
            body.style.backgroundColor = e.target.id;
        }

    })
})