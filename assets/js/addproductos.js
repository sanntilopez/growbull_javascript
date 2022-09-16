const products = document.querySelector(".products"); 
 
 /**Funcion que muestra los productos en pantalla */
    
    function agregarProducto(productosFiltrados) {
        for (let i = 0;i < productosFiltrados.length; i++) {
            const {id,img,nombre,marca,precio } = productosFiltrados[i]

            let productbox = `
            <article class="col d-flex justify-content-center mb-4" id="row_${id}">
                    <div class="card shadow mb-1 p-2" style="width: 24rem;">
                    <div class="d-flex justify-content-center align-items-center" style="height: 300px;">
                        <img src="${img}" class="" alt="producto" style="height: 90%">
                    </div>
                    <div class="card-body description d-flex flex-column justify-content-between">
                        <h5 class="card-title pt-2 product-name">${nombre} ${marca}</h5>
                        <div>
                        <p class="product-price">$ ${precio}</p>
                        <a href="javascript:addToCartClicked(${id})" class="btn btn-primary w-100 addToCartButton">AÑADIR AL CARRITO</a>
                        </div>
                    </div>
                </div>
            </article>`
            products.innerHTML = products.innerHTML + productbox

            
    }
}   