
<div  align="center">
	<h1  style="text-align: center">Platzi Cursos</h1>
</div>

<div align="center" >
	<img width="500" src="https://i.imgur.com/eTUKPWU.png"/>
</div>

_Acerca del Proyecto_
Plugin de Google Chrome para crear una base de datos en Notion apartir de un curso de la plataforma de Platzi.
## Instalalación🚀

_Clonar el proyecto._
```
https://github.com/JaviMiot/ChromeExtensionPlatziCourse.git
```

### Pre-requisitos 📋

1. Tener una integración de la API de Notion esto lo puedes realizar en el siguiente [link](https://www.notion.so/my-integrations)
2. Hacer clic en el botón "+ New integration".
3. Dar un nombre a la integración.
4. Selecciona el workspace donde deseas instalar la integración.
5. Clic en "Submit" para crear la integración.
![Crear integración](https://files.readme.io/2ec137d-093ad49-create-integration.gif)
![token notion](https://i.imgur.com/jRhuQgy.png)

6. Guarda el token de la API para usarla despues.

Esta extensión tiene un template que lo puedes duplicar en tu propio notion para acceder ingresa [AQUÍ](https://javimiot.notion.site/2b9380cae34b4952808065450308343a?v=903df5f0203b448fabb7150ae9f977b3) y duplica el template en tu notion.
![duplicar](https://i.imgur.com/7zNLHNU.png)


Una vez duplicado el template, en la url de la base de datos **copiar el id de la base de datos**.
![url base datos](https://i.imgur.com/uhUacsX.png)

```
https://www.notion.so/myworkspace/a8aec43384f447ed84390e8e42c2e089?v=...
                                  |--------- Database ID --------|
```

##Compartir tu base de datos con la integración de Notion
__Ya duplicado el template de notion vamos ha integrarlo con la API para eso vasmo as eguir los siguientes pasos:__

1. Abrir la base de datos como una página y hacer clic en el boton de "Share".
2. Seleccionar la integración que se habia creado.
![link database](https://files.readme.io/0a267dd-share-database-with-integration.gif)

Si quieres tener mas información de como usar la API de notion puedes ver en su pagina [oficial](https://developers.notion.com/docs/getting-started)

### Uso del Plugin 🔧

Una vez que tengas el **token de la integración de Notion** y el **Id de la base de datos**. 
Se procede a instalar de forma local el plugin. 
1. Ingresa al administrador de extensiones mediante el navegador a `chrome://extensions`
2. Habilita el modo desarrollador.
3. Clic en el botón "Load unpacked" y selecciona el directorio de la extensión.
![DEVELOPER](https://wd.imgix.net/image/BhuKGJaIeLNPW9ehns59NfwqKxF2/vOu7iPbaapkALed96rzN.png?auto=format&w=571)
4. Finalmente tendras instalada la extensión.

![plugin instalada](https://i.imgur.com/nToFFcx.png)

## Mostrar Plugin
Para tener disponible en tu explorador hacer clic en el icono de extensiones y habilitar le extensión.
![activar plugin](https://i.imgur.com/aPMOnmn.png)

## Configurar plugin
1. Hacer clic sobre el icono del plugin y seleccionar "options"

![options](https://i.imgur.com/sIjinjC.png)
2. En donde nos mostrará una pantalla donde colocaremos el **Token de Notion** y el **Id de la base de datos** que lo obtuvimos anteriormente

![tokens](https://i.imgur.com/8vxPLfg.png)

## Crear tu primer Curso
---
Si haz seguido todos los paso podras ir a tu curso favorito de platzi y este se generar en tu notion.
1. Acceder al plugin 
2. Clic en "Obtener Datos del Curso"
3. Clic en "Generar Página"
![uso](https://i.imgur.com/GAFQbGl.png)
Si te diriges a tu notion ya tienes el curso generado.
![curso](https://i.imgur.com/DCdN37m.png)

##Construido con 🛠️
---

* [Notion Developer](https://developers.notion.com/docs/getting-started) - Api de Notion
* [JavaScrip](https://developer.mozilla.org/es/docs/Web/JavaScript) - Lenguaje de programación
* [Chrome Developer Plugin](https://developer.chrome.com/docs/extensions/mv3/getstarted/) - Creación de extensiones

## Autors ✒️

* **Javier Manobanda** - *Trabajo Inicial* - [Github](https://github.com/JaviMiot)


## License 📄
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---
⌨️ with❤️ by [Javier Manobanda](https://github.com/JaviMiot)😊