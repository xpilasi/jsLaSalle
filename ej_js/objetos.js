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
mascota.edad = '5';
mascota.nombre = 'Nina';

console.log(mascota);