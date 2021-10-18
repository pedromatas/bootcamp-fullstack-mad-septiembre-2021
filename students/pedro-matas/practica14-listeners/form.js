let lista=document.querySelector('.lista');
let boton=document.querySelector('.boton');
let texto=document.querySelector('.texto');
let contenedor=document.querySelector('.form__container');

contenedor.addEventListener('submit',e=>{
    e.preventDefault(); 
    let elementoForm=e.target;
    let lis=document.createElement('li');
    let plis=document.createElement('p');
    plis.textContent=elementoForm.texto.value;
    lista.appendChild(lis);
    lis.appendChild(plis);

})
