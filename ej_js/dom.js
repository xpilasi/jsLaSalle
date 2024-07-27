console.log('%c** DOM **','color: orange');

//*Acceso a propiedades del DOM */

//console.log(document.title);
// document.querySelector('header').innerHTML += '<h3>Prueba</h3>';
// document.querySelector('header').innerHTML += '<h3>Prueba</h3>';

const titleH2 = document.querySelectorAll('h2');
const titleH3 = document.querySelectorAll('h3');
const kbd = document.querySelectorAll('kbd');
const pAlternativo = document.querySelectorAll('.p-alternativo');
const miBoton = document.getElementById('mi-boton');
const miParrafo = document.getElementById('p-alternativo');
let dark = false;

console.log(miParrafo);



darkMode = () => {

    if(dark == false){
        document.querySelector('body').style.backgroundColor = '#1D1C26';
        titleH2.forEach(h2 => {h2.style.color = '#FFFFFF';});
        titleH3.forEach(h3 => {h3.style.color = '#FFFFFF';});
        kbd.forEach(kbd => {kbd.style.boxShadow = '2px 2px #585858';});
        pAlternativo.forEach(pAlt => {pAlt.style.color = '#FFFFFF';});

       }else{
        document.querySelector('body').style.backgroundColor = '#FFFFFF';
        kbd.forEach(kbd => {kbd.style.boxShadow = '2px 2px #000000';});
        titleH2.forEach(h2 => {h2.style.color = '#000000';});
        pAlternativo.forEach(pAlt => {pAlt.style.color = '#000000';});

       }
       
       dark = !dark
       console.log(`DARK MODE: ${dark}`);
}

action = () => { console.log('FOCUS');}


miBoton.addEventListener('click',darkMode)
miParrafo.addEventListener('scroll',action)





