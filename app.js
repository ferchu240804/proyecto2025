// Obtener los parámetros de la URL
const params = new URLSearchParams(window.location.search);
const monto = params.get("monto");

// Mostrar el monto en la página
if (monto) {
    document.getElementById("resultado").innerText = "Monto recibido: " + monto;
} else {
    document.getElementById("resultado").innerText = "No se recibió ningún dato.";
}
