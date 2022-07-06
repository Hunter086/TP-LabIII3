
$(document).ready(function(){
    $("#animalito").click(function(){
      $("#animalito").animate({
        left: '200%',
        opacity: '0.5',
        width: '20%'
      },5000);
      
    });
    $("#eco-logo").click(function(){
      $("#eco-logo img").animate({
        left: '0px',
        opacity: '0.5',
        width: '20%'
      });
      $("#eco-logo img").animate({
        left: '0px',
        opacity: '0.5',
        height: '0',
        width: '0'
      });
    });
    /** loop rotation */
    $("#box-eli").hover(function(){
      $("#aspa-eolica").css({"animation-name": "girar", 
      "animation-duration": "2",
      "animation-duration": "2s",
      "animation-iteration-count": "infinite",
      "animation-timing-function": "linear"
     })
    });
    $("#box-eli").hover(function(){
      $("#aspa-eolica1").css({"animation-name": "girar1", 
      "animation-duration": "2",
      "animation-duration": "2s",
      "animation-iteration-count": "infinite",
      "animation-timing-function": "linear"
     })
    });
    $("#box-eli").hover(function(){
      $("#aspa-eolica2").css({"animation-name": "girar2", 
      "animation-duration": "2",
      "animation-duration": "2s",
      "animation-iteration-count": "infinite",
      "animation-timing-function": "linear"
     })
    });
    /*animate house*/
    var casa;
    casa = 0;
    $("#casa").click(function(){
      $("#box-casa").html('<img src="../../img/casaOn.png" alt="casa con la luz prendida" id="casa">');
    });
    /*rotar para un lado y para el otro*/
    $('#nuestra-organizacion').click(function(){
      var imagen = $('#nuestra-organizacion');
      if (!imagen.hasClass('animar')) {
        imagen.addClass('animar');
      } else {
        imagen.removeClass('animar');
      }
    });
    /**biker run */
    $("#biker").click(function(){
      $("#biker").animate({
        left: '200%',
        opacity: '0.5',
        width: '100%'
      },5000);
    });
      /**carEco */
      $("#carEco").click(function(){
        $("#carEco").animate({
          left: '-100%',
          opacity: '0.5',
          width: '100%'
        },2500);
      });
    /**espandir*/
      $("img.icon").hover(function(){
        $("img.icon").animate({

          width: '110%'
      
        },1000,function(){
          $("img.icon").css("width", "100%");
        });
      });
        $("#animalito-ardilla").animate({
          left: '150%',
          opacity: '0.5',
        },2500);
        /**árbol */
          $("#arbol").click(function(){
            $("#box-arbol").html('<img src="../../../img/arbolOn.png" alt="semilla árbol" id="casa">');
            setInterval(function(){ 
              $("#box-arbol").html('<img src="../../../img/arbolOff.png" alt="árbol florecido" id="casa">');
          }, 10000);
        });
      /**ardilla */
        $("#animalito-ardilla").html('<img src="https://acegif.com/wp-content/uploads/2021/4fh5wi/squirrel-animated-gif-30.gif" alt="ardilla">');
        /**hojas */
        $("#box-hojas").click(function(){
          $("#box-hojas").animate({
            left: '200%',
            opacity: '0.5'
          },5000);
        });
});


