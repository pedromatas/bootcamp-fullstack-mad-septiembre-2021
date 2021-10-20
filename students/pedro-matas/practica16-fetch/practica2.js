// 4.- Crear un HTML con un input y un botón. Al introducir el usuario un país (en español)
// debe aparecer debajo la información completa de ese país.

const texto=document.getElementById('pais');
const boton=document.querySelector('.boton');

boton.addEventListener('click', () => {

    async function buscar() {
        const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
        const d = await r.json();
       
        d.countries.forEach(element => {
            
            if(element.name_es.toLowerCase()===texto.value){
                const p= document.createElement('p');
                document.body.appendChild(p);
                p.textContent=`${element.name_es},${element.code},${element.name_en},${element.dial_code}`;
            }



        });
       
    }
    buscar();


});


//5.- Refactorizar el código anterior para lograr que al introducir "Arg" o "arg" aparezca 
//un listado con la información de todos los paises que empiecen por 'arg'

const boton2=document.querySelector('.boton2');
boton2.addEventListener('click', () => {

    async function buscar() {
        const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
        const d = await r.json();
       
        d.countries.forEach(element => {
            
            if(element.name_es.toLowerCase().includes('arg')){
                const p= document.createElement('p');
                document.body.appendChild(p);
                p.textContent=`${element.name_es},${element.code},${element.name_en},${element.dial_code}`;
            }



        });
       
    }

    buscar();


});

