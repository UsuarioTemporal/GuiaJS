((d)=>{
    let tabs = [...d.querySelectorAll('.tabs__item')]
    let panels = [...d.querySelectorAll('.panels__item')]
    d.getElementById('tabs').addEventListener('click',e=>{
        e.preventDefault()
        // if(e.target.tagName==='LI') console.log('si')
        if(e.target.classList.contains('tabs__item')){
            let position = tabs.indexOf(e.target)
            tabs.forEach(tab=>tab.classList.remove('active'))
            panels.forEach(panel=>panel.classList.remove('active'))
            tabs[position].classList.add('active')
            panels[position].classList.add('active')
        }
    })
})(document);