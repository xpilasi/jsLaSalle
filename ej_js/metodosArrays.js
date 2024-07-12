
console.log('Métodos que modifican Arrays');

animales = ['🐸','🐶','🦄','🐵'];
colores = ['🔴','🟢','🟡','🔵','⚫️'];


//concat --> Une arrays en 1 solo
console.log(animales.concat('🐮'));
console.log(animales.concat(colores));

//join --> Une en una String con el separador elegido
console.log(animales.join('🔅'));

//pop --> Elimina el último elemento y lo devuelve
ultimoElemento = animales.pop();
console.log(ultimoElemento);
console.log(animales);

//push --> Añade un elemento y devuelve el length del array
largoAnimales = animales.push(ultimoElemento)
console.log(animales);
console.log(largoAnimales);

//flat --> Une todos los arrays y subarrays(se indica el nivel)
arrays = [1,2,3,[6,6,6],[[8,8],9]];
console.log(arrays.flat(1));
console.log(arrays.flat(Infinity));

numbers = ['uno','dos','tres','cuatro','cinco'];

//toReversed --> invierte pero no mopdifica el array
numbersReversed = numbers.toReversed();
console.log(numbers);
console.log(numbersReversed);
console.log(numbers);

//reverse--> invierte y modifica el array
numbersInverted = numbers.reverse();
console.log(numbersInverted);

//sort --> ordena de - a + y modifica el array
numbersSorted = numbers.sort();
console.log(numbers);
console.log(numbersSorted);