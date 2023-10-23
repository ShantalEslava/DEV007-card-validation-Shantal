
import validator from "./validator.js";

const numeritos = document.getElementById("numeritosid"); 
const boton = document.getElementById("boton");
const valid = document.getElementById("validator");

document.addEventListener('DOMContentLoaded', function () {
  boton.addEventListener("click", function () {
    valid.value = validator.isValid(numeritos.value);
    document.getElementById("input").innerHTML = maskify(numeritos.value);
  });

});

function maskify(input) {
  return input.slice(0, -4).replace(/./g, "#") + input.slice(-4);
}

export default maskify;