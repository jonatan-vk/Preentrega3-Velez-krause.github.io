/* fetch("https://jsonplaceholder.typicode.com/users/1/posts")
.then((resp) => resp.json())
.then((data) => console.log(data)) */

/* const lista = document.querySelector("#listado")

fetch("/data.json")
.then((resp) => resp.json())
.then((data) => {
    data.forEach((producto) => {
        const li = document.createElement("div");
        li.innerHTML= `
            <div class="card mb-3" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Disponibilidad:${producto.texto}</p>
                <p class="card-price">Precio: S${producto.precio}</p>
                <a href="#" class="bPrueba btn btn-primary data-id=1">Comprar</a>
                </div>
            </div>
        `;
        lista.append(li);
    }
)}) */


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

    
const btnComprar = document.querySelectorAll(".card");
btnComprar.forEach((btnComprar)=>{ 
   /*  btnComprar.addEventListener('click', () => {
        // Obtener la información del producto
        const infoProducto = {
            titulo: producto.querySelector(".card-title").textContent,
            texto: producto.querySelector(".card-text").textContent,
            precio: producto.querySelector(".card-price").textContent,
            id : producto.querySelector(".btn").getAttribute("data-id"),
        };
        // Agregar el producto al array
        productosCarrito = [...productosCarrito, infoProducto];
        // Guardar el array de productos en el Local Storage
        localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito));
        // Mostrar los productos en el carrito
        carritoHtml();
    })}); */
      btnComprar.addEventListener("click" , (e)=>{
        chequearPruducto(e.target.parentElement)
    })
})


    // Array vacio para productos

    let productosCarrito = []
    
    function chequearPruducto(producto) {
        const infoProducto = {
            titulo: producto.querySelector(".card-title").textContent,
            texto: producto.querySelector(".card-text").textContent,
            precio: producto.querySelector(".card-price").textContent,
            id : producto.querySelector(".btn").getAttribute("data-id"),
        };
        
        
        
        //agrega productos al carrito 
        productosCarrito = [...productosCarrito, infoProducto];
        carritoHtml();
       
        localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito));
    }
    
    //para que no se repitan los productos cada vez que selecciono "comprar"
    
    
    //mostrar los productos en el carrito
    
    
    const carrito = document.querySelector("#carrito");
    
    function carritoHtml() {

        if (productoAgregado) {
            Toast.fire({
              icon: 'success',
              title: 'Producto agregado al carrito!'
            })
          }

        limpiarHtml();
        productosCarrito.forEach((producto)=> {
            
            const agregado = document.createElement("p");
            agregado.innerHTML =  `
            <div class="container">
            <h5>${producto.titulo}</h5>
            <p>${producto.texto}</p>
            <P>${producto.precio}<p>
            <button class="btn btn-danger" id="${producto.id}">Eliminar</button>
            </div>
            `;
            carrito.appendChild(agregado);
        });
        //eliminar productos del carrito 
        let botonesEliminar = document.querySelectorAll(".btn-danger");
        botonesEliminar.forEach((btn) => {
            btn.addEventListener("click" , eliminarProducto)
        });
        //calcular el total 
        let precioTotal = 0;
        productosCarrito.forEach((producto) => {
            precioTotal += parseFloat(producto.precio);
        });
        
        //pintar el total
        let total = document.querySelector("#total");
        if (total) { 
            total.innerHTML = `
            <div class="container">
            <h3>Total: $${precioTotal}</h3>
            <button class="btn btn-success">Confirmar compra!</button>
            </div>
            `;
        }
        
        
    } 
    function vaciarCarrito(){
        productosCarrito = [];
        localStorage.removeItem("productosCarrito");
    }
    

    let confirmarCompra = document.querySelectorAll(".btn-success");
        confirmarCompra.forEach((btn) => {
            btn.addEventListener("click" , vaciarCarrito)
        });
        //console.log(confirmarCompra)

    
    // cdn de swet alert
    const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
}
    })

    let productoAgregado = true;
 /*    if (productoAgregado) { 
    Toast.fire({
        icon: 'success',
        title: 'Producto agregado al carrito'
    })
}
     */
    
    
    
    
    /* const total = productosCarrito.reduce((acumulador, elemento) => {  acumulador + elemento.precio}, 0); */
    
    /*  let precioTotal = 0;
    productosCarrito.forEach((producto) => {
        precioTotal += parse })
        
        console.log(precioTotal) */
        
        
        
        /* 
        function totalhtml() {
            //limpiarHtml();
            productosCarrito.forEach((producto) => {
                const totalPintar = document.createElement("p");
                totalPintar.innerHTML = `
                <div class="container">
                <h3>Total $</h5>
                <h3>${producto.precio}</h5>
                </div>
                `;
                total.appendChild(totalPintar);
            })
        } */
        
        

        function eliminarProducto(e) {
            console.log(e);
            console.log(e.target.id);
            
            let id = e.target.id;
            let indiceProducto;
            
            productosCarrito.forEach((producto, index) => {
                if(producto.id === id) {
                    indiceProducto = index;
                }
            });
            
productosCarrito.splice(indiceProducto,1);
carritoHtml();
   

/* let index = productosCarrito.indexOf(e.target)
if (botonesEliminar != -1) {
    botonesEliminar.splice(index, 1)
} */
}  


