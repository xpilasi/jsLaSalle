console.log('Ejercicio 5 Condicionales');


//TODO crea una funcion que divida dos numeros enteros y te devuelca en un array el cociente y el resto (residuo)

elegirNumeros = () => {
    
    numeroElegido1 = parseInt(prompt('Elige un número entero'));
    numeroElegido2 = parseInt(prompt('Elige un segundo número entero'));

    arrayDeNumeros =[numeroElegido1,numeroElegido2];
    
    console.log(arrayDeNumeros);

    dividir = (primerNumero, segundoNumero) =>{

        division = primerNumero / segundoNumero;
        modulo = primerNumero % segundoNumero;
        
        arrayResultado = [division,modulo];

        return arrayResultado;
    }   
    
    console.log(dividir(numeroElegido1,numeroElegido2));
     
}

//TODO crea una función que pida por prompt si quieres camiseta, pantalon o gorra, de cque color y de que talla y 
//TODO te muestre por consola un resumend el pedido
xedlegirNumeros();

elegirCompra = () => {

    eleccion = prompt('Que prefieres: camiseta, pantalóno gorra?');
    color = prompt('Qué color? Tenemos: azul,verde y amarillo');
    talla = prompt('Qué talla? Tenemos: S,M,L y XL');

    elecciones = ['camiseta','pantalón','gorra'];
    colores = ['azul','verde','amarillo'];
    tallas = ['S','M','L', 'XL'];

    if (elecciones.includes(eleccion)){
        if(colores.includes(color)){
            if(tallas.includes(talla)){
                console.log(`Resumen del pedido:
                    prenda: ${eleccion}, 
                    color: ${color}, 
                    talla: ${talla}`);
            }
        }else{elegirCompra()};       
    }else{
        console.log('Ingresaste mal los datos, recarga y vuelve a intentar');
        elegirCompra();
    }
}

//elegirCompra();

//TODO Crea una función que esté al principio de todo el script y te permita decidir cuál
//TODO de los cuatro ejercicios anteriores se ejecuta

preguntarEjercicio() = () =>{

    numeroEjercicio = prompt('Elige un ejercicio del 1 al 4');

    if( numeroEjercicio == 1){ejCondicionales1.ejCondicionales4}
}
