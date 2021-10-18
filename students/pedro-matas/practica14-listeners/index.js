let fnombre= document.getElementById('nombre');
let fedad= document.getElementById('edad');
let fhobbie= document.getElementById('hobbie');
let fboton= document.querySelector('.enviar');

function fenviar(n,e,h){
    localStorage.setItem('nombre',n.value);
    localStorage.setItem('edad',e.value);
    localStorage.setItem('hobbie',h.value);
}


fboton.addEventListener('click',() => {
    fenviar(fnombre,fedad,fhobbie)
}
);
