function toggleMenu(e){
    if(e.type === "touchstart") e.preventDefault()
    const nav = document.getElementById("header__nav")
    nav.classList.toggle("active")
    const active = nav.classList.contains("active")
    e.currentTarget.setAttribute("aria-expanded",active)
    if(active){
        e.currentTarget.setAttribute("aria-label","Fechar menu")
    }else{
        e.currentTarget.setAttribute("aria-label","Abrir menu")
    }
}

function menuBurguer(){
    const btnMenu = document.getElementById("btn__menu")
    btnMenu.addEventListener("click",toggleMenu)
    btnMenu.addEventListener("touchstart",toggleMenu)
}
menuBurguer()
