class Producto {
    constructor(id, tipo, nombre, marca, precio, img, stock) {
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = parseFloat(precio);
        this.img = img;
        this.stock = stock;
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