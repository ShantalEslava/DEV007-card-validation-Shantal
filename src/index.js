import validator from "./validator.js";

    let numeritos = document.getElementById("numeritosid");
    let boton = document.getElementById("boton");

    boton.addEventListener("click",function(){
        validator.isValid(numeritos.value)
    })