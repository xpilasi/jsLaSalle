console.log('Ejercicio 2 Bucles');

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

elegirCompra();
