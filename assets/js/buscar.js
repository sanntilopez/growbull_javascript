  
    
    /**Funcion que agrega los productos buscados */
    function buscar() {
        productos = productos.filter(producto => producto.marca.toLowerCase().includes(document.querySelector("#buscador").value.toLowerCase().trim()) || producto.nombre.toLowerCase().includes(document.querySelector("#buscador").value.toLowerCase().trim()) || producto.tipo.toLowerCase().includes(document.querySelector("#buscador").value.toLowerCase().trim()))
        if (document.querySelector("#buscador").value.length >= 2 && productos.length >= 1) {
            products.innerHTML ="";
            document.querySelector("#buscador").placeholder="Buscar...";
            agregarProducto(productos);
        } else {

            products.innerHTML ="";
            document.querySelector("#buscador").value = ""
            productos = pr;
            
            agregarProducto(productos);
            reiniciarFiltro();
            document.querySelector("#buscador").placeholder="No se encontraron resultados";
            
        }
    }

        document.addEventListener("keypress", (e)=>{
            e.key === "Enter" &&  buscar();
            
        })