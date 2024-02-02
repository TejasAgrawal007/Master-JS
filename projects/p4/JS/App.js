var myVar;
let body = document.querySelector('body');


body.addEventListener('click', function(){
    myFunction();
})

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}