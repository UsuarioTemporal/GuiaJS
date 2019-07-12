// Añadir un objeto de atributos a un elemento
const addAttributes = (element,attrObj)=>{
    for(let attr in attr){
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

            }else{

            }
        }) 
}