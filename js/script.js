do{
   usuario= prompt( "introdusca su usuario, para iniciar sesión")
}while (usuario !="Maria36") 

let contraseña = "amarillo";
for (let i = 0; i < 5; i++) {
    let ingresar = prompt("Ingresá tu contraseña");
    if (contraseña === ingresar) {
        alert("sesión iniciada con exito");
        break;
    }
}
alert("bienvenido/a :)");