/* PRODUCTOS */ 
let productos = new Array();
productos.push(new Producto("1", "Proteina","TRUEMADE WHEY PROTEIN", "ENA", 4400, "./assets/img/truemadeWheyProtein.jpg", true));
productos.push(new Producto("2", "Proteina","100% WHEY PROTEIN", "ENA", 4000, "./assets/img/100whey.jpg", false));
productos.push(new Producto("3", "Proteina","PLATINUM WHEY PROTEIN", "STAR NUTRITION", 4600, "./assets/img/proteinstar.jpg", false));
productos.push(new Producto("4", "Creatina","CREA SHOCK","NUTRILAB", 2800, "./assets/img/creaShockNutrilab.png", false));
productos.push(new Producto("5", "Creatina","CREATINA MONOHIDRATO","STAR NUTRITION", 6000, "./assets/img/creatinastar.jpg", true));
productos.push(new Producto("6", "Shaker","SHAKER","GOLD NUTRITION", 800, "./assets/img/shakerGold.png", true));
productos.push(new Producto("7", "Shaker","SHAKER","XTRENGHT", 800, "./assets/img/shakerXtreght.png", false));
productos.push(new Producto("8", "Preentreno","PREWAR", "ENA", 2800, "./assets/img/prewarEna.jpg", true));
productos.push(new Producto("9", "Preentreno","PUMP V8","STAR NUTRITION", 3000, "./assets/img/pumpv8.jpg", true));
productos.push(new Producto("10", "Ganador de peso", "MUTANT MASS 5KG","STAR NUTRITION", 8200, "./assets/img/mutantMass.jpg", true));
productos.push(new Producto("11", "Ganador de peso","ULTRA MASS 1,5KG","ENA", 3800, "./assets/img/ultraMassEna.jpg", false));
productos.push(new Producto("12", "Proteina","BARRAS PROTEICAS x20","GENTECH", 3200, "./assets/img/ironbarGentech.jpg", true));

let products = document.querySelector(".products");
let carrito = [];

document.addEventListener("DOMContentLoaded",()=>{
    carrito = JSON.parse( localStorage.getItem('carrito') ) || [];
    actualizarCarrito();
})

/**Agregar los productos al HTML */
    agregarProducto();
    function agregarProducto() {
        for (let i = 0;i < productos.length; i++) {
            const {id,img,nombre,marca,precio } = productos[i]

            let productbox = `
            <article class="col d-flex justify-content-center mb-4" id="row_${id}">
                    <div class="card shadow mb-1 p-2" style="width: 24rem;">
                    <div class="d-flex justify-content-center" style="height: 300px;">
                        <img src="${img}" class="" alt="producto" style="height: 100%">
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

/**Funcion para agregar al carrito los productos */

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

/**Funcion para contar los productos */

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

/**Funcion para eliminar productos */

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

/**Funcion para mostrar los productos los productos del array carrito */

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
    carrito.length > 0 ? alert("COMPRA REALIZADA CON EXITO!") : alert("No agregaste productos al carrito");
    for(let i = 0; i < carrito.length; i++){
        carrito = carrito.filter( producto => producto[i] != producto[i]);
    }
    actualizarCarrito();
}

function guardarCarrito() { 
    
    localStorage.setItem('carrito', JSON.stringify( carrito ));        
}