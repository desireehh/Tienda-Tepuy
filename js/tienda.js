
let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');
const contadorCarrito = document.getElementById('contadorCarrito');
const selecLinea = document.getElementById('selecLinea');
const precioTotal = document.getElementById('precioTotal');
const buscador = document.getElementById('search')
// const finCompra = document.getElementById('fin-compra')




//filtro

 selecLinea.addEventListener('change',()=>{
 console.log(selecLinea.value)
 if(selecLinea.value == 'all'){
    mostrarProductos(productosTienda)
}else{
    mostrarProductos(productosTienda.filter(elemento=> elemento.linea == selecLinea.value))
}
}
)
      

mostrarProductos(productosTienda)

//mostrar producto
function mostrarProductos(array){
    contenedorProductos.innerHTML = ""
    array.forEach(el=> {
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
localStorage.setItem('carrito', JSON.stringify(carritoDeCompras));

}
  
 
 //Mostrar carrito

 function mostrarCarrito(productoAgregar) {
    let div = document.createElement('div')
        div.className = 'productoEnCarrito'
        div.innerHTML= `<p>Producto: ${productoAgregar.nombre}</p>
        <p>Precio: $${productoAgregar.precio}</p>
        <button id="eliminar ${productoAgregar.codigo}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>` 
           
    
 contenedorCarrito.appendChild(div)

    let btnEliminar = document.getElementById(`eliminar ${productoAgregar.codigo}`)
    console.log(btnEliminar) 
btnEliminar.addEventListener('click',()=>{
       btnEliminar.parentElement.remove()      
       carritoDeCompras = carritoDeCompras.filter(el => el.codigo !== productoAgregar.codigo)
       actualizarCarrito()
       localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
 })
 
}
 
 
 //actualizar carrito

 function  actualizarCarrito(){
    contadorCarrito.innerText= carritoDeCompras.length
    precioTotal.innerText= carritoDeCompras.reduce((acc,el)=> acc+el.precio, 0)
                                                           
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

 //Buscador
buscador.addEventListener('input',(e)=>{
    console.log(e.target.value);
    let buscaBusca = productosTienda.filter(elemento => elemento.nombre.toLowerCase().includes(e.target.value.toLowerCase()))
    mostrarProductos(buscaBusca)
})

mostrarProductos(productosTienda)
       
