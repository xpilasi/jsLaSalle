console.log('Ejercicio 2 Condicionales');

// TODO: crea una función que pida tu nombre completo y te diga si tienes un nombre compuesto o no

pedirNombreCompleto = () => {
     nombreCompleto = prompt('Dime tu nombre completo y tu primer apellido');

     largoNombreCOmpleto = nombreCompleto.split(" ").length;
    
    if (largoNombreCOmpleto > 2){ console.log('Tienes más de 1 nombre')}
    else {console.log('Tienes 1 solo nombre')};
}

pedirNombreCompleto();
