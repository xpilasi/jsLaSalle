
const PI = '3.1415';
radio = 4.5;


radioString = radio.toString();
radioInt = parseFloat(radioString)

console.log(radioString);
console.log(radioInt);

console.log(typeof radioString);
console.log(typeof radioInt);





// trim --> para eliminar los espacios al principio y al final

frase = '   This is Sparta!!  ';
fraseTrim = frase.trim();
console.log(frase);
console.log(fraseTrim);


//Pad 
text = '5';
console.log(text.padStart(4,'X'));//agrega 3 X
console.log(text.padStart(4,'0'));//agrega 3 0

//Split
descripcion = 'Era un día distinto';
descripcionSplit = descripcion.split(' '); //genera un array
console.log(descripcionSplit);

//Slice --> Corta desde un punto inicial hasta un punto final
//No considera el último elemento
frutas = ['uva','sandía','melón','banana'];
frutasSlice = frutas.slice(1,4);
console.log(frutasSlice);


//Replace: reemplaza solamebte el primero
guitarras = 'Mi marca preferida de guitarras es Gibson y Gibson'
guitarrasReplace = guitarras.replace('Gibson','Tokai');
console.log(guitarras);
console.log(guitarrasReplace);

//Replace all: reemplaza todos
guitarras = 'Mi marca preferida de guitarras es Gibson y Gibson'
guitarrasReplaceAll = guitarras.replaceAll('Gibson','Tokai');
console.log(guitarras);
console.log(guitarrasReplaceAll)

// Index off
colores = ['rojo', 'carmín', 'verde' ,'turquesa'];
console.log(colores.indexOf('carmín')); //índice 1
console.log(colores.indexOf('turquesa')); //índice 3

//Includes
existe = colores.includes('negro');
console.log(existe);//false: no existe el color negro en el array

console.log(' -- ');
console.log('Ejercicio ');

//EJERCICIO
//TODO Hacer que se censure el nombre en una String

alumno = {
    nombre: 'Xavier',
    apellido: 'Pilasi',
    asignatura: 'FrontEnd',
    nota: 7.5,
    aprobado: true
}
fraseSinCensura = `Alumno: Xavier / Nota: ${alumno.nota}`;

longitudNombre = alumno.nombre.length;
nombreCortado = alumno.nombre.substring(0,1); //Tomo la primera letra

//agrega los *:
nombreCensurado = nombreCortado.padEnd(longitudNombre,'*');
fraseCensurada = fraseSinCensura.replace(`${alumno.nombre}`,nombreCensurado);
console.log(`No-Censurado--> ${fraseSinCensura}`);
console.log(`Censurado   --> ${fraseCensurada}`);





