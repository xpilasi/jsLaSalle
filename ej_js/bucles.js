console.log('%c------ Bucles ------','color: yellow');


const invitados = 7;

const reserva = false;

if (reserva){
    if (invitados < 2 ){
        console.log('Pase a la barra');
    }else if (invitados >= 2 && invitados < 5){
        console.log('Pase a las mesas de 4');
    }else if (invitados >= 5){
        console.log('Pasen a las mesas de afuera');
    }
}else{
    console.log('Lo siento, solamente reservas :(');
}

//* &&--> and
//* ||--> or
//* === -->totalmente igual (incluyendo el tipo)
const bebidas = ['whisky', 'pepsi','cerveza','jugo','agua'];

if (bebidas.includes('cerveza')){
console.log('Me quedo!');
}else{'Me voy!'}