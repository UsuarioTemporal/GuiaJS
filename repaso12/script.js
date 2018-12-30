// Eventos del rato
const apretar = ()=>{
    alert("Hola a todos");
};
const hover = ()=>{
    alert("HOVER");
};
const afueraDeEsto=()=>{
    alert("Estuviste afuera");
};
// let evento = document.querySelector(".btnSaludar");

// evento.addEventListener(()=>{
    
// })

document.getElementById("btnSaludar").addEventListener("click",()=>{
    alert("Hola")
});


// Eventos de teclado
// keyDown
// keyPress
// keyUp

window.addEventListener("keydown",()=>{
    // alert("KEY DOWN , se apretó una tecla");
    console.log("Se apretó una tecla")
})
window.addEventListener("keypress",(event)=>{
    console.log("Se está aprentando una tecla "+String.fromCharCode(event.keyCode))
})