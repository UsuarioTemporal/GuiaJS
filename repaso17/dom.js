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