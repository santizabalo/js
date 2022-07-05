
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

let paquete = prompt("cuantas queres? (minimo 10)")

while (paquete < 10){
    alert("lo sentimos, el pedido mimino es de 10 viandas")
    paquete = prompt("cuantas queres?")

}


alert("su pedido es de" + paquete + "y el precio sera de " + paquete * precio)

const productos = [
    {
        id: 1, 
        nombre: "guiso de lentejas",
        detalle: "",
        precio: 450,
        stock: 100,
        img: "",
    },
    {
        id: 2, 
        nombre: "sopa paraguaya",
        detalle: "",
        precio: 450,
        stock: 100,
        img: "",
    },
    {
        id: 3, 
        nombre: "lasagna de carne",
        detalle: "",
        precio: 500,
        stock: 200,
        img: "",
    },
    {
        id: 4, 
        nombre: "canelones de pollo",
        detalle: "",
        precio: 500,
        stock: 200,
        img: "",
    }
]

let formadepago =prompt("Cual es tu forma de pago? 1)Efectivo/2)Tarjeta")
if (formadepago == "1") {
    preciofinal = (paquete * precio) * 0.90

}
else {
    preciofinal = (paquete * precio) * 1.15
}
    alert("El precio total es de "+ preciofinal)