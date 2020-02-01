<style type='text/css'>

#autor {
background-color: lightblue;
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

# **CREACIÓN DE PLUGIN - DOCUMENTACIÓN PARA EL DISEÑADOR**

## Menu desplegable 

**Permite crear cualquier menu desplegable sencillo con posibilidad de diseño**


## Id por defecto

Los id a tener encuenta son los siguientes(si el programador no decide cambiarlos):
los penúltimos números marcan el número de la etiqueta y el último número marca el menú
en el que se encuentra.

* liId11, lidId12, etc..
* seccionId11, seccionId12, etc..
* subsecId11, seccionId12, etc..
* ulId1, ulId2(este id solo se repite 1 vez por menú)

## Clases por defecto

Las clases a tener encuenta son los siguientes correspondiente a su número de menu.


* enlacea1
  * Corresponde a todos los enlaces.
* listali1
  * Corresponde a todas las listas.
* subsec1
  * Corresponde a todos los div.
* listaul1
  * Corresponde a todas las listas desordenadas.


## A tener en cuenta...

El menú desplegable base tiene como ID al enlace,
a la lista y al div, será los siguiente : enlaceId11 , liId11, subsecId11.
por lo tanto el siguiente menú creado tendrá el último número incrementado en uno.




## Creado con: 

* [JQUERY](http://www.dropwizard.io/1.0.2/docs/) - Es la libreria utilizada


## Versión usada 

* http://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js

## Autores

* **Jorge Cadena casado**  (https://github.com/97jorx)







