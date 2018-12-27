# RepasoJS
Curso de JS para que chavex repase 
## ECMA INTERNATIONAL (European Computer Manufectures Association)
La industria encargada de la estandarización de js y otras tecnologias.

[Mas referencias](https://es.wikipedia.org/wiki/Ecma_International)


## Tipos de datos
Javascript es un lenguaje dinamicamente tipado o debilmente tipado , esto quiere decir que no se colocara el tipo de dato cuando se quiere definir una variable (Al igual que python :3)


Javascript esta basado en prototipos ,esto biene incluido en las variables ,metodos , funciones,objetos, etc .

### Prototipos
Esto se puede encontrar mayormente en los objetos, esto quiere decir que todos los objetos dependen de un prototipo y que estos tambien son objetos .
En conclusion un prototipo es un objeto del que otros objetos heredan propiedades
- Objetos creados por `new Object()` heredan directamente dl objeto `Object.prototype`
- Objetos creados por `new Date()` heredan de `Date.prototype`

```javascript
    let texto = 'Que pex' 
    console.log(texto.length)
```
> **resultado** =  7
```javascript
    //primitivos
    string (texto)
    number (numeros)
    boolean ()
    undefined  //cuando no se le asigna ningun valor ala variable
    null //cuando el elemento no existe pero si se crea la variable



    //compuesto y objetos
    arrays
    objetos
    maps
    sets
    funciones
```

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

    //igual
    for (numero=0;numero<10;numero++){
        console.log(numero+" tipo "+typeof(numero))
    }
    console.log(numero)
```
## Truthy and falsy values

## TYPE COERTION