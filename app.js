// Definir saldo inicial y cargarlo desde localStorage si existe
let saldo = localStorage.getItem("saldo") ? parseInt(localStorage.getItem("saldo")) : 500000;

// Obtener los parámetros de la URL
const params = new URLSearchParams(window.location.search);
const monto = params.get("monto");

// Verificar si el monto es válido y restarlo del saldo
if (monto && !isNaN(monto) && monto > 0) {
    saldo -= parseInt(monto); // Restar el monto del saldo
    localStorage.setItem("saldo", saldo); // Guardar el nuevo saldo en localStorage
    document.getElementById("resultado").innerText = `Monto recibido: ${monto} Gs\nSaldo restante: ${saldo} Gs`;
} else {
    document.getElementById("resultado").innerText = `Saldo actual: ${saldo} Gs`;
}
