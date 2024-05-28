document.addEventListener('DOMContentLoaded', function () {
    // Selecciona los elementos de entrada y los checkboxes
    var nombreInput = document.getElementById('nombreInput');
    var correoInput = document.getElementById('correoInput');
    var cineCheckbox = document.getElementById('cine');
    var musicaCheckbox = document.getElementById('musica');
    var ambasCheckbox = document.getElementById('ambas');
    var botonEnterate = document.getElementById('boton-enterate');
  
    // Agrega un evento de escucha para detectar cambios en los elementos
    nombreInput.addEventListener('input', verificarEstadoBoton);
    correoInput.addEventListener('input', verificarEstadoBoton);
    cineCheckbox.addEventListener('change', verificarEstadoBoton);
    musicaCheckbox.addEventListener('change', verificarEstadoBoton);
    ambasCheckbox.addEventListener('change', verificarEstadoBoton);
  
    // Función para verificar el estado del botón
    function verificarEstadoBoton() {
      // So los campos de entrada están completos y al menos un checkbox está marcado
      if (
        nombreInput.value.trim() !== '' &&
        correoInput.value.trim() !== '' &&
        (cineCheckbox.checked || musicaCheckbox.checked || ambasCheckbox.checked)
      ) {
        // Se haiblita el botón solo si todos los campos están completos
        if (nombreInput.validity.valid && correoInput.validity.valid) {
          botonEnterate.classList.remove('deshabilitado');
          botonEnterate.removeAttribute('disabled');
        }
      } else {
        // Se deshabilita el botón si alguno de los campos no está completo
        botonEnterate.classList.add('deshabilitado');
        botonEnterate.setAttribute('disabled', 'disabled');
      }
    }
  });
