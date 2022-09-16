const url = "./assets/js/productos.json"



    document.addEventListener("DOMContentLoaded",()=>{
        carrito = JSON.parse( localStorage.getItem('carrito') ) || [];

        fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado =>{
            productos = (resultado.productos).filter((producto) => producto.stock == true);
            pr = productos
            productos.sort((a, b) => a.nombre.localeCompare(b.nombre))
            
            crearFiltro();
            filtrar();
            agregarProducto(productos);
            
        })
        actualizarCarrito();
    })


    


    


