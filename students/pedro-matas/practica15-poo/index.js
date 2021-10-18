// 1- Crear una clase que represente un perro 
//(nombre, edad, numero de patas, color, hacerSonido(), mostrarAnimal())

const aPerro=document.querySelector('.audio-perro');
const iPerro=document.querySelector('.perro');
const aGato=document.querySelector('.audio-gato');
const iGato=document.querySelector('.gato');
const aGallina=document.querySelector('.audio-gallina');
const iGallina=document.querySelector('.gallina');



aPerro.addEventListener('click',e=>{sonido("./sonido-perro.mp3")});
aGato.addEventListener('click',e=>{sonido("./sonido-gato.mp3")});
aGallina.addEventListener('click',e=>{sonido("./sonido-gallina.mp3")});

function sonido(url){
    const audio = new Audio(url);

audio.controls = true;
audio.play();
}


class Animal{
    constructor(nombre,edad,patas,color){
        this.nombre=nombre;
        this.edad=edad;
        this.patas=patas;
        this.color=color;
     
       
    }
}
class Perro extends Animal{
    constructor(nombre,edad,patas,color){
       super(nombre,edad,patas,color);
       
    }
    imagen(url){
        let img = document.createElement('img');
        img.src = `${url}`;
        return img;
    }
    

}


class Gato extends Animal{
    constructor(nombre,edad,patas,color){
        super(nombre,edad,patas,color);
        
     }
    imagen(url){
        let img = document.createElement('img');
        img.src = `${url}`;
        return img;
    }

}


class Gallina extends Animal{
    constructor(nombre,edad,patas,color){
        super(nombre,edad,patas,color);
        
     }
    imagen(url){
        let img = document.createElement('img');
        img.src = `${url}`;
        return img;
    }

}

const bugax= new Perro('buggax',102,2,'blanco');
const mahou= new Gato('mahou',10,4,'rojo');
const buebo= new Gallina('buebo',1,2,'negro');

// bugax.imagen("./perro.jpg");

iPerro.appendChild(bugax.imagen("./perro.jpg"));
iGato.appendChild(bugax.imagen("./gato.jpg"));
iGallina.appendChild(bugax.imagen("./gallina.png"));



