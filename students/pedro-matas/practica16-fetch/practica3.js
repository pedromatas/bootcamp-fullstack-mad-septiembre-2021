//6.- Mostrar en un html los paises cuyo prefijo telefónico se encuentre en el rango 20<x<600.
// Además debemos mostrar cuantos paises son en total. 



let cont=0;
    async function telefono() {
        const r = await fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json');
        const d = await r.json();
        let cadena='';
       
        d.countries.forEach(element => {
            
            if((parseInt( element.dial_code) >20)&& (parseInt(element.dial_code)<600)){
                cont++;
                const p= document.createElement('p');
                document.body.appendChild(p);
                cadena=cadena+` ${element.name_es}`;
            }


           
        });
        const p= document.createElement('p');
                document.body.appendChild(p);
      p.textContent=` En total hay ${cont} paises: ${cadena}`
    }
    telefono();



