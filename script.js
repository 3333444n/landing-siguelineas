document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu__toggle");
    const menuBox = document.querySelector(".menu__box");
    const menuItems = document.querySelectorAll(".menu__item");

    // Cerrar el menú con animación al hacer clic en un enlace
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menuBox.style.opacity = "0"; // Inicia la animación de ocultar
            menuBox.style.pointerEvents = "none"; // Deshabilita interacción durante el fade-out
            setTimeout(() => {
                menuToggle.checked = false; // Desmarca el checkbox después de la animación
            }, 500); // Duración de la animación
        });
    });

    // Añadir animaciones para mostrar/ocultar el menú con opacidad
    menuBox.style.transition = "opacity 0.s ease-in-out";
    menuBox.style.opacity = "0";
    menuBox.style.pointerEvents = "none";

    menuToggle.addEventListener("change", () => {
        if (menuToggle.checked) {
            menuBox.style.opacity = "1"; // Mostrar menú con animación
            menuBox.style.pointerEvents = "auto"; // Habilita interacción
        } else {
            menuBox.style.opacity = "0"; // Ocultar menú con animación
            menuBox.style.pointerEvents = "none"; // Deshabilita interacción durante el fade-out
            setTimeout(() => {
                menuToggle.checked = false; // Asegura que el checkbox se desmarque después de la animación
            }, 500); // Duración de la animación
        }
    });
});




