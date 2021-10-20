//Pintar en el HTML un listado de todos los paises estructurado como un 
//"listín telefónico" en que veamos pais (en español), codigo de pais, prefijo

const pais = document.querySelector('.pais');
const codigo = document.querySelector('.codigo');
const prefijo = document.querySelector('.prefijo');

async function paises() {
    const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
    const d = await r.json();
    d.countries.forEach(element => {
        const liPais = document.createElement('li');
        liPais.classList.add('cliPais');
        const liCodigo = document.createElement('li');
        const liPrefijo = document.createElement('li');

        liPais.textContent = element.name_es;
        pais.appendChild(liPais);
        liCodigo.textContent = element.code;
        codigo.appendChild(liCodigo);
        liPrefijo.textContent = element.dial_code;
        prefijo.appendChild(liPrefijo);
    });

}
paises();


//3.- Añadir un botón al anterior que tenga el texto "EN", al pulsarlo cambiarán los nombres de los paises a su versión en inglés.

// const boton= document.querySelector('.cambiarIdioma');
// // let idioma=document.querySelectorAll('.pais > li');
// let idioma=document.querySelectorAll('li');
// console.log(idioma);
// async function cambiar() {
//     const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
//     const d = await r.json();
//     return d;
// }
// let lista=cambiar();
// console.log(lista);
// boton.addEventListener('click',()=>{

//     lista.countries.forEach(element => {
//         idioma.textContent = element.name_en;
//     });
// });


// version 2


const boton= document.querySelector('.cambiarIdioma');

const contenedor=document.querySelector('.contenedor');
boton.addEventListener('click', () => {

    async function cambio() {
        const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
        const d = await r.json();
        contenedor.removeChild(pais);
        const luPais = document.createElement('ul');
        contenedor.appendChild(luPais);
        
        d.countries.forEach(element => {
            const liPais2 = document.createElement('li');



            liPais2.textContent = element.name_en;
            luPais.appendChild(liPais2);



        });

    }
    cambio();


});


