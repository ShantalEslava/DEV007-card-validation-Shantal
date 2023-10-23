const validator = {
  isValid: function (numeritos) {
    if (numeritos.length > 16) {
      console.log("No aceptable");
      return "tarjeta de credito exedente de digitos";
    }

    let total = 0;

    const array = numeritos.split("").reverse(); 

    console.log(array);

    array.forEach((num, posicion) => {
      let numero = Number(num);

      if ((posicion + 1) % 2 === 0) {
        numero = numero * 2;

        if (numero >= 10) {
          const a = numero % 10;
          const b = (numero - a) / 10;
          numero = a + b;
          console.log(numero);
          total = total + numero;
        } else {
          console.log(numero);
          total = total + numero;
        }
      } else {
        total = total + numero;
        console.log(numero);
      }
   
    });
    if ((total % 10) % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },
};

export default validator;
//4556364607935616
