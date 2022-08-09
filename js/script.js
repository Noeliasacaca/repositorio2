let nombreDeUsuario = document.getElementById('nombreDeUsuario');
let nuevoNombre = prompt('Ingresá tu nombre, para inicias sesion');
nombreUsuario.innerText=nuevoNombre;
//--------------------------------------------cambia imagen-------------------------------------------
const imgCeramica = document.getElementById('imagenOp');


const ceniceros = [{
    id: 1,
    nombre: 'canicero',
    color: 'gatito',
    imagen: 'img/ceniceroyinyyang.jpg'
}, {
    id: 2,
    nombre: 'canicero',
    color: 'franjas',
    imagen: 'img/ceniceroconfranjasrojas.jpg'
}, {
    id: 3,
    nombre: 'canicero',
    color: 'corazon',
    imagen: 'img/ceniceroformadecorazon.jpg'
}, {
    id: 4,
    nombre: 'canicero',
    color: 'huevo',
    imagen: 'img/ceniceroformadehuevo.jpg'
}]



let radios = document.querySelectorAll('input[type="radio"]')
console.log(radios);


function imagenOp(elemento, source){
    elemento.src = source;
}
radios.forEach(item => {
    item.addEventListener('click', () => {
        let ceniceroSelec = item.value;
        let variante = ceniceros.find((cenicero) => cenicero.
        ceni == ceniceroSelec);
        imagenOp(imgCeramica, variante.imagen);
    })
})

//------------------------------------------- catalogo-------------------------------------------------------------------
let todoProducto = document.querySelector('.nuestrosProductos');

let catalogo = [{
    id: 1,
    nombre: 'Cenicero con diseño de corazón',
    codigo: '123',
    precio: 1000,
    imagen: 'img/ceniceroformadecorazon.jpg',
    descripcion_corta: 'cenicero corazon',
    descripcion: 'ceramicas artesanales'
}, {
    id: 2,
    nombre: 'cenicero con forma de huevo',
    codigo: '1223',
    precio: 1200,
    imagen: 'img/ceniceroformadehuevo.jpg',
    descripcion_corta: 'cenicero huevo',
    descripcion: 'ceramicas artesanales'
},{id: 3,
    nombre: 'MACETA CON DISEÑO DE FUTILLA',
    codigo: '533212656',
    precio: 2500,
    imagen: 'img/macetasformadefrutilla.jpg',
    descripcion_corta: 'maceta frutilla',
    descripcion: 'ceramicas artesanales'
},{id: 4,
    nombre: 'SAHUMERIO CON FORMA DE HONGO',
    codigo: '5324452656',
    precio: 1250,
    imagen: 'img/saumeriocnforadehongo.jpg',
    descripcion_corta: 'sahumerio hongo',
    descripcion: 'ceramicas artesanales'
}];


function tarjetaProductos(array, contenedor) {
    contenedor.innerHTML = '';
    for (const item of array) {
        let tarjeta = document.createElement('div');
        tarjeta.className = 'card my-5 bg-light';
        tarjeta.id = `${item.id}`;
        tarjeta.innerHTML = `
        <h4 class="card-header">${item.nombre}</h4>
        <img src="${item.imagen}" class="card-img-top imagenProducto" alt="${item.descripcion_corta}">
        <div class="card-body">
            <p class="card-text">${item.descripcion}</p>
            <span id="precio">$ ${item.precio}</span>
        </div>
        <div class="card-footer"><a href="#" class="btn btn-primary">Comprar</a></div>`;
        contenedor.append(tarjeta)
    }
}
function buscar(array, buscador, input) {
    return array.filter((item) => item[buscador].includes(input))
}
tarjetaProductos(catalogo, todoProducto);
