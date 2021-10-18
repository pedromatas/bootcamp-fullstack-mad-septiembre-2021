// 1- Crear una clase menú que represente un almuerzo. Todos los menús anteriores deben heredar de este. 
//(Primer plato, segundo plato, bebida, postre, mostrarPrecio())

class Menu{
    constructor(primero,segundo,bebida,postre,precio){
        this.primero=primero;
        this.segundo=segundo;
        this.bebida=bebida;
        this.postre=postre;
        this.precio=precio;
    }
    preciof(){
        return this.precio;
    }
    updatePrice(newPrice){
        this.precio=newPrice;
        return this.precio;
    }

}

class Vegetariano extends Menu {
    constructor(primero, segundo, bebida, postre,precio) {
        super(primero, segundo, bebida, postre,precio);
    }
}

class Light extends Menu {
    constructor(primero, segundo, bebida, postre,precio) {
        super(primero, segundo, bebida, postre,precio);
    }
}

class Carnivoro extends Menu {
    constructor(primero, segundo, bebida, postre,precio) {
        super(primero, segundo, bebida, postre,precio);
    }
}


const vegetariano1= new Vegetariano('lechuga','pan','agua con gas','cesped',150);
const light= new Light('pavo','arroz','cola light','yogur agrio',50);
const carnivoro1= new Carnivoro('hamburguesa','morcilla','cerveza','panceta',20);

console.log(vegetariano1.preciof());
console.log(light.preciof());
console.log(carnivoro1.preciof());

console.log(vegetariano1.updatePrice(30));