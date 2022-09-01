class Producto {
    constructor(id, nombre, marca, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = parseFloat(precio);
        this.img = img;
    }
}

class cartProduct {
    constructor(id, nombre, precio, img, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = cantidad;
    }
}