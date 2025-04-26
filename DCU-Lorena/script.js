let carrito = [];

function agregarProducto(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    let listaCarrito = document.getElementById('lista-carrito');
    let totalElement = document.getElementById('total');
    listaCarrito.innerHTML = ''; // Limpia la lista antes de actualizar

    let total = 0;
    carrito.forEach((producto, index) => {
        let item = document.createElement('li');
        item.textContent = `${producto.nombre} - Bs.${producto.precio}`;
        listaCarrito.appendChild(item);
        total += producto.precio;
    });

    totalElement.textContent = total; // Actualiza el total
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

// Ejemplo de cómo agregar un producto
agregarProducto("Cámara de seguridad", 150);
agregarProducto("Router Wi-Fi", 80);
