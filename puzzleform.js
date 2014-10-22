var puzzleForm = function() {
     "use strict";

     var elementos, original, insertar; 

     return {
          init: function(arrayobj) {
               elementos = $(arrayobj["classe"]);
               insertar = arrayobj["insertar"];
               original = $(arrayobj["insertar"]);
          },

          puzzle: function(arrayobj) {
               original.append(elementos);

               var ordenado = [];
               var arrayElementos = original.find(arrayobj["regex"]);

               $.each(arrayElementos, function(k, v) {
                    var elemento = $(v);

                    ordenado[parseInt(elemento.attr(arrayobj["orderby"]))] = elemento;
               });

               $(insertar).html("");
               $(insertar).append(ordenado);
          }
     }
}();
