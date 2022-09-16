const select = document.querySelector(".form-select");


// EVENT LISTENER ENCARGADO DE ORDENAR LOS PRODUCTOS SEGUN LA SELECCION


select.addEventListener('change', (e) =>{
    
    if (e.target.value==1){
        productos.sort((a, b) => b.nombre.localeCompare(a.nombre))
        pr.sort((a, b) => b.nombre.localeCompare(a.nombre))
        products.innerHTML =""
        agregarProducto(productos)
    }

    else if (e.target.value==2){
        productos.sort((a,b) => b.precio-a.precio);
        pr.sort((a,b) => b.precio-a.precio);
        products.innerHTML =""
        agregarProducto(productos);

    }
    else if (e.target.value==3){
        productos.sort((a,b) => a.precio-b.precio);
        pr.sort((a,b) => a.precio-b.precio);
        products.innerHTML =""
        agregarProducto(productos);
    }

    else if (e.target.value==0){
        productos.sort((a, b) => a.nombre.localeCompare(b.nombre))
        pr.sort((a, b) => a.nombre.localeCompare(b.nombre))
        products.innerHTML =""
        agregarProducto(productos);
    }
});


    

