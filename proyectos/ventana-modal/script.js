/**
 * https://www.w3schools.com/jsref/prop_node_nodetype.asp 
 * If the node is an element node, the nodeType property will return 1.

 * If the node is an attribute node, the nodeType property will return 2.

 * If the node is a text node, the nodeType property will return 3.

 * If the node is a comment node, the nodeType property will return 8.

    This property is read-only.
 */

// Añadir un objeto de atributos a un elemento
const addAttributes = (element,attrObj)=>{
    for(let attr in attrObj){
        if(attrObj.hasOwnProperty(attr))
            element.setAttribute(attr,attrObj[attr])
    }
}

//Crear elementos con atributos e hijo
const createCustomElement = (element,attributes,children)=>{
    let customElement = document.createElement(element)
    if (children!==undefined) 
        children.forEach(elem=>{
            if(elem.nodeType){
                if(elem.nodeType===1 || elem.nodeType===11) {
                    customElement.appendChild(elem)
                }
            }else{
                customElement.innerHTML+=elem
            }
        })
    addAttributes(customElement,attributes)
    return customElement 
}

//mostrar modal
const printModal = content =>{
    const modalContentElement = createCustomElement('div',{
        id:'modal-content',
        class:'modal-content'
    },[content]),
        modalContainerElement = createCustomElement('div',{
            id:'modal-container',
            class:'modal-container'
        },[modalContentElement])
    
    // imprimir el modal
    document.body.appendChild(modalContainerElement)
    const removeModal = ()=> document.body.removeChild(modalContainerElement)
    modalContainerElement.addEventListener('click',e=>{
        e.preventDefault()
        if(e.target===modalContainerElement) removeModal()
    })
}
document.getElementById('show-modal').addEventListener('click',e=>{
    e.preventDefault()
    printModal(`<h1>Hello World</h1>`)
})
