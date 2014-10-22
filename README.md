PUZZLE FORM
===========

Puzzle Form: plugin jquery para ordenar los campo de un formulario definido por un atributo

MODO DE USO:
------------
Inlcuir el fichero en el documento HTML.

```html
<script type="text/javascript" src="puzzleform.min.js"></script>
```

Iniciamos el plugin con los parámetros ***classe:*** [campos que debe obtener del formulario], ***insertar:*** [el elemento html donde se va a insertar los elementos ordenados].

```javascript
puzzleForm.init({
  classe: ".campo-form",
  insertar: "#form-sorter"
});
```

Llamamos a la funcion ***puzzle*** para que lo ordene con los parámetros ***orderby:*** [el atributo de donde va a obtener el orden], ***regex:*** [los elementos que van a ser ordenados].

```javascript
puzzleForm.puzzle({
  orderby: "data-particular",
  regex: ".campo-form[data-particular]"
});
```
