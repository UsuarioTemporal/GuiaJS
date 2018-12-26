# RepasoJS
Curso de JS para que chavex repase 
## ECMA INTERNATIONAL (European Computer Manufectures Association)
La industria encargada de la estandarización de js y otras tecnologias.

[Mas referencias](https://es.wikipedia.org/wiki/Ecma_International)


## Tipos de datos
Antes de empezar hay que aclarar el scope de las varibles `var` y `let` , estos sirven para la declaracion de variables aunque si JS tambien deja declarar variables sin estas palabras reservadas

```javascript
    let number = 3
    var num= 3
    numero = 3
    // lo mejor
    for(let item=0;item<5;item++){
        console.log(item)
    }
    //aqui dara error por que esta variable no existe 
    console.log(item)

    //lo peor , dejemos de usar var
    for(var item=0;item<5;item++){
        console.log(item)
    }
    //aqui no dara error por que esta variable si existe
    console.log(item)
```


## TYPE COERTION