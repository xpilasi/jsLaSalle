
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