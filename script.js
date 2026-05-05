const jugador = document.querySelector(".contenedor-img");

const nombreJugador = document.querySelector(".nombre-jugador");

const btnCambiar = document.querySelector(".cambiar-btn");

fetch("https://picsum.photos/v2/list")
  .then((response) => response.json())
  .then((jugadores) => {
    btnCambiar.addEventListener("click", () => {
      const random = Math.floor(Math.random() * jugadores.length);
      const fondo = jugadores[random].download_url;
      const nombre = jugadores[random].author;

      const img = new Image();
      img.src = fondo;

      img.onload = () => {
        jugador.opacity = 0;
        setTimeout(() => {
          jugador.style.backgroundImage = `url(${fondo})`;
          jugador.style.backgroundSize = "cover";
          jugador.style.backgroundPosition = "center";
          jugador.style.backgroundRepeat = "no-repeat";
          nombreJugador.textContent = nombre;
          jugador.opacity = 1;
        }, 200);
      };
    });
  })

  .catch(() => console.log("error"));
