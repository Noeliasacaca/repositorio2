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
        let ingresar = prompt("Ingresá tu contraseña ");
        if (ingresar === contraseña) {
            alert("sesión iniciada con exito")
            alert("Gracias por elegir nuestra tienda <3")
            alert("bienvenido/a :)");
            ingresar = true;
            break;
        } else {
            alert("Contraseña incorrecta, intentelo de nuevo. Te quedan " + i + "intentos.");

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

alert("gracias por elegirnos")



class ceramica {

    constructor(producto, precio, stock) {
        this.producto = producto;
        this.precio = parseInt(precio);
        this.stock = stock;
    }

    asignarproductos(array) {
        this.producto = array.length;
    }

}

const ceramicas = [
    new ceramica("taza con diseño de sandia", 1300, 'con stock'),
    new ceramica("cenicero con diseño de corazón", 1000, 'con stock'),
    new ceramica("tetera con forma de gatito", 2100, 'sin stok'),
    new ceramica("porta sahumerio con forma de hoja", 1500, 'con stock'),
    new ceramica("maceta con forma de frutilla", 1800, 'con stock'),
    new ceramica("cenicero franjas Rojas", 1200, 'con stock'),
    new ceramica("cenicero con forma de huevo", 1700, 'con stock'),
    new ceramica("porta sahumerio con forma de hongo", 1600, 'con stock'),
    new ceramica("tetera con forma de caracol", 2300, 'con stock'),
    new ceramica("taza diseño con cuadros", 900, 'sin stock'),
    new ceramica("tetera forma de pera", 2400, 'sin stock'),
    new ceramica("velero Forma De Hongo", 1100, 'con stock'),
    new ceramica("velero calavera", 1300, 'con stock')
]

console.log(ceramicas);


let productoElegido = prompt('Escribí el nombre  del producto que buscas');

const filtrado = ceramicas.filter((ceramica) => ceramica.producto.toLowerCase().includes(productoElegido.toLowerCase()))

if (filtrado.length == 0) {
    alert('Lo sentimos. No encontramos coincidencias en nuestro catálogo');
} else {
    const imprimible = filtrado.map((ceramica) => ceramica.producto);
    alert('Los productos de nuestro catálogo, que coinciden parcial o totalmente con esta búsqueda, son:\n- ' + imprimible.join('\n- '));
}
 */

let nombreDeUsuario = document.getElementById('nombreDeUsuario');
let nuevoNombre = prompt('Ingresá tu nombre, para inicias sesion');
nombreUsuario.innerText=nuevoNombre;


let product ={
    id: 1,
    nombre: 'Cenicero con diseño de corazón',
    codigo: '123',
    precio: 1000,
    imagen: 'img/ceniceroformadecorazon.jpg',
    descripcion_corta: 'cenicero corazon',
    descripcion: 'ceramicas artesanales'
}

let productoss = document.querySelector('.productoss');

    let tarjeta = document.createElement('div');
    tarjeta.className = 'card my-2 bg-light';
    tarjeta.id = `${product.id}`;
    tarjeta.innerHTML = `
    <h2 class="card-header">${product.nombre}</h2>
    <img src="${product.imagen}" class="card-img-top imagenProducto" alt="${product.descripcion_corta}">
    <div class="card-body">
        <span id="precio">$ ${product.precio}</span>
    </div>
    <div class="card-footer"><a href="#" class="btn btn-primary">Comprar</a></div>`;
    productoss.append(tarjeta)