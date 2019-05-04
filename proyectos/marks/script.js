let container  = document.getElementById("container")
const createIcon = e=>{
    let div = document.createElement('div')
    div.style.position="absolute"
    div.style.background="red"
    div.style.borderRadius="50%"
    div.style.height=div.style.width=`10px`
    div.style.top=`${e.pageY}px`
    div.style.zIndex="10"
    div.style.left=`${e.pageX}px`
    container.appendChild(div)

}
container.addEventListener('contextmenu',e=>{
    e.preventDefault()
    createIcon(e)
})