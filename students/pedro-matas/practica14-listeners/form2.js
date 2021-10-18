let formulario=document.querySelector('form__container');
let texto=document.querySelector('.itext');
let fparrafo=document.querySelector('.parrafo');




texto.addEventListener('keyup',(e)=>{
    
    fparrafo.textContent=e.target.value;

    sessionStorage.setItem('input',fparrafo.textContent);
});

fparrafo.textContent=sessionStorage.getItem('input');
texto.value=sessionStorage.getItem('input');
    
  
