// Ejercicio 1: Recuperar la información de pikachu del API de pokemon 
//y mostrar en la web su imagen frontal y su nombre

const dContainer= document.querySelector('.pikachu');

async function pokedex() {
  const r = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const d= await r.json();
  
  
  return d.results;
    
}

async function pokemon(url) {
   
        
     const r= await fetch(url);
     const d= await r.json();
     return d;
       
    
}

// function buscador(nombre) {
//     pokedex().then((pokeCompleto)=>{
//         contPrincipal.style.display="none";
//         let pokemonElegido=pokeCompleto.find(element=>element.name===nombre);
//         const pDOM= document.createElement('p');
//         pDOM.textContent=pokemonElegido.name;
//         document.body.appendChild(pDOM);
//         pokemon(pokemonElegido.url).then((elegido)=>{
//             const card=document.createElement('div');
//             document.body.appendChild(card);// creacion del card e implementado
//             card.className="container";

//             let imgFrontal= elegido.sprites.front_default;
//             const pokemonImg=document.createElement('img');
//             pokemonImg.src=imgFrontal;
//             card.appendChild(pokemonImg);// creacion de la img e implementacion

//             const pDom=document.createElement('p');
//             pDom.textContent=elegido.name;
//             card.appendChild(pDom);// creacion del nombre e implementacion

//             const divTipo=document.createElement('div');
//             card.appendChild(divTipo);
//             divTipo.className="divTipo";// creacion del div que contiene el tipo y el id

//             const divTiposCont=document.createElement('div');
//             divTipo.appendChild(divTiposCont);
//             divTiposCont.className="divTipoCont";
//             // creacion del div que contiene los tipos

//             elegido.types.forEach(element => {
//                 const pTipos=document.createElement('p');
//                 pTipos.textContent=`${element.type.name} `;
//                 divTiposCont.appendChild(pTipos);
//             });// implementacion de los tipos

//             const divId=document.createElement('div');
//             const pId=document.createElement('p');
//             divTipo.appendChild(divId);// implemetacion del div del id

//             pId.textContent=(elegido.id).toString();
//             divId.appendChild(pId);

//         })
//     })
    
// }
// pintarPokemon("bulbasaur");

const contPrincipal=document.querySelector('.contenedor-principal');

function pintarPokedex(){
    pokedex().then((pokeCompleto)=>{
        pokeCompleto.forEach(element => {
            pokemon(element.url).then((elegido)=>{
                const card=document.createElement('div');
                contPrincipal.appendChild(card);// creacion del card e implementado
                card.className="container";

                let imgFrontal= elegido.sprites.front_default;
                const pokemonImg=document.createElement('img');
                pokemonImg.src=imgFrontal;
                card.appendChild(pokemonImg);// creacion de la img e implementacion

                const pDom=document.createElement('p');
                pDom.textContent=elegido.name;
                card.appendChild(pDom);// creacion del nombre e implementacion

                const divTipo=document.createElement('div');
                card.appendChild(divTipo);
                divTipo.className="divTipo";// creacion del div que contiene el tipo y el id

                const divTiposCont=document.createElement('div');
                divTipo.appendChild(divTiposCont);
                divTiposCont.className="divTipoCont";
                // creacion del div que contiene los tipos

                elegido.types.forEach(element => {
                    const pTipos=document.createElement('p');
                    pTipos.textContent=`${element.type.name} `;
                    divTiposCont.appendChild(pTipos);
                });// implementacion de los tipos

                const divId=document.createElement('div');
                const pId=document.createElement('p');
                pId.className="pId";
                divTipo.appendChild(divId);// implemetacion del div del id

                pId.textContent=(elegido.id).toString();
                divId.appendChild(pId);



            })
        });
    })
}

pintarPokedex();

const txtBuscador=document.querySelector('.buscador');

txtBuscador.addEventListener('keydown',()=>{
    pintarPokedex();
   
});




