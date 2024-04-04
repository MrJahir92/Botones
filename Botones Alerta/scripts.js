function mostrarImagenYAlerta(valor, rutaImagen) {
    alert(valor);
    mostrarImagen(rutaImagen);
}

function mostrarImagen(rutaImagen) {
    var imagen = document.getElementById("imagen");
    imagen.src = rutaImagen;
}
