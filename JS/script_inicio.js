 // Ocultar el loader cuando la página esté completamente cargada
 window.onload = function () {
    document.querySelector(".loader").classList.add("hidden");
};

document.body.addEventListener("click", function () {
    window.location.href = "login.html";
});