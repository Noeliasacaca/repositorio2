do{
   pass= prompt( "introdusca su usuario, para iniciar sesión")
}while (pass !="Maria36")
 
let savedPass = "amarillo";
for (let i = 0; i < 5; i++) {
    let userPass = prompt("Ingresá tu contraseña");
    if (savedPass === userPass) {
        alert("sesión iniciada con exito");
        break;
    }
}
alert("bienvenido/a :)");