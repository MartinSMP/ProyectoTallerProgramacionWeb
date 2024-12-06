function verDetalles(nombre, imagen, descripcion, precio) {
    // Asignar valores dinámicos
    document.getElementById('modal-image').src = imagen;
    document.getElementById('modal-description').textContent = descripcion;
    document.getElementById('modal-price').textContent = `Precio: S/.${precio}`;

    // Mostrar el modal
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
}

function cerrarModal() {
    // Ocultar el modal
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Cerrar modal al hacer clic fuera de la ventana
window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        cerrarModal();
    }
};
