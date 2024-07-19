console.log('Ejercicio 2 Bucles');

// TODO: crea una función que pida dos números y un símbolo y haga 
//*la operación correspondiente (+, -, *, /, %)

const operacion = () =>{

    accion = prompt('qué quieres hacer? -> Elige: +, -, *, /, %) ');
    operaciones = ['+', '-', '*', '/', '%'];
    seguir = operaciones.includes(accion);
    console.log(seguir);

    if (seguir){
        num1 = prompt('Dame un número');
        num2 = prompt('Dame un segundo número');

        console.log(num1);
        console.log(num2);

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        const suma = (a,b) => a + b;
        const resta = (a,b) => a - b;
        const multi = (a,b) => a * b;
        const divi = (a,b) => a / b;
        const modulo = (a,b) => a % b;

        if( accion === "+"){console.log(`La suma de tus números es ${suma(num1,num2)}`)}
        else if( accion === "-"){console.log(`La resta de tus números es ${resta(num1,num2)}`)}
        else if( accion === "*"){console.log(`La multi de tus números es ${multi(num1,num2)}`)}
        else if( accion === "/"){
            if(num2 === 0){console.log('no se puede dividir por 0');}
            else{console.log(`La divi de tus números es ${divi(num1,num2)}`)}
        }else if( accion === "/"){console.log(`El modulo es ${modulo(num1,num2)}`)}
    }else{
        alert('Elige una operación disponible: +, -, *, /, %')
        operacion();
    }
    

}

operacion();




