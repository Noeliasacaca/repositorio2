/* let usuario = "maria36";

function login() {
    let ingresar = false;

    for (let i = 2; i >= 0; i--) {
        let sesion = prompt("introdusca su usuario, para iniciar sesión ");
        if (sesion === usuario) {
            alert("HOLA Maria36 :)");
            ingresar = true;
            break;
        } else {
            alert("Nombre de usuria no encontrado, por favor intentelo nuevamente. Te quedan " + i + " intentos.")
        }
    }

let contraseña = "amarillo";

    for (let i = 2; i >= 0; i--) {
        let ingresar = prompt( "Ingresá tu contraseña ");
        if (ingresar === contraseña) {
            alert("sesión iniciada con exito")
            alert("Gracias por elegir nuestra tienda <3")
            alert("bienvenido/a :)");
            ingresar = true;
            break;
        } else {
            alert("Contraseña incorrecta, intentelo de nuevo. Te quedan "  + i +  "intentos.");
            
        }
    }

    return ingresar;
}

if (login()) {

    let productos = prompt("Elegí el en producto que desea comprar : \n1- Juego de tazas con figuras de fresas de $2.000 \n2 - Tetera de porcelada con forma de caracol  de $1.500 \n3 - Cenicero diseño de gatito de $1.000 \nPresioná X para finalizar.");

    while (productos != "X" && productos != "x") {
        switch (productos) {
            case '1':
                alert("tu compra fue Juego de tazas con figuras de fresas de $2.000.")
                break;
            case '2':
                alert("tu compra fue Tetera de porcelada con forma de caracol  de $1.500 .")
               break;
            case '3':
                alert("tu compra fue Cenicero diseño de gatito de $1.000.")
                break;

        }
        productos = prompt("Elegí el en producto que desea comprar : \n1- Juego de tazas con figuras de fresas de $2.000 \n2 - Tetera de porcelada con forma de caracol  de $1.500 \n3 - Cenicero diseño de gatito de $1.000 \nPresioná X para finalizar.");
    }
}


alert ("gracias por elegisnos") */



class ceramica {

    constructor(producto, precio, stock,  id) {
        this.producto = producto;
        this.precio = parseInt(precio);
        this.stock = stock;
        this.id = id;
    }

    asignarId(array) {
        this.id = array.length;
    }

}

const ceramicas = [
    new ceramica("taza con diseño de sandia", 1300, 'con stok', 1),
    new ceramica("cenicero con diseño de corazón", 1000, 'con stok', 3),
    new ceramica("tetera con forma de gatito", 2100, 'sin stok', 4),
    new ceramica("sahumerio con forma de hoja", 1500, 'con stok', 5),
    new ceramica("maceta con forma de frutilla", 1800, 'con stok', 6)
]

console.log(ceramicas);

let categoria = prompt('Elegí lo que buscas:\n1 - productos (A a Z) \n2 - productos (Z a A) \n3 - precio');

function ordenar(categoria, array) {
    let arrayOrdenado = array.slice(0);


    switch (categoria) {
        case '1':
            let deMenoraMayor = arrayOrdenado.sort((a,b)=>a.producto.localeCompare(b.producto));
            return deMenoraMayor;
        case '2':
            let deMayoraMenor = arrayOrdenados.sort((a, b) => b.producto.localeCompare(a.producto));
            return deMayoraMenor;
        case '3':
            return arrayOrdenado.sort((a, b) => b.precio - a.precio);
        default:
            alert('error');
            break;
    }
}
function buscador(array){
    let info = '';

    array.forEach(elemento=>{
        info += 'producto: ' + elemento.producto + '\nprecio: ' + elemento.precio + '\nstock: ' + elemento.stock + ' puntos.\n\n'
    })

    return info;
}

alert(buscador(ordenar(categoria,ceramicas))); 