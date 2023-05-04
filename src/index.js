import validator from "./validator.js";

const numeritos = document.getElementById("numeritosid"); // Esto me permitirá el uso en el maskify?
const boton = document.getElementById("boton");
const valid = document.getElementById("validator");

boton.addEventListener("click", function () {
  valid.value = validator.isValid(numeritos.value);
  document.getElementById("input").innerHTML = maskify(numeritos.value);
});

function maskify(input) {
    console.log(input)
  return input.slice(0, -4).replace(/./g, "#") + input.slice(-4);
}


console.log(maskify(numeritos.value))