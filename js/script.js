document.addEventListener("DOMContentLoaded", () => {

    const botones = document.querySelectorAll("button");
    const relojes = document.querySelectorAll(".col-md-3");

    botones.forEach(boton => {

        boton.addEventListener("click", () => {

            const marca = boton.id;

            relojes.forEach(reloj => {

                if (marca === "todos") {
                    reloj.style.display = "block";
                }

                else if (reloj.classList.contains(marca)) {
                    reloj.style.display = "block";
                }

                else {
                    reloj.style.display = "none";
                }

            });

        });

    });

});