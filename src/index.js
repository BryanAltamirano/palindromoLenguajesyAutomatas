import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

    const verificarPalindromo = () => {
        let texto = document.getElementById("palabra").value;
        // para eliminar espacios y lo que puede contener
        let limpio = texto.toLowerCase().replace(/[^a-z0-9]/g, ''); 
        let invertido = limpio.split('').reverse().join('');

        let resultado = document.getElementById("resultado");

        if (limpio === invertido && limpio.length > 0) {
            resultado.textContent = "Es un palíndromo";
            resultado.classList.remove("text-danger");
            resultado.classList.add("text-success");
        } else {
            resultado.textContent = "No es un palíndromo";
            resultado.classList.remove("text-success");
            resultado.classList.add("text-danger");
        }
    };

    // Cuando el DOM esté cargado, se enlaza el evento al botón
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector("button.btn").addEventListener("click", verificarPalindromo);
    });
