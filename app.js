
   let nombreUsuario = document.querySelector("#exampleInputEmail1");
   let contraseña = document.querySelector("#exampleInputPassword");

   nombreUsuario.addEventListener("input" ,function () {
     console.log(nombreUsuario.value);
     if (nombreUsuario.value === "") {
        alert ( "ingrese un usuario valido")
     }
   }
 )

 /* Respuesta de registro del formulario  */

 let formulario = document.querySelector("#formulario");

 let info = document.querySelector(".info");

 const pintarinfo = formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    info.innerHTML = `
    <div class="alert alert-warning" role="alert">
    <h4> ¡Gracias ${nombreUsuario.value} por registrarse! </h4></div>
    `;
 });

/* Agregar productos y mostrarlos en el carrito    */


 const cards = document.querySelectorAll(".card");
 cards.forEach((card)=>{
     card.addEventListener("click" , (e)=>{
         chequearPruducto(e.target.parentElement)
        })
    })
 
        /* Array vacio para productos */

let productosCarrito = []

function chequearPruducto(producto) {
    const infoProducto = {
        titulo: producto.querySelector(".card-title").textContent,
        texto: producto.querySelector(".card-text").textContent,
        id : producto.querySelector(".btn").getAttribute("data-id"),
    };
    /*console.log(infoProducto); */
    
    productosCarrito = [...productosCarrito, infoProducto];
    carritoHtml();
}

//para que no se repitan los productos cada vez que selecciono "comprar"

function limpiarHtml() {
    carrito.innerHTML = "";
}

//mostrar los productos en el carrito


const carrito = document.querySelector("#carrito");

function carritoHtml() {
    limpiarHtml();
    productosCarrito.forEach((producto)=> {
        
        const agregado = document.createElement("p");
        agregado.innerHTML =  `
        <div class="container">
        <h5>${producto.titulo}</h5>
        <p>${producto.texto}</p>
        <button class="btn btn-danger" id="${producto.id}">Eliminar</button>
        </div>
        `;
        carrito.appendChild(agregado);
    });
}



const limpiarCarrito = document.querySelectorAll("#prueba");
limpiarCarrito.forEach((prueba)=>{
    btn.addEventListener("click" , (e)=>{
        filtrarDelete()
       })
   })

function filtrarDelete () {
    productosCarrito.filter(productosCarrito => titulo.texto != limpiarCarrito)
}
 /* const baratos = productos.filter(producto => producto.precio < 100) */

 
 
 // esta linea esta suelta y no la entiendo  
  carrito.addEventListener("click", eliminarProducto);
 
 
 
 
 // Eliminar productos del carrito
 
 function eliminarProducto(e) {
     if (e.target.classList.contains("btn-danger")) {
         let productoID = e.target.getAttribute("id");
         productosCarrito = productosCarrito.filter(
             (producto) => producto.id !== productoID
             );
             carritoHtml();
            }
        }
        



 /* const aJson = JSON.stringify(productosCarrito)

 localStorage.setItem("producto", aJson)

 const obtenerProducto = JSON.parse(localStorage.getItem("product")) */
 

 



