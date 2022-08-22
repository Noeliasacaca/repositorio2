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
    todoProducto = document.querySelector('.nuestrosProductos'),
    toggles = document.querySelectorAll('.toggles');


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


let nusuarioNombre = document.getElementById('usuarioNombre');
let nuevoNombre = prompt('Ingresá tu nombre, para inicias sesion');
usuarioNombre.innerText=nuevoNombre; 


/* ------------------------------todo los productos-------------------------------- */
const catalogo = [{
    id: 1,
    nombre: 'Cenicero con diseño de corazón',
    codigo: '123',
    precio: 1000,
    imagen: 'img/ceniceroformadecorazon.jpg',
    descripcion_corta: 'cenicero corazon',
}, {
    id: 2,
    nombre: 'cenicero con forma de huevo',
    codigo: '1223',
    precio: 1200,
    imagen: 'img/ceniceroformadehuevo.jpg',
    descripcion_corta: 'cenicero huevo',
},{id: 3,
    nombre: 'MACETA CON DISEÑO DE FUTILLA',
    codigo: '533212656',
    precio: 2500,
    imagen: 'img/macetasformadefrutilla.jpg',
    descripcion_corta: 'maceta frutilla',
},{id: 4,
    nombre: 'SAHUMERIO CON FORMA DE HONGO',
    codigo: '5324452656',
    precio: 1250,
    imagen: 'img/saumeriocnforadehongo.jpg',
    descripcion_corta: 'sahumerio hongo',
},{
    id: 5,
    nombre: 'cenicero con forma de gatito',
    codigo: '948348',
    precio: 1500,
    imagen: 'img/cenicerogatito.jpg',
    descripcion_corta: 'cenicero gatito',
},
{
    id: 6,
    nombre: 'cenicero con dideño del yin y yang',
    codigo: '037292',
    precio: 1200,
    imagen: 'img/ceniceroyinyyang.jpg',
    descripcion_corta: 'cenicero yinyyang',
},
{
    id: 7,
    nombre: 'cenicero con franajs rojas',
    codigo: '93854',
    precio: 1200,
    imagen: 'img/ceniceroconfranjasrojas.jpg',
    descripcion_corta: 'cenicero franjas rojas',
}];

function todoLosProductos(array) {
    todoProducto.innerHTML = '';
    array.forEach(element =>{
        let html = `<h4 class="card-header">${element.nombre}</h4>
        <img src="${element.imagen}" class="card-img-top imagenProducto" alt="${element.descripcion_corta}">
        <div class="card-body">
            <span id="precio">$ ${element.precio}</span>
        </div>
        <div class="card-footer"><a href="#" class="btn btn-primary">Comprar</a></div>>`;
        todoProducto.innerHTML += html;
    });
} 

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

botonIniciar.addEventListener('click', (e) => {e.preventDefault();

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

estaLogueado(recuperarUsuario(localStorage));



/* agregando eventos */

caja.onmouseover = () => {
    caja.style.backgroundImage = 'url("img/anuncio1.jpg")';
    console.log('Estados Unidos');
}
caja.onmouseout = () => {
    caja.style.backgroundImage = 'url("img/anuncio2.png")';
    console.log('Australia');
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

