console.log('%c** EXTRAS JS **','color: orange');

//*1 mostra les taules de multiplicar del 1 al 9 per la consola


    // console.log('EJ1: Tablas de multiplicar');

    // for(let i = 1 ; i <= 10 ;i++){
        
    //     for(let n = 1 ; n <= 10 ; n++){
    //         //console.log(n);
            
    //         resultado = i * n;
    //         lineaTabla = `${i} x ${n} = ${resultado}`;
        
    //         console.log(lineaTabla);
    //     }
    // }


//*2 recrea la funció parseFloat() de manera que agafi els números encara que 
//*hi hagi lletres abans i accepti com a separador decimal els símbols ",", "." i "'". P.e: "hola89'234" 
//*ha de tornar "89.234", "43'35adeu" ha de tornar "43.35", "amor45.9odi" ha de tornar "45.9", "234.1234.25.5" 
//*ha de tornar "234.1234"

// console.log('EJ2');
// const simbolosDecimalesAceptados = ",.' ";
// const numerosAceptados = '1234567890,.';

// //limpia los decimales:

// function limpiarNumeros  (string) {

//     decimales = 0;  
//     stringLimpia = '';

//     //Chequear si hay símbolos y espacios
//     for(let char of string){
//         if(numerosAceptados.includes(char)){

//             if(char == '.' || char == ','){
//                 decimales +=1;
//             }
//             if(decimales > 1){ continue}else{
//                 stringLimpia += char;
//                 console.log(decimales);
//             }
//         }
//     }

//     return stringLimpia;
// }

// console.log(limpiarNumeros('123-dh4.erereu1   66....34'));


//*3 TODO: crea una funció que agafi un string i que torni una lletra aleatoria (sense contar espais i signes de puntuació)

// console.log('EJ3');
// function entregarLetraAleatoria(string){

//     stringLimpia = string.replace(/\s+/g, '');
//     console.log(stringLimpia);

//     let largoString = stringLimpia.length;
//     let min = 0;
//     let max = largoString - 1;

//    // console.log(largoString);

//     let numeroRandom = Math.random() * (max - min + 1) + min;
//     let randomInt = parseInt(numeroRandom);
//     console.log(randomInt);

//     console.log(stringLimpia[randomInt]);



//    return randomInt;

// }

// console.log(entregarLetraAleatoria('un   o de las personas'));


//*4 TODO: crea una funció que agafi un text i li'n separi les paraules (sense signes de puntuació) i les torni en un nou string separades per espais (sense usar arrays)

// console.log('EJ4');
// const textoBase = 'Esto es un texto, el cual es base para: TODO';
// const noPermitidos = '.,:';


// limpiarString = (texto) =>{

//     let nuevoTexto = '';

//     for(let el of textoBase){
        
//         if (noPermitidos.includes(el)){
//             continue;
//         }else{
//             nuevoTexto += el;
//         }
//     }

//     return nuevoTexto;
// }
// console.log(textoBase);
// console.log( limpiarString(textoBase));


//TODO 5
// TODO: crea una funció que agafi un string i que torni una paraula aleatòria continguda en ella (sense usar arrays)

console.log('%cEJERCICIO 5','color:yellow');
 entregarNumeroAleatorio = (a,b) => {

    let minimo = Math.ceil(a); //minimo
    let maximo = Math.floor(b); //máximo
    let numeroRandom = Math.random() * (maximo - minimo + 1) + minimo;
    let randomInt = parseInt(numeroRandom);
    
    return randomInt;

}

const baseTexto = 'Esto es un texto base para el ejercicio';

