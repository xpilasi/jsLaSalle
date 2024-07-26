console.log('%c** DOM **','color: orange');

//*Acceso a propiedades del DOM */

console.log(document.title);
// document.querySelector('header').innerHTML += '<h3>Prueba</h3>';
// document.querySelector('header').innerHTML += '<h3>Prueba</h3>';

const titleH2 = document.querySelectorAll('h2');


// titleH2.forEach(h2 =>{

//     h2.style.color = '#F24E4E';
// }
// );

console.log(titleH2);
let time = 2000;
for(let el of titleH2){
    console.log(`TIME 0: ${time}`);
    
    setTimeout(()=>{
       
        el.style.color = '#F24E4E';
        console.log(`TIME 2: ${time}`);
    },time)
    
    time += 1000;
}


//'#F24E4E';