const verificarPalindromo = () => {
    let texto = document.getElementById("palabra").value;
    let limpio = texto.toLowerCase().replace(/[^a-z0-9]/g, ''); 
    let invertido = limpio.split('').reverse().join('');

    if (limpio === invertido && limpio.length > 0) {
        Swal.fire({
            icon: "success",
            title: "¡Es un palíndromo!",
            text: `"${texto}" se lee igual al revés.`,
            confirmButtonColor: "#0984e3",
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "No es un palíndromo",
            text: "Intenta con otra palabra o frase.",
            confirmButtonColor: "#d63031",
        });
    }
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button.btn").addEventListener("click", verificarPalindromo);
});
