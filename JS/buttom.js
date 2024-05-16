function ocultarover(elemento) 
{
    const mostrarBtn = document.getElementById(elemento);
    const contenidoOculto = document.querySelector('.contenido-oculto');
    mostrarBtn.classList.toggle('contenido-oculto');
}