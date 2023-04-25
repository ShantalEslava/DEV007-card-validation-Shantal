
const validator =  {
isValid:function(numeritos){
    if(numeritos.length > 13){
        console.log("No aceptable")
        return;
    }
    let mayores= 0
    let mayor = 10
    let menores= 0
    let menor = 9
    let impares = 0
    let mayortotal= 0
    let menortotal= 0
    let impartotal= 0
    let totaltotal= 0

    let array = numeritos.split("").reverse();
    console.log(array);
    array.forEach((numero, posicion) => {
    numero = parseInt (numero)
        if(posicion % 2 == 0){
            ((numero * 2) >= mayor) = mayores; 
            mayores.forEach(function(a){mayortotal+a; 
            });

            ((numero *2) <= menor) = menores;
            menores.forEach(function(b){menortotal+b;});

        } 
        else{
            numero = impares
            impares.forEach(function(c){impartotal+c;});
        }
        totaltotal= mayortotal+menortotal+impartotal
        console.log(totaltotal)
    }); 
} 
}
    
    
    
    


export default validator;
