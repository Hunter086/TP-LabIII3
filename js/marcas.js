var marcas = [];
          $(document).ready(function ()
          {
            $.getJSON("https://hunter086.github.io/marcas.json", function( json )
            {        
              var datos = json;
              for(i in datos)
              {
                $('#marcas').append('<div class="card"><img src="'+datos[i].img+
              '" class="card-img-top" alt="'+datos[i].nombre+'"><div class="card-body"><h5 class="card-title">'+datos[i].nombre+
              '</h5><p class="card-text">'+datos[i].descripcion+
              '</p><a href="'+datos[i].link+'" class="btn btn-primary">Ir a los productos</a></div></div>');
              }
            });
            
          });
