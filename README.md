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
Como ya comprobamos un array vacio se comportara como un string vacio por lo que tu valor sera `false`(Falsy value), esto podria ser cierto bajo este contexto (es decir al comprobarlo con un string) pero que pasaria si comprobamos esto

```javascript
    if([]) console.log('estoy vacio')
    if('') console.log('estoy vacio')
```

```javascript
    >>> 'estoy vacio'
    >>> undefined
```

Pero que carajos ? , dije que un [] vacio retorna un false y un '' vacio igual , que esta pasando satanas?.

Lo que paso es que javascript intenta hacer compatible e intenta igualar los tipos de datos para poder trabajar a esto se le llama o como ya vemos en el subtitulo `type coercion` , por ende esto lleva a una maldita y sucia conclusión :(se puede contagiar) el virus se comporta dependiendo del huesped , es decir que la convercion de tipos actua dependiendo del contexto de donde se este trabajando.

```javascript
    >>> // Aclaración hecha por Christian Sotomayor
```

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


[Mas referencias](https://www.youtube.com/watch?v=j9xuvChJftg)

## **Programación asíncrona**
Los lenguajes de programacion asincronos se basan en llamadas que puedan ser cumnplidas ahora o en un futuro.Es decir , las variables pueden ser llenadas o asignadas en cualquier momento de la ejecucion del programa.
En conclusion la programacion asincrona establece la posibilidad de hacer que algunas operaciones devuelvan el control al programa llamante antes de que hayan terminado mientras siguen operando en segundo plano.Esto agiliza el proceso de ejecucion y en general permite aumentar la escalibilidad, pero complica el razonamiento sobre el programa.



## **Modelos de programacion asincronica**
Para dar respuesta al probelma anterior, se han establecido diferentes modelos de progrmacion asincrona .Lo que permitiran estos modelos es aproximar ala programacion asincronica a programacion secuencial.

- **Modelo de paso de continuadores :** <br>
    Es el modelo de asincronia más utilizado dentro de NodeJS,cada funcion recibe informacion acerca de como debe tratar el resultado (de exito o error) de cada operacion.
- **Modelo de eventos :** <br>
    Se utiliza una arquitectura dirigida por eventos que permiten a las operaciones no bloqueadas informar de su terminacion mediante señales de exito o fracaso.Requiere correlacion para sincronizar
- **Modelo de promesas :** <br>
    Se razona con los valores de retorno de las operaciones no bloqueantes de manera independiente del momento del tiempo en que dichos valores 
    ```javascript
    // Promesas
    
    const get = url => {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.addEventListener('load', _ => {
            if (xhr.status !== 200) {
                reject(new Error(xhr.statusText));
            }
            resolve(xhr.response);
            });
            
            xhr.open('GET', url);
            xhr.send();
        }
    }

    get('story.json').then(response => {
        console.log("Success!", response);
    }).catch(error => {
        console.error("Failed!", error);
    });
    ```
- **Modelo de generadores :**<br>
    Se utilizan generadores para devolver temporalmente el control al programa llamante y retorna en un momento del tiempo en que dichos valores (de exito o fallo) se obtengan.
#### **Ventajas**
Aumenta el throghput(eficiencia)
### **Desventajas**
Dificil entendimiento, aunque el principal problema de esto es cómo dar continuidad a las operaciones no bloqueadas del algoritmo una vez que éstas han terminado su ejecución


```javascript
    const funcion = (value,callback)=>{
        console.log('Valor',value)//3
        setTimeout(()=>{
            callback(value,Math.pow(value,2))//6
        },0|Math.random()*100)//4
    } // 1

    funcion(2,(value,resultado)=>{
        console.log('Valor ',value,' resultado ',resultado)//7
    }) // 2
    console.log('Terminado ? ')//5
    
```

Output :
```javascript
    >>> Valor 2
    >>> Terminado ?
    >>> Valor 2 resultado 4
```

## **JS como lenguaje asincrónico**
Este concepto quizá nos venga ala mente cuando tomamos el tema de apis con ajax o fetch que hacen peticiones asincrónicas 
```javascript
    const peticionAJAX = (URL)=>{
        const xhttp = new XMLHttpResquest()
        xhttp.open('GET',URL,true) // el true significará que la petición se realizará de manera asíncrona
    }
    const peticionFETCH = (URL)=>{
        fetch(URL).
        then(response=>response.json()).
        catch(_ =>{
            console.log('Error')
        })
    }
```

Se dice asincrono por que el código que obtendra solo se resolverá si es qyue el resquest HTTP sea resuelto , independiente que sea exitoso o no

## **Hilos**

Hay que aclarar que javascript no maneja el paradigma multihilo, el browser dedica un único hilo de ejecución a cada página , y no es posible crear hilos en una ejecución de javascript

## **Bundle**

![bundle](https://www.arquitecturajava.com/wp-content/uploads/JavaScriptBundleBrowserifyDiagram.png)

```javascript
    // Un bundle sirve para agrupar todos los ficheros de JavaScript en uno solo. Así el navegador no necesita hacer varias peticiones HTTP. Vamos a  instalar browserify usando npm.
```

[bundle](https://www.arquitecturajava.com/que-es-un-javascript-bundle/)