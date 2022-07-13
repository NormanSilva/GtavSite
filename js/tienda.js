class Producto{
    constructor(id, nombre, precio, cantidad) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }   
};

const almacen = [];

// const cargarBD = async () =>{
//     const baseDeDatos = await fetch('/db.json')
//     const datos = await baseDeDatos.json();
//     datos.forEach(element=>{
//         almacen.push(element)
//     })
// };
// cargarBD();

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
            rellenarCarrito();
            carritoclickeado = true;
            break;
        case true:
            lista.style.display = "none";
            carritoclickeado = false;
            break;
    }
});


//Array de carrito, donde se almacenan todos los productos seleccionados
//funcion de agregar o aumentar el carrito con objetos
let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];
function añadirAlCarrito(parametro) {       
    if (carrito.some(element => element.id == parametro)) {
        carrito.find(element => element.id == parametro).cantidad++;                
                
    } else {
        let prdt = almacen.find(element => element.id == parametro);              
        prdt.cantidad++;
        carrito.push(prdt);
    }        
};


//Función Mostrar el Total a Pagar
function calcularPrecioFinal (){
    precioFinal = 0;
    carrito.forEach(element=>{
        precioFinal += element.precio * element.cantidad;
    })
};


//Seleccionando productos al carrito de compra
const agregar = document.getElementsByClassName("btnAgregar");

let btnPagar = true;
let precioFinal = 0;

const rellenarCarrito = () =>{
    lista.innerHTML = `
        <div>
            <p class="tituloPedidos"> Tus Pedidos </p>
        </div>
        <div class="contenedor-carrito"></div>`;

    const carritoContenedor = document.querySelector(".contenedor-carrito");

    carritoContenedor.innerHTML = "";

    carrito.forEach(element => {
        
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
                <button id="borrar-${element.id}" class="icon-delete">
                    <span class="material-symbols-outlined borrar-icon">delete</span>
                </button>
            </div>
            <hr>`;             
    });
    
    calcularPrecioFinal();

    lista.innerHTML += `
    <div class="carrito-total-a-pagar">
        <h4>Total a Pagar: ${precioFinal}</h4>
    </div>
    <button class ="btnComprar"><a href="../pages/pago.html"> Comprar </a></button>`;

    //borrando productos
    carrito.forEach(element=>{
        document.querySelector(`#borrar-${element.id}`)
        .addEventListener("click",()=>{
            carrito = carrito.filter((prdt) => prdt.id !== element.id);
            rellenarCarrito();

            sessionStorage.removeItem('carrito');
            sessionStorage.setItem(`carrito`, JSON.stringify(carrito));
        });
    });
};

//Define que al dar click a uno de los botones de cada objeto de la tienda se agrege al carrito
for(let i=0; i<almacen.length; i++){ 
    agregar[i].addEventListener("click", ()=>{
        //Se hace la verificacion de si existe o no ya previamente al carrito y lo agrega o le aumenta la cantidad  
        añadirAlCarrito(almacen[i].id);           
            rellenarCarrito();
            sessionStorage.removeItem('carrito');
            sessionStorage.setItem(`carrito`, JSON.stringify(carrito));
    });
 };