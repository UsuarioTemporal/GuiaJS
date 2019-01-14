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

Truthy : String no vacios ,[],{},numeros diferentes de cero
<br>
Falsy : 0,String vacio,undefined,null,NaN


## TYPE COERCION

![Imagen Type](https://i.redd.it/4skcofasa1p01.png)

[Algunas referencias](https://dorey.github.io/JavaScript-Equality-Table/)<br>
Type coercion es el proceso que usa el interprete para poder convertir datos y poder obtener un resultado(como de `string` a `number`) ya sea de un tipo primitivo a objeto


```javascript
    let number = 5
    let string = '5'
    console.log(number+string)
```
Output :
```javascript
    >>> '55'
```
 Esto sucede ya que javascript fuerza a la variable number a convertise temporalmente en string para poder obtener un resultado de la operacion en este caso seria la concatenacion

 ```javascript
    // usando las variables anteriores
    let res = number == string
    console.log(res)
 ```
Output :
```javascript
    >>> true
```

¿Por que pasa esto ? , por lo mismo que el anterior , al no poder igualar una variable de tipo number al string , lo que hace es convertir temporalmente la varible de tipo number a string entonces estaria evaluento esto 
```javascript
    >>> '5' == '5'
```

Otros ejemplos

```javascript
    let number = 3
    let array = []
    console.log(number==array)
    console.log(number+array)
```
Output :
```javascript
    >>> false
    >>> '3'
```

Okay aquí vienen los problemas , por que al sumar una variable de tipo number con un array da `false` y al sumar da `'5'` en string, aquí viene la explicación , analicemos : 
```javascript
    let array = []
    console.log([]==false)
    console.log(''==false)
    console.log(''==[])
``` 
```javascript
    >>> true
    >>> true
    >>> true
```
Entonces como vemos el array vacio se comporta como un string , entonces al operar con un numero lo transformara temporalmente a un string

Cabe recalcar los valores Truthy and falsy values que son que valores toman valores verdadedos o valores falsos , entonces cuando se quiere comprar esto  `''==' '` dara falso ya que como los dos son tipos string por lo que el interprete no tendra la necesidad de convertir sino que igualara y al notar que un string vacio es `false` y un string con contenido es `true` es mas que obvio que retornara un `false`

Entonces al igualar u operar un array vacio con un numero es lo mismo que el primer ejemplo, cambiando algunas caracteristicas que tu mismo te daras cuenta :) .

### **Atención** : 
Como ya comprobamos un array vacio se comportara como un string vacio por lo que tu valor sera `false`(Falsy value) 

```javascript
    //Prueba
    console.log([]==false)


    //otra prueba
    if([]) console.log('Soy verdadero')

```

Output :
```javascript
    >>> true
    >>> 'Soy verdadero'
```
¿Pero que?, Como sabemos el array es falso , pero en la condicional actua como verdadero y esto es por el type coercion ,es decir el array se convierte en falsy value e intenta igualar al falsy value por lo que dara verdadero .

### Sugerencias 
Usar `===` y `!==` 