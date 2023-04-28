
const validator =  {
isValid:function(numeritos){
    if(numeritos.length > 16){
        console.log("No aceptable")
        return "tarjeta de credito exedente de digitos";
    }
    
    let total= 0

    let array = numeritos.split("").reverse();

    console.log(array);

    array.forEach((num, posicion) => {
    let numero = Number(num)

        if(posicion % 2 == 0){
            numero = numero *2
            
            if (numero >= 10) {
                let a = numero % 10
                let b = (numero - a)/10
                numero = a + b
                
            }

        } 
    
        total = total + numero 
        console.log(total)

    }); 
    if (total % 10 % 10 == 0) {
        return "Tarjeta valida"
        
console.log( total)
    }else{
        return "tarjeta invalida"

    }
} 
}
    
    
    
    


export default validator;
