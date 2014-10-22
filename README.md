PUZZLE FORM
===========

Puzzle Form: plugin jquery para ordenar los campo de un formulario definido por un atributo

MODO DE USO:
------------
Inlcuir el fichero en documento HTML.

```html
<script type="text/javascript" src="puzzleform.min.js"></script>
```

Iniciamos el plugin con los parametros classe: [campos que debe obtener del formulario], insertar[el elemento html donde se va a insertar los elementos ordenados].

```javascript
puzzleForm.init({
  classe: ".campo-form",
  insertar: "#form-sorter"
});
```
