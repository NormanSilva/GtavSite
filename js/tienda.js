/* TAREA PASADA */
// function ingresoDatos(mensaje) {
//     let dato = prompt(mensaje);
//     console.log(dato);
//     return dato;
// }

// let usuario = ingresoDatos ("Ingresa tu nombre de usuario")
// let contrasena = ingresoDatos ("Ingresa tu contraseña");

// alert("Bienvenido " + usuario + ", estás en la tienda de GTA V");

// let producto
// let cantidad
// function eleccionProducto(){
//     producto = parseInt( prompt("Elige el producto que desea comprar en nuestra tienda: \n 1. Gorra Rockstar s/.50 \n 2. Camiseta roja Rockstar s/.70 \n 3. Mechero RDR2 s/.120"))
//     cantidad = parseInt( prompt("Que cantidad desea llevar?"))

// }
 
// eleccionProducto();

// switch (producto) {
//     case 1:
//         producto = 50;
//         break
//     case 2:
//         producto = 70;
//         break
//     case 3:
//         producto = 120;
//         break
// }
// let resultado = cantidad * producto
// alert ("Tu monto a pagar es s/. " + resultado)

function Producto(id, nombre, precio){
    this.id = id
    this.nombre = nombre
    this.precio = precio
}

const productos = []
productos.push ({ id:1, nombre:"T-shirt Rockstar Negro", precio:50 })
productos.push({ id:2, nombre:"T-shirt Rockstar Gris", precio:50 })
productos.push ({ id:3, nombre:"T-shirt Rockstar Rojo", precio:50 })
productos.push({ id:4, nombre:"T-shirt KIFFLOM", precio:50 })
productos.push ({ id:5, nombre:"Sudadera Rockstar Games", precio:120 })
productos.push({ id:6, nombre:"Gorra Rockstar Games", precio:80 })
productos.push({ id:7, nombre:"Vaso de chupitos RDR2", precio:120 })
productos.push({ id:8, nombre:"Mechero Zippo RDR2", precio:80 })
productos.push({ id:9, nombre:"Tomatodo Sprunk", precio:80 })



// alert("Bienvenido a la tienda de GTA V")


const lista = document.querySelector(".ventana");
const carrito = document.querySelector(".submenu");

// carrito.addEventListener("click", () => {
//     lista.style.display = "flex";
//     // lista.innerHTML = `<p class= "tituloPeedidos" > Tus Pedidos </p>`
//     console.log("funciona")
// })

let carritoclickeado = false;
carrito.addEventListener("click", () => {
    switch (carritoclickeado) {
        case false:
            lista.style.display = "flex";
            carritoclickeado = true;
            break;
        case true:
            lista.style.display = "none";
            carritoclickeado = false;
            break;
    }
});





const agregar = document.getElementsByClassName("btnAgregar"); /*Esto contiene todo mis elementos del html que tienen clase "btnAgregar" */
agregar.addEventListener("click", ()=>{
    //funcion que agrege al carrito
    
})




console.log(agregar)