palabraAleatoria = (texto) => {

    let textoLimpio =  texto.trim();
    let cantidadDeEspacios = 0;

    //Encontramos la cantidad de palabras que hay
    for (let i of textoLimpio){
        if( i == ' '){
            cantidadDeEspacios += 1;
        }
    }

    
    let cantidadDePalabras = cantidadDeEspacios  + 1 ;

    
    let palabraRandom = '';
    console.log(`Total palabras: ${cantidadDePalabras}`);

   
    let contador = 0;
    let numeroAleat = entregarNumeroAleatorio(0,cantidadDePalabras);
    let palabraFinal = '';
    let palabraTemporal = '';
    let palabraTemporal2 = '';

    for (let el of texto){
        
        
        palabraTemporal += el;

        if( el == ' '){
            console.log('ESPACIO');
            console.log(`Número aleatorio: ${numeroAleat}`);
            contador += 1;

            

            if (contador == numeroAleat){
                console.log(`${contador} - ${numeroAleat}`);

                //Recorremos la string hacia atrás:
                console.log(palabraTemporal);
                // let palabraReverse = palabraTemporal.reverse();
                // console.log(palabraReverse);

                    for(let i = palabraTemporal.length -1; i>= 0;i--){
                        
                        console.log(`PPRRUEEBA`);
                    palabraTemporal2 += char;
                    if( texto[j] == ' '){
                        break}
                    }

                break;
            }
        
        }
        
        console.log(palabraTemporal2);
        let palabraDefinitiva = '';
        palabraFinal = palabraTemporal2.trim();

        for (let el of palabraFinal){
            palabraDefinitiva =+ el;
        }

        palabraRandom = palabraDefinitiva;
    }
    
    
    
    return palabraRandom;

   
}


console.log(palabraAleatoria('Este es un raro texto que nos toca'));

// TODO 6: paradoxa de l'aniversari. Genera N dates d'aniversari aleatòries (1-365) en un array i comprova si hi ha alguna repetida. Fes això per N = 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 i mostra a la consola per quins hi ha hagut coincidències d'aniversari

// TODO 7: dues funcions que gestionin les dades rebudes en un array d'strings o en una string amb totes juntes
// data0 = "NOM Omar"
// data1 = "COG Olmedo"   -> [data0, data1, data2, ...]
// data2 = "AGE 33"

// data = "NOM Omar COG Olmedo AGE 33"

// La funció ha de retornar un objecte així:

// {
//     nom: "Omar",
//     cognom: "Olmedo",
//     edat: 33
// }

// TODO 8: gestionar un CSV. El programa ha d'agafar un string en format CSV i ficar tota la informació dins un array d'objectes amb els noms de les columnes com a propietats
// PISTA: necessitareu ajuda. Demaneu-la
// PISTA 2: encara que no hi hagi \n per marcar els salts de línia, els detexta igual perquè uso cometes ``

var csvCotxes = `Year,Make,Model,Description,Price
1997,Ford,E350,ac abs moon,3000.00
1999,Chevy,Venture "Extended Edition",,4900.00
1999,Chevy,Venture "Extended Edition XL",,5000.00
1996,Jeep,Grand Cherokee,MUST SELL! air moon-roof loaded,4799.00`

const csvStudents = `ID,First Name,Last Name,Age,Grade,Email,Phone,Address
1,John,Doe,18,12,john.doe@example.com,555-1234,123 Main St
2,Jane,Smith,17,11,jane.smith@example.com,555-5678,456 Oak Ave
3,Bob,Johnson,16,10,bob.johnson@example.com,555-9012,789 Elm Rd
4,Sarah,Williams,19,12,sarah.williams@example.com,555-3456,321 Pine Ln
5,Michael,Brown,18,11,michael.brown@example.com,555-7890,654 Maple Dr
6,Emily,Davis,17,10,emily.davis@example.com,555-2468,987 Cedar Rd
7,David,Miller,16,9,david.miller@example.com,555-8642,159 Spruce St
8,Jessica,Wilson,18,12,jessica.wilson@example.com,555-4321,753 Oak Blvd
9,Daniel,Moore,17,11,daniel.moore@example.com,555-6789,246 Elm Ave
10,Ashley,Taylor,16,10,ashley.taylor@example.com,555-0123,468 Maple Ln`;

// var cotxes = [ { Year = 1997,
//                  Make = "Ford",
//                  Model = "E350",
//                  Description = "ac, abs, moon",
//                  Price = 3000.00
//                 },    
//                { Year = 1997,
//                  Make = "Ford",
//                  Model = "E350",
//                  Description = "",
//                  Price = 3000.00
//                 } ];