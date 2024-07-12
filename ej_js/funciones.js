console.log('%cFunciones','color: yellow');

//funciónque mustra una String x la consola
function saludar(){console.log('Hola a todos');}
saludar();

//let --> da como scope lo que está en los corchetes

//función que devuelve una String
function saludo(){return 'hola'};
console.log(saludo());

//función con 1 parámeto q muestra una String 
//por la consola

function pedirAlgo(algo){
    console.log(`Me pasas ${algo}`);
}

pedirAlgo('un martillo');
pedirAlgo('la pasta de dientes');
pedirAlgo('una empanada');

//DNI que lo devuelva ofuscado
console.log('%cCrear funcion --> DNI que lo devuelva ofuscado','color: yellow');
function getDniOfuscado(dni){

    longitudNombre = dni.length;

    //Tomo la primera letra
    nombreCortado = dni.substring(0,2); 
    
    //agrega los *:
    dniCensurado = nombreCortado.padEnd(longitudNombre,'*');
    
    return dniCensurado;
}

console.log(getDniOfuscado('Y8295282R'));

dni = 'Y8295282R';
dni = getDniOfuscado(dni);
console.log(dni);

//una función a la que le pases un array de 2 elementos 
//y te devuelva el array invertido

function invertirArray(unArray){
   let arrayInvertido = unArray.toReversed();
   return arrayInvertido;
}
arrayNoInvertido = [66,99];
console.log(`Array No-invertido --> ${arrayNoInvertido}`);
console.log(`Array invertido    --> ${invertirArray(arrayNoInvertido)}`);