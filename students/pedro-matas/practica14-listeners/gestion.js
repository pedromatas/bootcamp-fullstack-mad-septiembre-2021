let container__form=document.querySelector('.form__container');
let titulo=document.querySelector('.titulo');
let descripcion=document.querySelector('.descripcion');
let boton=document.querySelector('.enviar');
let ulTitulo=document.querySelector('.ul__titulos');
let ulDescripcion=document.querySelector('.ul__descripcion');
let ul__checkbox=document.querySelector('.ul__checkbox');

let cont= JSON.parse(localStorage.getItem('cont'));

if(cont===null){
   cont=0;
}

container__form.addEventListener('submit',e=>{

    e.preventDefault(); 
    cont= JSON.parse(localStorage.getItem('cont'));
   cont++;
   let scont='';
   scont =cont.toString();
    let formtarget=e.target;
    localStorage.setItem(`titulo${scont}`,formtarget.titulo.value); 
    localStorage.setItem(`descripcion${scont}`,formtarget.descripcion.value); 
    localStorage.setItem('cont',scont);

    //for(let i=0;i<cont;i++){
        let liT = document.createElement('li');
        let liP = document.createElement('p');
        let liTd = document.createElement('li');
        let liPd = document.createElement('p');
        let liTc = document.createElement('li');
        let checkbox = document.createElement('input');
             
        // Assigning the attributes
        // to created checkbox
        checkbox.type = "checkbox";
        checkbox.name = "check";
        
        checkbox.id = "CHECK";
         
       
    ul__checkbox.appendChild(liTc);
    liTc.appendChild(checkbox);
    ulTitulo.appendChild(liT);
    liP.textContent=localStorage.getItem(`titulo${scont}`);
    liT.appendChild(liP);
    ulDescripcion.appendChild(liTd);
    liPd.textContent=localStorage.getItem(`descripcion${scont}`);
    liTd.appendChild(liPd);
//}
})
