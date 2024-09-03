let navbar = document.querySelector(".fa");

let ul = document.querySelector(" #navbar ul");

/* let non = true;  */

function disp(event){
    let non = true;
    if(non === true){
       
        ul.style.display = "block";
        non = false;
    }
    else{
        ul.style.display = "none";
        non = true;
    }
    
}

navbar.addEventListener("click", disp);
