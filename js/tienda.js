
let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');
const botonTerminar = document.getElementById('terminar')
const finCompra = document.getElementById('fin-compra')






mostrarProductos(productosTienda)

//mostrar producto
function mostrarProductos(){
    contenedorProductos.innerHTML = ""
    productosTienda.forEach(el=> {
        let div = document.createElement('div')
        div.className = 'products-present'
        div.innerHTML=  `<div class="section-prod container">
        <img src="${el.img}">
        <a id="boton ${el.codigo}" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
        <article class="description">
            <h2>${el.linea}</h2>
            <ul>
                <li>ID: ${el.codigo}</li>
                <li>Modelo: ${el.nombre} </li>
                <li>Precio: $${el.precio}</li>
            </ul>
        </article>
    </div>`
    
        contenedorProductos.appendChild(div)
        let btnAgregar = document.getElementById(`boton ${el.codigo}`)
        btnAgregar.addEventListener (`click`, ()=>{
          

            agregarAlCarrito(el.codigo)
        })
    })
   
}

//Agregar Al carrito

function agregarAlCarrito(codigo){
let productoAgregar = productosTienda.find(el=> el.codigo === codigo);
carritoDeCompras.push(productoAgregar)
mostrarCarrito(productoAgregar)
actualizarCarrito()
const carritoJS= JSON.stringify(carritoDeCompras)
localStorage.setItem(`carrito`, carritoJS);

}
  
 
 //Mostrar carrito

 function mostrarCarrito(productoAgregar) {
    let div = document.createElement('div')
        div.className = 'productoEnCarrito'
        div.innerHTML= `<p>Producto: ${productoAgregar.nombre}</p>
        <p>Precio: $${productoAgregar.precio}</p>
        <button id= eliminar ${productoAgregar.id}class="boton-eliminar"><i class="fas fa-trash-alt"></i></button> 
     </div>`    
    
 contenedorCarrito.appendChild(div)

 
}
 
 
 //actualizar carrito

 function  actualizarCarrito(){
    contadorCarrito.innerText= carritoDeCompras.length
    console.log(carritoDeCompras)
    precioTotal.innerText= carritoDeCompras.reduce((acc,el)=> acc+el.precio, 0)
        console.log(precioTotal)                                                        
 }
 
 //recuperar

 function recuperar() {
 const recuperarLS= JSON.parse(localStorage.getItem("carrito"));
 if(recuperarLS){
    for(const productoLS of recuperarLS){
    mostrarCarrito(productoLS)
    carritoDeCompras.push(productoLS)
    actualizarCarrito()
 }
}
  
 
 }
 
 
 recuperar()
       
       
