let container  = document.getElementById("container")
const createIcon = e=>{
    let div = document.createElement('div') 
    div.style.content=" "
    div.innerHTML=`asd`
    // div.style.zIndex="100"
    div.style.position="fixed"
    div.style.background="red"
    // div.style.borderRadius="50%"
    div.style.top=`${e.pageY}px`
    div.style.left=`${e.pageX}px`
    container.appendChild(div)

}
container.addEventListener('contextmenu',e=>{
    e.preventDefault()
    createIcon(e)
})