let ArrContent = [...document.querySelectorAll('.acordeon__content')]
document.getElementById('acordeon').addEventListener('click',e=>{
    e.preventDefault()
    let target = e.target
    if(target.tagName!=='H3') return
    ArrContent.forEach(cont=>{
        if(cont.classList.contains('active') && cont!==target.nextElementSibling)
            cont.classList.remove('active')
    })
    target.nextElementSibling.classList.toggle('active')
})