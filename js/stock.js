class Producto{
    constructor(linea,codigo, nombre, precio, img){
        
        this.linea=linea,
        this.codigo=Number(codigo), 
        this.nombre=nombre,
        this.precio=Number(precio),
        this.img=img
        
    }
    //metodo del objeto producto

    calcularMontoTotal(){
        this.MontoTotal=this.precio * cantidad 
    }
}

//array para crear nuevos objetos 

const productosTienda=[]
productosTienda.push(new Producto("Repisas", 1, "Set de cubos", 2450, '../../assets/image/repisas principal.png'))
productosTienda.push(new Producto("Repisas", 2, "Set de cubos", 2450, '../../assets/image/repisas principal.png'))
productosTienda.push(new Producto("Repisas", 3, "Set de cubos", 2450, '../../assets/image/repisas principal.png'))
productosTienda.push(new Producto("Mesas", 4,"Escritorio Nórdico", 1200,'../../assets/image/mesas2.png'))
productosTienda.push(new Producto("Mesas", 5,"Escritorio Nórdico", 3600, '../../assets/image/mesas2.png'))
productosTienda.push(new Producto("Mesas", 6,"Escritorio Nórdico", 1200,'../../assets/image/mesas2.png'))
productosTienda.push(new Producto("Posa Macetas", 7,"Banquito Primaveral", 3600, '../../assets/image/posa macetas2.png'))
productosTienda.push(new Producto("Posa Macetas", 8,"Banquito Primaveral", 1200,'../../assets/image/posa macetas2.png'))




