const jugador = document.querySelector(".contenedor-img");

const nombreJugador = document.querySelector(".nombre-jugador");

const btnCambiar = document.querySelector(".cambiar-btn");

fetch("https://picsum.photos/v2/list")
.then((response) => response.json())
.then((jugadores) => console.log(jugadores))
.then(()=> {
    const fondo = jugadores.download_url
    btnCambiar.addEventListener("clik",() => {
        jugador.style.backgroundImage("fondo")
    })
})
.catch(() => console.log("error"))