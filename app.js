
   let nombreUsuario = document.querySelector("#exampleInputEmail1");
   let contraseña = document.querySelector("#exampleInputPassword");

   nombreUsuario.addEventListener("input" ,function () {
     console.log(nombreUsuario.value);
   }
 )

 
 const cards = document.querySelectorAll(".card");
 cards.forEach((card)=>{
     card.addEventListener("click" , (e)=>{
         chequearPruducto(e.target.parentElement)
        })
    })
    
let productosCarrito = []

function chequearPruducto(producto) {
    const infoProducto = {
        titulo: producto.querySelector(".card-title").textContent,
        texto: producto.querySelector(".card-text").textContent,
    };
    /*console.log(infoProducto); */
    
    productosCarrito = [...productosCarrito, infoProducto];
    carritoHtml();
}

const carrito = document.querySelector("#carrito");

function carritoHtml() {
    limpiarHtml();
    productosCarrito.forEach((producto)=> {
        const agregado = document.createElement("p");
        agregado.innerHTML =  `
        <div class="container">
        <h5>${producto.titulo}</h5>
        <p>${producto.texto}</p>
        <button class="btn btn-danger">Eliminar</button>
        </div>
        `;
        carrito.appendChild(agregado);
    });
}

function limpiarHtml() {
    carrito.innerHTML = "";
}



 const aJson = JSON.stringify(productosCarrito)

 localStorage.setItem("producto", aJson)

 const obtenerProducto = JSON.parse(localStorage.getItem("product"))

 