function limpiarHtml() {
    carrito.innerHTML = "";
}



// esta linea esta suelta y no la entiendo  
// carrito.addEventListener("click", eliminarProducto);




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







// Eliminar productos del carrito


/* function eliminarProducto(e) {
    if (e.target.classList.contains("btn-danger")) {
        let productoID = e.target.getAttribute("id");
        productosCarrito = productosCarrito.filter(
            (producto) => producto.id !== productoID
            );
            carritoHtml();
        }
    } */
    
    
    /* function cargarjson () {
        if (productosCarrito != "") {
            const enJson = JSON.stringify(productosCarrito);
            localStorage.setItem("Productos", enJson)
        }
    }
    cargarjson();  
    */
   
   /*  const enJson = JSON.stringify(productosCarrito);
   
   localStorage.setItem("productosCarrito" , enJson)
   */
  
  
  /*  localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito)); */
  
  /* const aJson = JSON.stringify(productosCarrito)
  
  localStorage.setItem("producto", aJson)
  
  const obtenerProducto = JSON.parse(localStorage.getItem("product")) */
  
  let productosCarritoLocalStorage = JSON.parse(localStorage.getItem("productosCarrito"));
  if(productosCarritoLocalStorage) {
      productosCarrito = productosCarritoLocalStorage;
      carritoHtml();
  } 
  
  
  
  
 /*  
// Aquí agregarías el código
let productoAgregado = true;

function carritoHtml() {
  // Aquí va el código que pinta el HTML con el producto recién agregado
  
  if (productoAgregado) {
    Toast.fire({
      icon: 'success',
      title: 'Producto agregado al carrito!'
    })
  }

  limpiarHtml();
        productosCarrito.forEach((producto)=> {
            
            const agregado = document.createElement("p");
            agregado.innerHTML =  `
            <div class="container">
            <h5>${producto.titulo}</h5>
            <p>${producto.texto}</p>
            <P>${producto.precio}<p>
            <button class="btn btn-danger" id="${producto.id}">Eliminar</button>
            </div>
            `;
            carrito.appendChild(agregado);
        });
        //eliminar productos del carrito 
        let botonesEliminar = document.querySelectorAll(".btn-danger");
        botonesEliminar.forEach((btn) => {
            btn.addEventListener("click" , eliminarProducto)
        });
        //calcular el total 
        let precioTotal = 0;
        productosCarrito.forEach((producto) => {
            precioTotal += parseFloat(producto.precio);
        });
        
        //pintar el total
        let total = document.querySelector("#total");
        if (total) { 
            total.innerHTML = `
            <div class="container">
            <h3>Total: $${precioTotal}</h3>
            <button class="btn btn-success">Confirmar compra!</button>
            </div>`
        }
    }
 */