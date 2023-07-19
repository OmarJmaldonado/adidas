const toggle = document.querySelector('.toggle')//se almasena esa const el toggle (boton) van con comillas simples
const links = document.querySelector('.links')

//se agarra la const y se le añade un evento en este caso un click y se define una funcion =>
toggle.addEventListener("click", () =>{

     //hace que se le agrege esa clase de rotar cuando hacemos click
    links.classList.toggle("active")

}



)


