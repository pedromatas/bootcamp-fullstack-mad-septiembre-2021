// 1.- Crear una promesa que cuando se resuelva tras 5 segundos
//  muestre un <p>Hello World</p> en el navegador.


const myPromise = new Promise((resolve) => { 
    
    
    setTimeout(() => {
        resolve(true);
       
       
    }, 5000 ); 

    
});

myPromise.then((value)=>{
    console.log(value);
    const pDOM=document.createElement('p');
    pDOM.textContent='hello world';
    let cuerpo=document.body;
    cuerpo.appendChild(pDOM);
    
    });


// 2.- Colocar un botón en el navegador que al pulsarlo nos dibuje los números del 0 al 10.
//  Entre elemento y elemento debe transcurrir 0.5 segundos. 

// let btnContar=document.querySelector('.btnContar');
// let cont=0;


// btnContar.addEventListener('click',()=>{
    
    
    
   
//   let idInterval=  setInterval(() => {
//         console.log(cont);
       
//          cont++;
//          if(cont>10){
//         clearInterval(idInterval);
//     }
    
//     }, 500 ); 
  
// });


//3.- Refactorizar el ejercicio anterior para que al pulsar el botón aparezcan 
//los número impares de 1 en 1 cada 0,5 segundos y posteriormente 
//(después de + 1,5 segundos) aparezcan los pares cada 5 segundos.


let btnContar=document.querySelector('.btnContar');
let cont=0;
let cont2=-1;

btnContar.addEventListener('click',()=>{
    
    
    
   
  let idInterval=  setInterval(() => {
      if(cont%2!==0){
        console.log(cont);
      }
         cont++;
         if(cont>10){
        clearInterval(idInterval);
    }
    
    }, 250 ); 
  
   

    
    let idInterval2=  setInterval(() => {
        if(cont2%2===0){
          console.log(cont2);
        }
           cont2++;
           if(cont2>10){
          clearInterval(idInterval2);
      }
      
      }, 2500 ); 
  
});



//4.-Crear una función que se ejecute cada 1 segundo y pinte por pantalla un reloj con el 
// formato hh:mm:ss (si alguna unidad es menor de 10 podemos mostrarla en el formato h:m:s).
//  ***Investigar métodos get de la clase Date***
//  OPCIONAL: gestionar que el formato sea hh:mm:ss en todo momento (03:05:03)


// sin metodo get date

//  let contHoras=0;
//  let contMin=0;
//  let contSeg=0;


// const pDOM=document.createElement('p');
// let cuerpo=document.body;
//  cuerpo.appendChild(pDOM); 
// setInterval(() => {

     
//     pDOM.textContent=`${contHoras}:${contMin}:${contSeg}`;
    
    
   
//     contSeg++;
//     if (contSeg === 60) {
//         contSeg = 0;
//         contMin++;
//         if(contMin===60){
//             contMin=0;
//             contHoras++;
//             if(contHoras===24){
//                 contHoras=0;
//             }
//         }
//     }

// }, 1000);



// con metodo get

miFechaActual = new Date() 
let contHoras=miFechaActual.getHours()
 let contMin=miFechaActual.getMinutes()
 let contSeg=miFechaActual.getSeconds();


const pDOM=document.createElement('p');
     let cuerpo=document.body;
 cuerpo.appendChild(pDOM); 
setInterval(() => {

     
    pDOM.textContent=`${contHoras}:${contMin}:${contSeg}`;
    
    
   contSeg++;
   
    if (contSeg === 60) {
        contSeg=0;
        
        contMin++;
        if(contMin===60){
            contMin=0;
            contHoras++;
            if(contHoras===24){
                contHoras=0;
            }
        }
    }

}, 1000);



//5.-Crear un input y un botón en el navegador. 
// El input recibirá un valor numérico (habrá que "parsearlo") 
// y al pulsar el botón comenzará a correr el tiempo en segundos.
//  Cuando se alcance el valor introducido en el input 
// se parará el cronómetro y se mostrará el texto "Finish" en el navegador.

let nCronometro=document.querySelector('.nCronometro');


let bCronometro=document.querySelector('.bCronometro');
let cronoSeg=0;

const psDOM=document.createElement('p');

 cuerpo.appendChild(psDOM); 

bCronometro.addEventListener('click', () => {
    let contCrono=parseInt(nCronometro.value); 
    let idCrono = setInterval(() => {
        psDOM.textContent = `${cronoSeg}`;
        cronoSeg++;
        if (cronoSeg > contCrono) {
            psDOM.textContent = `FINISH`;
            clearInterval(idCrono);
        }
    }, 1000);



})