<style type='text/css'>

#autor {
background-color: crimson;
font-family: Arial Narrow, sans-serif;
box-shadow: #555 1px 1px 10px 0.5px;
border:#000 solid 1px;
}


b {
  padding-left:10em;
  padding-right:10em;
}

</style>

### <pre id="autor">JORGE CADENA CASADO  <b>2ºDAW</b>  2019/12/15</pre>

---
<br>

# **CREACIÓN DE PLUGIN - DOCUMENTACIÓN PARA EL PROGRAMADOR**

## Menu desplegable con jquery

**Permite crear cualquier menu desplegable sencillo con posibilidad de diseño**


## Prerequisitos

**Es necesario tener la libreria de jquery actualizada:**
```JavaScript
<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">
</script>
```


**Para poder usar el plugin es necesario tener un archivo .js y tener el plugin jquery.desplegable.js:**

```javascript

<script src="jquery.desplegable.js" type="text/javascript"></script>

```


## Como crear el menu

Una vez teniendo ya el archivo.js listo para empezar podemos crear ya el menu, debemos **llamar al desplegable con $() o la etiqueta que hemos creado previamente que será el padre del menu desplegable**, al invocar **desplegable()** y pasarle como parámetros **'empezar'** como primer parametro el segundo parámetro el número de secciones que queramos y el ID del padre como tercer parametro tendremos el menu por defecto(el primer elemento del menu es una etiqueta ul):
<div style="page-break-after: always;"></div>

```JavaScript
/**
 * Crea el menu desplegable por defecto.
 * @param {string} - Empieza el desplegable con el el menu por defecto.
 * @param {int} - Numero de elementos a crear por defecto.
 * @param {string} - El id del padre donde empezará el menu.
 */
$('#padre').desplegable('empezar','5','padre');

```

**o bien podemos hacer esto:**

```JavaScript

$().desplegable('empezar','5','padre');

```


## Otros metodos

Una sección se compone de una lista , un enlace y un caja(div) que seran hijos de la
ul(padre).

```JavaScript
/**
 * Agrega una seccion a debajo de cualquier elemento HTML.
 * @param {string} - Crea una seccion.
 * @param {string} - Nombre de la seccion que le queramos dar.
 * @param {string} - El id de la lista que le queramos dar.
 * @param {string} - El id del enlace que le queramos dar.
 * @param {string} - El id del div que le queramos dar.
 */
$('#padre').desplegable('agregarSeccion','nombreseccion', 'idlista','idenlace','iddiv');


```




## Creado con: 

* [JQUERY](http://www.dropwizard.io/1.0.2/docs/) - Es la libreria utilizada


## Versión usada 

* http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js

## Autores

* **Jorge Cadena casado**  (https://github.com/97jorx)







