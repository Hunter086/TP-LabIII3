
  function enviarTodo(){
    if (this.validarFormulario()) {
      this.sendemail();
      alert("Se envio el correo");
    }else{
      alert("No se envio el correo");
    }
  }
  function validarFormulario() {
    var email = document.getElementById('input-email').value;
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!emailRegex.test(email)) {
        alert('No has escrito bien el Email');
        return false;
    }
    /*validar lista de marcas */
    var val = $("#listamarcas").val();
    var obj = $("#datalistOptions").find("option[value='" + val + "']");
    if(obj == null && obj.length <= 0){
        alert("Lista de marcas no seleccionada");
        return false;
    }
      // don't allow form submission
    /*End validar lista de marcas */
    select = document.getElementById('select-product'); // or in jQuery use: select = this;
    if (select.value=="") {
      alert("Error en la selección de productos");
      return false;
    }
    var cant = document.getElementById('cant-product').value;
    cantRegex =/^[0-9]+$/;
    if(!cantRegex.test(cant)){
      alert("Error en la cantidad del Producto");
      return false;
    }
    var text = document.getElementById('input-text').value;
    if(text.length<=50 || text.length>2000){
      alert("Error al ingresar una descripción");
      return false;
    }
    /*var asunto = document.getElementById('asunto').value;
    if(asunto.length == 0) {
      alert('No has seleccionado nada en asunto');
      return;
    }*/
    /**validar file */
    if(!fileValidation()){
      return false;
    }

    return true;
  }
  function fileValidation(){
    var fileInput = document.getElementById('files');
    var filePath = fileInput.value;
    var allowedExtensions = /(.jpg|.jpeg|.png|.pdf)$/i;
    if(!allowedExtensions.exec(filePath)){
        alert('Porfavor seleccione un archivo .jpg/.jpeg/.png/.pdf only.');
        fileInput.value = '';
        return false;
    }
    return true;
}
function sendemail(){
  var email = document.getElementById('input-email').value;
  var fileInput = document.getElementById('files');
  var val = $("#listamarcas").val();
  var filePath = fileInput.value;
  var select = document.getElementById('select-product');
  var cant = document.getElementById('cant-product').value;
  var text = document.getElementById('input-text').value;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "lucas.bauducco@gmail.com",
        Password : "D8FDD2545A58C6376D611363A022CC880419",
        To : 'lucasbauducco@gmail.com',
        From : "lucasbauducco@gmail.com",
        Subject : "Contact!",
        Body : '<html"><h2 style="text-align: center;">'+val+'</h2><h3 style="text-align: left;">Producto: '+select.value+'</h3><br></br><p style="text-align: justify;"><e>Cantidad: '+cant+'</e></p style="text-align: center;"><br></br><p>'+text+'</p><p>De: '+email+'</p></html>',
        Attachments: ''+filePath+'',

    }).then(
      message => alert(message)

    );
}