window.addEventListener("load", ()=>{
    const mainMenu = document.querySelector(".menu-list")
    const headerBg = document.querySelector(".header-bg")
    mainMenu.addEventListener("mouseenter", ()=>{
        headerBg.style.height = "180px"
    })
    mainMenu.addEventListener("mouseleave", ()=>{
        headerBg.style.height = "0px"
    })
})