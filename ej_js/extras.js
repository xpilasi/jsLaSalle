console.log('%c<---EXTRAS 2--->','color: red');

numeroAleatorio = parseInt(Math.random);

console.log(numeroAleatorio);
function entregarNumeroAleatorio(a,b){

    let minimo = Math.ceil(a); //minimo
    let maximo = Math.floor(b); //máximo

    let numeroRandom = Math.random() * (maximo - minimo + 1) + minimo;
    let randomInt = parseInt(numeroRandom);
    return randomInt;

}

console.log( entregarNumeroAleatorio(2,8) );
console.log( entregarNumeroAleatorio(2,8) );
console.log( entregarNumeroAleatorio(2,8) );


//TODO estadísticas con los número aleatorios
// TODO 

fechaStart = new Date();
console.log(fechaStart);

anyo = fechaStart.getFullYear();
mes = fechaStart.getMonth()+1;
console.log(mes);

if (mes < 10){
 mes = `0${mes}`;
 console.log(mes);
}
console.log(mes);
dia = fechaStart.getDate()

fechaFull = `${dia}/${mes}/${anyo}`

console.log(fechaFull);