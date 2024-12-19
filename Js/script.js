const navbar = document.getElementById('navbar');

// Función que se ejecuta cuando se hace scroll
window.addEventListener('scroll', function() {
    // Verificamos la posición del scroll
    if (window.scrollY > 100) {
        // Cambiar el estilo del navbar cuando el scroll es mayor a 50px
        navbar.classList.add('scrolled1');
    } else if(window.scrollY > 80){
        navbar.classList.add('scrolled2');
    }else {
        // Restaurar el estilo original del navbar
        navbar.classList.remove('scrolled1','scrolled2');
    }
});

// // Seleccionar el botón y el div del formulario
// const realizarPedidoBtn = document.querySelector('.rp');
// const pedidoDiv = document.querySelector('.pedido');

// // Agregar la clase "show" al hacer clic en el botón
// realizarPedidoBtn.addEventListener('click', () => {
//   pedidoDiv.classList.toggle('show'); // Alternar entre mostrar y ocultar
// });

// Seleccionar todos los botones y divs del formulario
// const realizarPedidoBtns = document.querySelectorAll('.rp');
// const pedidoDivs = document.querySelectorAll('.pedido');

// // Agregar un evento a cada botón
// realizarPedidoBtns.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     // Alternar la clase "show" en el formulario correspondiente
//     pedidoDivs[index].classList.toggle('show');
//   });
// });

// Seleccionar todos los botones y divs del formulario
const realizarPedidoBtns = document.querySelectorAll('.rp');
const pedidoDivs = document.querySelectorAll('.pedido');

// Agregar un evento a cada botón
realizarPedidoBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // Alternar la clase "show" en el formulario correspondiente
    pedidoDivs[index].classList.toggle('show');
    
    // Cambiar el texto del botón
    if (pedidoDivs[index].classList.contains('show')) {
      // Si el formulario está visible, cambiar el texto a "Cancelar"
      btn.textContent = 'Cancelar';
    } else {
      // Si el formulario está oculto, cambiar el texto de vuelta a "Realizar Pedido"
      btn.textContent = 'Realizar Pedido';
    }
  });
});
