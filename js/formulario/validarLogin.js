document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var email = document.getElementById('email').value;
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!emailRegex.test(email)) {
        alert('No has escrito bien el Email');
        return;
    }
    var password = document.getElementById('password').value;
    if(password.length == 0 || password.length < 8) {
      alert('Error su contraseña no es valida');
      return;
    }
    
    this.submit();
  }