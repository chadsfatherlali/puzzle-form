PUZZLE FORM
===========

Puzzle Form: plugin jquery para ordenar los campo de un formulario definido por un atributo

MODO DE USO:
------------
Inlcuir el fichero en el documento HTML.

```html
<script type="text/javascript" src="puzzleform.min.js"></script>
```

Iniciamos el plugin con los parámetros ***classe:*** [campos en el orden original de donde va a obtener el array de elementos para luego ser ordenados], ***insertar:*** [el elemento html donde se va a insertar los elementos ordenados].

```javascript
puzzleForm.init({
  classe: ".campo-form",
  insertar: "#form-sorter"
});
```

```html
<!-- HTML ORIGINAL -->
<ul id="#form-sorter">
  <input data-particular="0" class="campo-form" type="text" name="nombre" />
  <input data-particular="2" class="campo-form" type="text" name="cargo" />
  <input data-particular="1" class="campo-form" type="text" name="apellido" />
</ul>
```

Llamamos a la funcion ***puzzle*** para que lo ordene con los parámetros ***orderby:*** [el atributo de donde va a obtener el orden], ***regex:*** [los elementos que van a ser ordenados].

```javascript
puzzleForm.puzzle({
  orderby: "data-particular",
  regex: ".campo-form[data-particular]"
});
```

```html
<!-- HTML RESULTANTE -->
<ul id="#form-sorter">
  <input data-particular="0" class="campo-form" type="text" name="nombre" />
  <input data-particular="1" class="campo-form" type="text" name="apellido" />
  <input data-particular="2" class="campo-form" type="text" name="cargo" />
</ul>
```
