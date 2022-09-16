let carrito = [];

class cartProduct {
    constructor(id, nombre, precio, img, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = cantidad;
    }
}

/**Funcion que guarda el producto para el carrito */

function addToCartClicked(id) {
    const prod = document.querySelector('#row_'+id);
    let producto = new cartProduct(id, 
        prod.querySelector('h5').textContent, 
    prod.querySelector('.product-price').textContent.substring(1,6), 
    prod.querySelector('img').src, 
    1)
    function addedNotification(){
        Toastify ({
        text:"Se agrego al carrito",
        gravity:"bottom",
        duration: 2000
        }).showToast();
    }
    addedNotification();
    addCarrito(producto);
}

 /**Funcion que busca si ya esta el producto en el carrito  */
function addCarrito(info) {

    const existe = carrito.some((product => product.id == info.id))

    if (existe) {
        carrito.map( producto => {

            if(producto.id === info.id)
            {
                producto.cantidad++;

                return producto;
            }
            else
            {
                return producto;
            } })

    }else {

        carrito.push(info);
    }
    actualizarCarrito();
}

/**Funcion para contar los productos en el carrito */

function contarProductos(){
    let contadorProductos = 0;

    carrito.forEach(( producto ) => {

        contadorProductos = contadorProductos + parseInt(producto.cantidad);
    })

    return contadorProductos;
}

/**Funcion para agregar numero de productos al carrito */

function addCartNumber() {
    let totalArticulos = contarProductos();

    let countCarrito = document.querySelector('#badgeCarrito');

    countCarrito.innerHTML = totalArticulos;
}

/**Funcion para eliminar productos del carrito */

function eliminar(id){
    carrito = carrito.filter( producto => producto.id != id);


        Toastify ({
        text:"Se elimino del carrito",
        gravity:"bottom",
        duration: 2000
        }).showToast();

    actualizarCarrito();
}

/**Funcion para actualizar carrito */
function actualizarCarrito(){
    mostrarCarrito();
    addCartNumber();
    guardarCarrito();
}

/**Funcion que muestra los productos en el carrito */

function mostrarCarrito(){
    let offcanvas = document.querySelector(".offcanvas-body");
    let total = 0;
    offcanvas.innerHTML =`
    <div class="row">
    <div class="col-7">Producto</div>
    <div class="col-2">Precio</div>
    <div class="col-3">Cantidad</div>
    </div>`
    carrito.forEach((producto) =>{
    const {id,img, nombre,precio,cantidad} = producto

    total += parseInt(precio * cantidad);
    let offcanvas = document.querySelector(".offcanvas-body");
    offcanvas.innerHTML = offcanvas.innerHTML+`<div class="row">
    <div class="col-3 d-flex align-items-center p-2 border-bottom">
        <img src="${img}" width="80"/>
    </div>

    <div class="col-4 d-flex align-items-center p-2 border-bottom">
        ${nombre}
    </div>

    <div class="col-2 d-flex align-items-center justify-content-end p-2 border-bottom">
        $ ${precio}
    </div>
        <div class="col-2 d-flex align-items-center justify-content-center  p-2 border-bottom">
        ${cantidad}
    </div>

    <div class="col-1 d-flex align-items-center justify-content-center p-2 border-bottom">
        <a href="javascript:eliminar(${id})">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-file-minus-fill" viewBox="0 0 16 16">
    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
    </svg>

        </a>
    </div>
    </div>
    `;
})
    let rowTotal = document.createElement('div');
    rowTotal.classList.add('row');

    rowTotal.innerHTML = `   <div class="col-4 d-flex align-items-center justify-content-start p-2 border-bottom">
                            Total a pagar:
                        </div>
                        <div class="col-8 d-flex align-items-center justify-content-end p-2 border-bottom">
                            <b> $ ${total}</b>
                        </div>`;
    offcanvas.appendChild(rowTotal);
    let rowComprar = document.createElement('div');
    rowComprar.classList.add('row');
    rowComprar.innerHTML = `
        <div class="col mt-3">
        <a href="javascript:comprar()" class="btn-success btn w-100 comprar" type="button">COMPRAR</a>
        </div>
        `
    offcanvas.appendChild(rowComprar);
}

/**Funcion para el boton comprar */
function comprar() {
    if (carrito.length > 0) { 
        
        Swal.fire({
        title: 'Deseas confirmar la compra?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar'
      }).then((result) => {
        
        if (result.isConfirmed) {
            
          Swal.fire(
            'Listo!',
            'Compra realizada con exito!',
            'success'
            )
            carrito = [];
            actualizarCarrito();
        }
      })
    } else { 
        Swal.fire('No agregaste ningun producto al carrito');
    }
}
/**Funcion que guarda los productos en el carrito en el localStorage */
function guardarCarrito() { 
    
    localStorage.setItem('carrito', JSON.stringify( carrito ));        
}

