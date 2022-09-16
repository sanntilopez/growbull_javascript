const filtros = document.getElementsByClassName("filtros");
const filtrosTipo = document.getElementsByClassName("filtrosTipo");
const filtrosMarca = document.getElementsByClassName("filtrosMarca");
const checkboxList = document.querySelector(".checkboxList");
const checkboxListResponsive = document.querySelector(".checkboxListResponsive");
const btnFilters = document.querySelector(".btnFilters");
const btnFiltersResponsive = document.querySelector(".btnFiltersResponsive")
const filtersBtn = document.querySelector(".filtersBtn");
const filtroPor = document.querySelector(".filtroPor");
const filtroPorResponsive = document.querySelector(".filtroPorResponsive");



let productosFiltrados = [];




 /** Crear los filtros necesarios */
 function crearFiltro(){
    let marcas = Array.from(new Set(productos.map((el) => el.marca)));
    let tipos = Array.from(new Set(productos.map((el) => el.tipo)));
    
    if (tipos.length >0) {
        checkboxList.innerHTML = `
        <li>
            <h6 class="m-0">Productos</h6>
        </li>
        `
    for(let i = 0 ; i<tipos.length ; i++) {

        let filtro = `
        <li>
            <input id="${tipos[i]}" type="checkbox" value="${tipos[i]}" class="filtrosTipo filtros" data-bs-dismiss="offcanvas">
            <label for="${tipos[i]}">${tipos[i]}</label>
        </li>`
        checkboxList.innerHTML +=filtro
        checkboxListResponsive.innerHTML += filtro
        }
    }
    if (marcas.length >0) {
        checkboxList.innerHTML += `
        <li>
            <h6 class="m-0">Marcas</h6>
        </li>
        `
    for(let i = 0 ; i<marcas.length ; i++) {

        let filtro = `
        <li>
            <input id="${marcas[i]}" type="checkbox" value="${marcas[i]}" class="filtrosMarca filtros" data-bs-dismiss="offcanvas">
            <label for="${marcas[i]}">${marcas[i]}</label>
        </li>`
        checkboxList.innerHTML += filtro
        checkboxListResponsive.innerHTML += filtro
        }
    }
}

// FUNCION PARA FILTRAR LOS PRODUCTOS
function filtrar(){
    for (let i=0;i<filtrosTipo.length;i++){
        filtrosTipo[i].addEventListener("click", () => {
            if (filtrosTipo[i].checked){
                productos =productos.filter( prod => prod.tipo == filtrosTipo[i].value);
                filtroClicked();
                document.querySelector("#buscador").placeholder="Buscar...";
            }
        });}

        for (let i=0;i<filtrosMarca.length;i++){
            filtrosMarca[i].addEventListener("click", () => {
                if (filtrosMarca[i].checked){
                    productos = productos.filter( prod => prod.marca == filtrosMarca[i].value );
                    filtroClicked();
                    document.querySelector("#buscador").placeholder="Buscar...";
                }
            });}

            
    }



/** Funcion para mostrar los productos filtrados */
    function filtroClicked() {
        products.innerHTML =""
        agregarProducto(productos)
        checkboxList.hidden = true;
        checkboxListResponsive.hidden = true;
        btnFilters.hidden = false;
        btnFiltersResponsive.hidden = false;
        filtroPor.hidden = false;
        filtroPorResponsive.hidden = false;
        filtersBtn.hidden = true;
        filtroPor.innerHTML = `Filtrado por: ${filtro()}`;
        filtroPorResponsive.innerHTML = `Filtrado por: ${filtro()}`;
    }

    /**Funcion para reiniciar el filtro aplicado */
    function reiniciarFiltro() {
        checkboxList.hidden = false;
        checkboxListResponsive.hidden = false;
        btnFilters.hidden = true;
        btnFiltersResponsive.hidden = true;
        filtroPor.hidden = true;
        filtroPorResponsive.hidden = true;
        filtersBtn.hidden = false;
        products.innerHTML ="";
        document.querySelector("#buscador").value = ""
        productos = pr
        
        agregarProducto(productos);
        for (let i=0;i<filtros.length;i++){
            filtros[i].checked = false
        }
    }

    /**Funcion que retorna el filtro en uso */
    function filtro() {
        for (let i=0;i<filtros.length;i++){
            if (filtros[i].checked == true){
                return filtros[i].value;
            }
        }
    }