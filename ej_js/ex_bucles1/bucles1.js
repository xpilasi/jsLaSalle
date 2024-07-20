

console.log('%c<---BUCLES--->','color: red');

marcas = ['Gibson','Fender','Vimana','Heritage', 'Ibanez','Schecter','ESP'];

bandas = {
    1:'Arcade Fire',
    2:'Iron Maiden',
    3:'Metallica',
    4:'Red Hot',
    5:'Pearl Jam',
}

//* for of : para arrays y strings

for (let element of marcas){
    console.log(element);
}

//* for in : para objetos

for (let element in bandas){
    let key = element;
    console.log(`Banda nº${key} : ${bandas[key]}`);
}

//*for con indice

for(let i = 0; i <= 15; i++){
    console.log(`nº ${i}`);
}

//*Recorrer array con índice

const nombre = 'Xavier';

letras = [];

for(let el of nombre) {
    letras.push(el);
}
console.log(letras);

//*Modificar los elementos de un array

for(let indice in letras ){
    let elementoBuscado = 'a';
    let elementoDeReemplazo = 'X';
    
    if(letras[indice] == elementoBuscado){
        console.log(`MATCH --> encontré una ${letras[indice]}`);
        letras[indice] = 'X'
        console.log(`Modifiqué "${elementoBuscado}" por "${elementoDeReemplazo}" `);    
    }
    
}
console.log(letras);

//! Este es un comentario IMPORTANTE :)

//*escribe un bucle que muestre 10 veces un mensaje por la consola con el text en color rojo y azul alternativamente


for (let i = 0 ; i <= 10; i++){
    let mensaje = 'Habrán señales';
    if (i%2 == 0){console.log(`%c${mensaje}`, 'color: red');}
    else{console.log(`%c${mensaje}`, 'color: yellow'); }
};

//*escribe un bucle que muestre los números del 0 al 20 y muestre a su lado "hola" si es multiple de 2, "adeu" si es multiple de 3 i "què tal?" si es múltiple de 5

// for (let i = 0; i <= 20; i++){
//     if( i%2 == 0){console.log(`${i} - Hola`);}
//     else if (i%3 == 0){console.log(`${i} - Adeu`);}
//     else if (i%5 == 0){console.log(`${i} - ¿Qué tal?`);}
//     else {console.log(`${i} - Hola, Adeu, ¿Qué tal?`);}
// };

//*fes un contador que mostri a la consola els números de l'1 al número que introdueixis com a paràmentre (fins a 1000 com a màxim)

// numeroElegido = parseInt(prompt('Elige un número del 1 al 1000'));
// for (let i = 0 ; i <= numeroElegido; i++){console.log(i);}

//*fes un contador que només mostri els números que tinguin un dígit contingut a la string definida per l'usuari (amb prompt) fins a 100

numeroElegidoString = prompt('Elige un número del 1 al 100. Si pones + de 2 decimales se considerarán solamente los 2 primeros :)');
numeroDecimal = parseFloat(numeroElegidoString);

//Primer filtro : si es decimal--> es mayor a 100?
if(numeroDecimal <= 100){

        for (let a = 1 ; a <= 100; a++){ //recorre del 1 al 100
            
            let indiceString = a.toString(); //transforma el indice a string para recorrerlo
            for(let elemento of indiceString){ //recorre el indice
       
                for(let numero of numeroElegidoString){ //recorre el numero elegido
    
                    //compara el numero elegido descompuesto con el numero dentro del indice
                    if(elemento == numero){ console.log(`MATCH!⚡️ el número "${numero}" se encuentra dentro de ${a}`);}
                }
            }
        }
    
}else{console.log('No elegiste un número del 1 al 100');}


    

//*llista de la compra. Fes que un prompt es repeteixi fins que l'usuari introdueixi una paraula clau (useu BREAK); fins llavors, cada paraula introduida serà un item de la llista de la compra, que s'escriurà després de que l'usuari l'aturi amb el format:       


// listaDeCompras = "Lista de compras";
// seguir = true;

// while(seguir){
    
//     let nuevoProducto = prompt('Agrega tu producto a la lista. Para finalizar teclea "STOP".').toLowerCase();
//     listaDeCompras += `\n   -${nuevoProducto}`;
    
//     if(nuevoProducto == 'stop'){
//         console.log('STOP');
//         break}
    
// }
// console.log(listaDeCompras);
    
