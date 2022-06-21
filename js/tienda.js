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
            // carrito = JSON.parse(sessionStorage.getItem("carrito"));

            // carrito.forEach(element => {
            //     lista.innerHTML += `
            //     <div class="productoElegido">
            //          <div>
            //             <p class="nameCarrito"> ${element.nombre} </p>
            //          </div>
            //          <div>
            //             <p class="precioCarrito"> s/.${element.precio} </p>
            //          </div>
            //          <div>
            //             <p class="cantidad"> cantidad: ${element.cantidad} </p>
            //     </div>`;
            // })
            
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

//Seleccionando productos al carrito de compra
const agregar = document.getElementsByClassName("btnAgregar"); 
console.log(agregar)

let btnPagar = true;
let precioFinal;
let carritoRed;

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
                </div>
                <hr>`;
            });

            carritoRed = [...carrito];

            (carrito.length <= 1) ? precioFinal = carrito[0].precio * carrito[0].cantidad : precioFinal = carritoRed.reduce((a,b) => (a.precio * a.cantidad) + (b.precio * b.cantidad));

            lista.innerHTML += `
            <div class="carrito-total-a-pagar">
                <h4>Total a Pagar: ${precioFinal}</h4>
            </div>
            <button class ="btnComprar"><a href="../pages/pago.html"> Comprar </a></button>`; 


       sessionStorage.setItem(`carrito`, JSON.stringify(carrito));
     }) 
 };

/*class="comprar-carrito"*/ //clase del button
//  const btnComprar = docuemnt.querySelector(".comprar-carrito");
//  const divTarjeta = document.querySelector(".tarjeta");
//  const divAllCards = document.querySelector(".allCards");

//  btnComprar.addEventListener("click", () =>{
//     console.log("cambiar displays");
//     divTarjeta.style.display = "flex";
//     divAllCards.style.display = "none";
//  });

//  const btnFinalizarCompra = docuemnt.querySelector(".btn-finalizar-compra");

//  btnFinalizarCompra.addEventListener("click", ()=>{

//  });