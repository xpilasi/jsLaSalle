console.log('%cArrow functions','color: green');

//*Arrow functions

const myFunction = () => {};

const getName = () => 'Xavi';
const getLastName = () => 'Pilasi';

console.log(getName());
console.log(getLastName());

const getAverage = (array) => {

    let lengthArray = array.length;
    let numberSum = 0;

    for (let number of array){
        
        numberSum += number
        console.log(numberSum);
    };
    let average = numberSum / lengthArray;
    console.log(lengthArray);
    console.log(average);
    return average;

}

const numbers = [1,2,3,4];
av= getAverage(numbers);

console.log(av);

//*Callbacks

const unaFuncion = (apellido) => console.log(`Xavier ${apellido}`);

function logCustom(contenido, log){
    log(contenido);
}

logCustom('Pilasi',unaFuncion)
logCustom('Haritcalde',unaFuncion)
logCustom('Bravo',unaFuncion)

//*Funciones temporales

setTimeout(() => logCustom('en 1 segundos..',unaFuncion),1000)
setTimeout(() => logCustom('en 2 segundos..',unaFuncion),2000)
setTimeout(() => logCustom('en 3 segundos..',unaFuncion),3000)

setInterval(() => {
    console.log(`Han pasado 1,5 segundos`),1500;
}); 
