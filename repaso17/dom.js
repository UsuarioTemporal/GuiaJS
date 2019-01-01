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
 * element.nextElementSibling -> hermano siguiente
 * element.previousElementSibling ->hermano anterior
 * element.parentElement ->padre
 * element.children ->lista de hijos
 * element.firtElementChild 
 * 
 */