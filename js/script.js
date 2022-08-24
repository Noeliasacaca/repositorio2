Swal.fire(
    {
        title: 'Te damos la bienvenida a nuestra tienda KUMO ',
        text: 'Por favor, ingrese su usuario para poder ver los productos',
        confirmButtonText: 'Gracias',
        position: 'top-center',
        width: 700,
        padding: '3em',
        color: '#716add',
        backdrop: `
            rgba(0,0,123,0.4)
            url("/img/colores.gif")
            left top
            no-repeat
        `
    }
)

/*  ----------------------------usuarios registrados---------------------- */
const usuarios = [{
    nombre: 'Joel',
    mail: 'joelnahu@gmail.com',
    pass: 'castaño'
},
{
    nombre: 'Dylan',
    mail: 'dylanaxel@gmail.com',
    pass: 'verdeagua'
},
{
    nombre: 'Miguelina',
    mail: 'miguelinanina@gmail.com',
    pass: 'lila'
}]


/* --------------------------elementos-------------------------------- */
const gmail = document.getElementById('gmail'),
    contraseña = document.getElementById('contraseña'),
    registro = document.getElementById('registro'),
    botonIniciar = document.getElementById('login'),
    modalEl = document.getElementById('modalLogin'),
    modal = new bootstrap.Modal(modalEl),
    imgCeramica = document.getElementById('imagenOp'),
    toggles = document.querySelectorAll('.toggles'),
    caja = document.querySelector('.anuncio'),
    fotoTeteras = document.getElementById('imgTeteras');



function guardarDatos(usuarioDB, storage) {
    const usuario = {
        'name': usuarioDB.nombre,
        'user': usuarioDB.mail,
        'pass': usuarioDB.pass
    }

    storage.setItem('usuario', JSON.stringify(usuario));
}

function borrarDatos() {
    localStorage.clear();
    sessionStorage.clear();
}

function recuperarUsuario(storage) {
    let usuarioEnStorage = JSON.parse(storage.getItem('usuario'));
    return usuarioEnStorage;
}

function saludar(usuario) {
    nombreUsuario.innerHTML = `Bienvenido/a, <span>${usuario.name}</span>`
}


/* let nusuarioNombre = document.getElementById('usuarioNombre');
let nuevoNombre = prompt('Ingresá tu nombre, para inicias sesion');
usuarioNombre.innerText=nuevoNombre;  */

/* /* ------------------------------ fin de todo los productos-------------------------------- */

function presentarInfo(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);
    });
}

function validarUsuario(usersDB, user, pass) {
    let encontrado = usersDB.find((userDB) => userDB.mail == user);
    if (typeof encontrado === 'undefined') {
        return false;
    } else {

        if (encontrado.pass != pass) {
            return false;
        } else {
            return encontrado;
        }
    }
}

botonIniciar.addEventListener('click', (e) => {
    e.preventDefault();

    if (!gmail.value || !contraseña.value) {
        alert('Todos los campos son requeridos');
    } else {
        let data = validarUsuario(usuarios, gmail.value, contraseña.value);
        if (!data) {
            alert(`Usuario y/o contraseña erróneos`);
        } else {
            if (registro.checked) {
                guardarDatos(data, localStorage);
                saludar(recuperarUsuario(localStorage));
            } else {
                guardarDatos(data, sessionStorage);
                saludar(recuperarUsuario(sessionStorage));
            }
            modal.hide();
            todoLosProductos(catalogo);
            presentarInfo(toggles, 'd-none');
        }
    }
});

btnLogout.addEventListener('click', () => {
    borrarDatos();
    presentarInfo(toggles, 'd-none');
});


/* agregando eventos */

caja.onmouseover = () => {
    caja.style.backgroundImage = 'url("img/anuncio1.jpg")';
    console.log('anuncio1');
}
caja.onmouseout = () => {
    caja.style.backgroundImage = 'url("img/anuncio2.png")';
    console.log('anuncio2');
}
// elige imagen

let radios = document.querySelectorAll('input[type="radio"]')
console.log(radios);

const botellas = [{
    id: 1,
    nombre: 'tetera forma de reloj',
    color: 'reloj',
    imagen: 'img/tetera reloj.jpg'
}, {
    id: 2,
    nombre: 'tetera forma de pera',
    color: 'pera',
    imagen: 'img/teterapera.jpg'
}, {
    id: 1,
    nombre: 'tetera forma tv',
    color: 'tv',
    imagen: 'img/teteratv.jpg'
}, {
    id: 1,
    nombre: 'tetera forma de gatito',
    color: 'gatito',
    imagen: 'img/teteradegatito.jpg'
}]

function cambiarImagen(elemento, source) {
    elemento.src = source
}

radios.forEach(item => {
    item.addEventListener('click', () => {
        let malo = item.value;
        let variante = botellas.find((botella) => botella.color == malo);
        cambiarImagen(fotoTeteras, variante.imagen);
    })
})

//agregando fetch

const contenedor = document.querySelector('#contenedorTarjetas');
const container = document.querySelector('#cardContainer');
const productooss = document.querySelector('#productoss');
const buscar = document.querySelector('#buscar');


function filtrarCategoriass(array) {
    let categoriass = productooss.value;
    if (!categoriass) {
        return array;
    } else {
        return array.filter((item) => item.CategoriasDeProduc == categoriass);
    }
}

function crearHTML(array) {
    contenedor.innerHTML = '';
    container.innerHTML = '';
    array.forEach((productos) => {
        const tarjeta = `
            <div class="col">
                <div class="card h-100">
                    <img src="${productos.imagen}" class="card-img-top" alt="${productos.descripcion_corta}">
                    <div class="card-body">
                        <h5 class="card-title">${productos.descripcion_corta}</h5>
                        <p class="card-text">Producto: ${productos.personaje}</p>
                        <p class="card-text">Categoria: ${productos.CategoriasDeProduc}</p>
                    </div>
                </div>
            </div>`;
        contenedor.innerHTML += tarjeta;
    })
}
function categoriaFilter(array) {
    let categoria = productooss.value;
    if (!categoria) {
        return array;
    } else {
        return array.filter((e) => e.categoria == categoria);
    }

}

function createHTML(array) {
    contenedor.innerHTML = ''
    container.innerHTML = ''
    array.forEach((productos) => {
        const card = `
            <div class="col">
                <div class="card h-100">
                    <img src="${productos.image}" class="card-img-top" alt="${productos.productos}">
                    <div class="card-body">
                        <h5 class="card-title">${productos.producto}</h5>  
                        <p class="card-text">$${productos.precio}</p>
                        <p class="card-text">Categoria: ${productos.categoria}</p>
                    </div>
                </div>
            </div>`
        container.innerHTML += card
    })
}

async function data() {
    const response = await fetch('./js/data.json');
    const data = await response.json();
    console.log(data);
    createHTML(categoriaFilter(data));
}

buscar.addEventListener('click', () => {
    data();
})



