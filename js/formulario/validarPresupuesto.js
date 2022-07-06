document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('nombre').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el nombre');
      return;
    }
    var email = document.getElementById('email').value;
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!emailRegex.test(email)) {
        alert('No has escrito bien el Email');
        return;
    }
    var asunto = document.getElementById('asunto').value;
    if(asunto.length == 0) {
      alert('No has seleccionado nada en asunto');
      return;
    }
    var mensaje = document.getElementById('mensaje').value;
    if(mensaje.length <= 50) {
      alert('No has escrito bien el mensaje');
      return;
    }
    this.submit();
  }