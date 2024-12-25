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

// Animación glitch
document.addEventListener("DOMContentLoaded", () => {
    const words = ["electrónica", "robótica", "ingeniería", "mecatrónica", "programación"];
    const morphSpeed = 100; // Velocidad de cambio entre letras
    const delayBetweenWords = 600; // Tiempo entre palabras completas
    const randomSteps = 2; // Cantidad de pasos aleatorios antes del cambio final

    function morphWords(element, words) {
        let currentWordIndex = 0;

        function morphToNextWord() {
            const currentWord = words[currentWordIndex];
            const nextWord = words[(currentWordIndex + 1) % words.length];
            const maxLength = Math.max(currentWord.length, nextWord.length);
            let remainingIndices = Array.from({ length: maxLength }, (_, i) => i); // Índices disponibles para cambiar

            function getRandomChar() {
                const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                return chars.charAt(Math.floor(Math.random() * chars.length));
            }

            function morphStep() {
                if (remainingIndices.length > 0) {
                    const randomIndex = Math.floor(Math.random() * remainingIndices.length);
                    const indexToChange = remainingIndices.splice(randomIndex, 1)[0];

                    let result = "";
                    for (let i = 0; i < maxLength; i++) {
                        if (!remainingIndices.includes(i)) {
                            // Paso final: usa la letra de la nueva palabra
                            result += nextWord[i] || "";
                        } else if (Math.random() < 0.5 && currentWord[i]) {
                            // Paso aleatorio: usa un carácter random
                            result += getRandomChar();
                        } else {
                            // Mantén la letra actual
                            result += currentWord[i] || getRandomChar();
                        }
                    }

                    element.textContent = result;

                    setTimeout(morphStep, morphSpeed);
                } else {
                    currentWordIndex = (currentWordIndex + 1) % words.length;
                    setTimeout(morphToNextWord, delayBetweenWords);
                }
            }

            morphStep();
        }

        morphToNextWord();
    }

    const heroHeading = document.querySelector(".hero h1");
    const buyNowHeading = document.querySelector(".buy-now .anim-text");

    if (heroHeading) {
        const span = document.createElement("span");
        span.classList.add("morphing");
        span.textContent = "robótica";
        heroHeading.appendChild(span);
        morphWords(span, words);
    }

    if (buyNowHeading) {
        const span = document.createElement("span");
        span.classList.add("morphing");
        span.textContent = "electrónica";
        buyNowHeading.appendChild(span);
        morphWords(span, words);
    }
});




