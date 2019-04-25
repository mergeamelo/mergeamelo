# ¿Qué es Mergeamelo?

Mergeamelo pretende ser un blog de programación en español donde haya posts de **cualquier lenguaje** y evitando que éstos sean a alto nivel, es decir, no encontrarás posts hablando, por ejemplo, de librerias muy por encima sino hablando de sus **cosas curiosas**, de trucos, de rendimiento, de problemas asociados, etc...

## ¿Cómo funciona Mergeamelo?

Mergeamelo funciona de una forma original que permite que cualquiera que esté dispuesto puede publicar un post aquí a través de un **Pull Request** en **Github**. La idea es que Mergeamelo esté mantenido por la comunidad de programadores y que sea un lugar donde leer posts de calidad. 

Los posts que se publiquen podrán ser **votados** por cualquiera en Github poniendo comentarios o sugiriendo mejoras para el mismo de esta forma es totalmente **open source** y **democrático**. Una vez que un post se pliegue contra master se publicará automáticamente.

## ¿Como escribo un post?

¡Fácil! Si sabes Markdown, claro... 😀. Lo único que tienes que hacer es hacerte un fork del repositorio que puedes encontrar pinchando [aquí](https://github.com/mergeamelo/mergeamelo). Una vez forkeado, clonate el proyecto en tu ordenador y simplemente tienes que crear un fichero Markdown en el directorio ```static/posts/{nombreDeTuPost.md}``` y ¡ponte a escribir! 

Cuando hayas acabado de escribir tu post tienes que añadir un fichero **.js** a la carpeta **pages** con el siguiente código:

```javascript
import React from 'react'
import Post from '../components/Post'

export default props => 
  <Post 
    fileName="nombreDeTuFicheroSinLaExtension" 
    authorName="Tu nombre" 
    twitter="Tu usuario de twitter si tienes"
    github="Tu usuario de github si tienes"
  />
```

¡Y ya estaría! Sólo te falta poner un **Pull Request** y esperar a que se pliegue 👏👏👏

## ¿Con qué esta hecho Mergeamelo?

Bueno, se puede ver en **Github** pero el proceso ha sido sencillo. Usamos Github como "base de datos" para guardar los posts que se escriben en Markdown. Después, es una pequeña aplicación montanda con **Next.js** y usamos **Netlify** para el despliegue automático. Esto nos permite ahorrarnos montar el clásico Wordpress y mantener un servicio, ahorrarnos la parte de seguridad ya que de eso se encarga Github y Netlify en poner el HTTPS. 

## Roadmap

Tenemos varias ideas para mejorar este blog, que en éste momento le faltan muchas cosas:

* Una manita de CSS 💅
* Mostrar breve descripcion del post y el autor en la lista de posts.
* Mostrar en la web los posts pendientes de aprobación que están en Github.
* Mostrar de alguna forma los votos que tiene en Github, ya sea haciendo un scrapper leyendo las 👍 o 👎 que haya en los comentarios.
* ¡Y muchas más que se nos irán ocurriendo y que podéis sugerir a través de una issue en [Github](https://github.com/mergeamelo/mergeamelo/issues)
