class Producto{
    constructor(id, nombre, precio, cantidad) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }   
};

const almacen = []

almacen.push (new Producto(1, "T-shirt Rockstar Negro", 50, 0));
almacen.push(new Producto (2, "T-shirt Rockstar Gris", 50, 0));
almacen.push ( new Producto(3, "T-shirt Rockstar Rojo", 50, 0));
almacen.push(new Producto(4, "T-shirt KIFFLOM", 50, 0));
almacen.push (new Producto(5, "Sudadera Rockstar Games", 120, 0));
almacen.push(new Producto(6, "Gorra Rockstar Games", 80, 0));
almacen.push(new Producto(7, "Vaso de chupitos RDR2", 120, 0));
almacen.push(new Producto(8, "Mechero Zippo RDR2", 80, 0));
almacen.push(new Producto(9, "Tomatodo Sprunk", 80, 0));


// ===== DOM & EVENTOS ===
const lista = document.querySelector(".carrito");
const carritoIcon = document.querySelector(".carritoIcon");


// Evento dando click al carrito
let carritoclickeado = false;
carritoIcon.addEventListener("click", () => {
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

//Función agregar productos al carrito
let carrito = [];

function añadirAlCarrito(parametro) {
          
            if (carrito.some(element => element.id == parametro)) {
                carrito.find(element => element.id == parametro).cantidad++;                
                
            
            } else {
                let prdt = almacen.find(element => element.id == parametro);              
                prdt.cantidad++;
                carrito.push(prdt);
            }        
} 

function calcularPrecioFinal (){
    precioFinal = 0;
    carrito.forEach(element=>{
        precioFinal += element.precio * element.cantidad;
    })
}
//Seleccionando productos al carrito de compra
const agregar = document.getElementsByClassName("btnAgregar");

let btnPagar = true;
let precioFinal = 0;

 for(let i=0; i<almacen.length; i++){
     agregar[i].addEventListener("click", ()=>{
        añadirAlCarrito(almacen[i].id);
            lista.innerHTML = `
                <div>
                    <p class="tituloPedidos"> Tus Pedidos </p>
                </div>
                <div class="contenedor-carrito">

                </div>`;
                const carritoContenedor = document.querySelector(".contenedor-carrito");

            carrito.forEach(element => {
                //Y esto agrega cada producto del carrito a continuación y sin pisar el título.
                carritoContenedor.innerHTML += `
                <div class="productoElegido">
                        <div class="nameCarrito">
                            <p> ${element.nombre} </p>
                        </div>
                        <div class="cantidad">
                            <p> (${element.cantidad}) </p>
                        </div>
                        <div class="precioCarrito">
                            <p> s/.${element.precio * element.cantidad}  </p>
                        </div>
                        <div>
                            <button id="delete-${element.id}" class="icon-delete"><span class="material-symbols-outlined borrar-icon">delete</span></button>
                        </div>
                </div>
                <hr>`;
            });
            
            

            
            
            calcularPrecioFinal();
            lista.innerHTML += `
            <div class="carrito-total-a-pagar">
                <h4>Total a Pagar: ${precioFinal}</h4>
            </div>
            <button class ="btnComprar"><a href="../pages/pago.html"> Comprar </a></button>`; 


       sessionStorage.setItem(`carrito`, JSON.stringify(carrito));
     });
 };

 const deleteIcon = document.getElementsByClassName("icon-delete");

 deleteIcon.forEach(button=>{
    button
 })
            
