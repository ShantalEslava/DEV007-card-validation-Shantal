import validator from "./validator.js";

    let numeritos = document.getElementById("numeritosid");
    let boton = document.getElementById("boton");
    let valid =document.getElementById("validator");


    boton.addEventListener("click",function(){
        valid.value = validator.isValid(numeritos.value)
    })

