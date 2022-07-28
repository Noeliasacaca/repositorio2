let usuario = "maria36";

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


alert ("gracias por elegisnos")
  
