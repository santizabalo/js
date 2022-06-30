const nombre = prompt("ingrese su nombre")
let precio = 0

alert("hola " + nombre + " bienvenido a OMEGA")

let comida= prompt("ingrese su gusto en la comida (opcion 1 = vegetariano, opcion 2 = carne y pollo)")

while(comida != 1 && comida != 2) {
    alert("esa opcion no existe!")
    comida= prompt("ingrese su gusto en la comida (opcion 1 = vegetariano, opcion 2 = carne y pollo)")
}

if( comida == 1){
    precio = 450
} else {
    precio = 500
}

alert("el precio de la vianda es " + precio)

let paquete = prompt("cuantas queres?")

while (paquete < 10){
    alert("lo sentimos, el pedido mimino es de 10 viandas")
    paquete = prompt("cuantas queres?")

}


alert("su pedido es de" + paquete + "y el precio sera de " + paquete * precio)



