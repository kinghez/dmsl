let navbar = document.querySelector(".fa");

let ul = document.querySelector(" #navbar ul");


function disp(event){
    ul.style.display = "block";
}

navbar.addEventListener("click", disp);