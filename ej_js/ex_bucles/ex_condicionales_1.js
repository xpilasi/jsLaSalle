console.log('Ejercicio 1 Bucles');

animalInputC = prompt('Dime un animal');

console.log(`elegiste un ${animalInputC}`);

const animalInput = animalInputC.toLowerCase();

if (animalInput === 'gato'){
    console.log('un 😺 se cuida solo')
}else if (animalInput === 'jirafa'){
    console.log('una 🦒 ?? devuélvela a la selva!!')
}else if (animalInput === 'serpiente'){
    console.log('ojo con la 🐍..ponle tapa al acuario')
}else if (animalInput == 'perro'){
    console.log('🐶: paséalo todos los días')
}else {console.log(`no tengo información para ese bicho`)}

