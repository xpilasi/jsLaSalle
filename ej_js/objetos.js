console.log("Ejercicio de Objetos");

xavi = {
    edad: 39,
    nombre: 'Xavier',
    apellido:'Pilasi',
    hobbie: '🎸',
    animales: ['🐈','🐶','🦒'],
    deportes: ['🧗‍♀️','⚽️']
}

console.log(xavi.animales);

animalPreferido = xavi.animales[1];
console.log(`El animal preferido de ${xavi.nombre} es el ${animalPreferido}`);

mascota = {};

mascota.animal = 'perro';
mascota.edad = 5;
mascota.nombre = 'Nina';

console.log(mascota);

largoObjeto = xavi.deportes.length;
console.log(largoObjeto);

// TODO: array con 5 objetos dentro con las mismas 4 propiedades

gibson = {
    marca: 'Gibson',
    origen: 'USA',
    modeloIconico:'Les Paul',
    anyoFundacion: 1894,  
    
}
fender = {
    marca: 'Fender',
    origen: 'USA',
    modeloIconico:'Stratocaster',
    anyoFundacion: 1946,  
}
ibanez = {
    marca: 'Ibanez',
    origen: 'Japón',
    modeloIconico:'JEM',
    anyoFundacion: 1895,  
}
strandberg = {
    marca: 'Strandberg',
    origen: 'Suecia',
    modeloIconico:'Boden',
    anyoFundacion: 2007,  
}
schecter = {
    marca: 'Schecter',
    origen: 'USA',
    modeloIconico:'C6',
    anyoFundacion: 1976,  
}


marcasGuitarra = [gibson,fender,ibanez,strandberg,schecter];
console.log(marcasGuitarra);

// TODO: creo array que contenga una lista de 1 de las propiedades de los objetos

modelosIconicos = [
    gibson.modeloIconico,
    fender.modeloIconico,
    ibanez.modeloIconico,
    strandberg.modeloIconico,
    schecter.modeloIconico
];
anyosFundacion = [
    gibson.anyoFundacion,
    fender.anyoFundacion,
    ibanez.anyoFundacion,
    strandberg.anyoFundacion,
    schecter.anyoFundacion
];

console.log(modelosIconicos);
console.log(anyosFundacion);

// TODO: crear una variable que contenga la suma de una propiedad que sea numérica

//promedio de antiguedad de las marcas de guitarra:
anyoActual = 2024;
totalAnyos =    (anyoActual - anyosFundacion[0]) + 
                (anyoActual - anyosFundacion[1]) +
                (anyoActual - anyosFundacion[2]) + 
                (anyoActual - anyosFundacion[3]) + 
                (anyoActual - anyosFundacion[4]);

                console.log(totalAnyos);
    
                promedio = totalAnyos / anyosFundacion.length;

    console.log(promedio);

// TODO: mostrar por consola todo lo anterior
// TODO: mostrar por consola 1 frase que resuma las propiedades de cada objeto

console.log(`El promedio de años de antiguedad de las marcas es de ${promedio} años`);

// TODO: buscar una manera de mostrar por consola todos los objetos en forma de tabla 
console.table(marcasGuitarra)

