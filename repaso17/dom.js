/**
 * DOM -> Document Object Model
 */


 /**
  * Obtener elementos del DOM
  * document.getElementById('id')
  * document.querySelector('cssSelector')
  * document.querySelectorAll('cssSelector')
  * 
  * 
  *  * si nose encuentra el o los elementos se devuelve null
  * 
  * querySelector y querySelectorAll
  *     Se pueden ejecutar desde el documento o desde un elemento,
  *     querySelectorAll no devuelve un array (nodeList), es necesario expandirlo
  */


//TIP
let menu = document.getElementById('menu'),
    menuLinks = [...menu.querySelectorAll('a')]

console.log(menuLinks)


/**
 * 
 * DOM traversing -- moverse a travez del DOM
 * 
 */

let menuItems = [...menu.querySelectorAll('li')]

console.dir(menuItems)



// El DOM se divide atravez de nodos , todo es un nodo 
/**
 * 
 * Hermanos
 *      element.nextElementSibling -> hermano siguiente (elemento)
 *      element.nextSibling -> hhermano siguiente (nodo)
 *      element.previousElementSibling -> hermano anterior (elemento)
 *      element.previousSibling -> hermano anterior (nodo)
 * 
 * Padres
 *      element.parentElement -> padre (elemento)
 *      element.parentNode ->padre (Nodo)
 * 
 * Hijos
 *      element.children -> lista de elementos hijos
 *      element.firstElementChild ->primer hijo
 *      element.lastElementChild ->ultimo hijo
 *      element.childNodes ->todos los nodos hijos
 */
// [...document.links].map((element)=>{
//   element.style.color = "red"
// })

/**
 * Propiedades de los elementos del DOM
 *  Contenido 
 *      .textContent -> me devuelve el texto plano del documento (lectura y escritura)
 *      .innerHTML -> retora el HTML del elemento  , es decir con la etiqueta y todo
 * 
 *  Atributos
 *      .attributes
 *      .getAttribute('attr')
 *      .getAttribute('attr','value')
 *      .removeAttribute('attr')
 * 
 * Clases
 *    .classList
 *        .add('className')
 *        .remove('classNome')
 *        .toggle('className')
 *        .contains('ClassName') ->devuelve true si el elemneto contiene esa clase : muy usada para la delegacion de eventos
 */


/**
 * 
 * TRANSFORMAR EL DOM 
 *      CREAR ELEMENTOS
 *          document.createElement('tagName')
 *          
 *      INSERTAR ELEMENTOS
 *          parent.appendChild(childElement)
 *          
 * 
 */
let el = document.createElement('li')
el.textContent='Soy un nuevo elemento'
menu.appendChild(el)

let elem = document.createElement('li')
el.textContent="Primer elemento"
menu.insertBefore(el,menuItems[1])