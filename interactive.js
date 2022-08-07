// Escuchar el click

const boton = document.getElementById("boton")
boton.addEventListener("click", preguntarNombre )

// Guardar Heading

const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")

// Preguntar y guardar nombre

function preguntarNombre() {
    const nombre = prompt("Por favor ingrese su nombre")
    mostarNombre(nombre)
}

// Introducir nombre en los ...

function mostarNombre(nombre) {
   
    h2.textContent = "TE AMO 😍🥰"
    h1.textContent = nombre

}
