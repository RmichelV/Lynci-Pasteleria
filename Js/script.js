const navbar = document.getElementById('navbar');

// Función que se ejecuta cuando se hace scroll
window.addEventListener('scroll', function() {
    // Verificamos la posición del scroll
    if (window.scrollY > 20) {
        // Cambiar el estilo del navbar cuando el scroll es mayor a 50px
        navbar.classList.add('scrolled1');
    } else if(window.scrollY > 80){
        navbar.classList.add('scrolled2');
    }else {
        // Restaurar el estilo original del navbar
        navbar.classList.remove('scrolled1','scrolled2');
    }
});