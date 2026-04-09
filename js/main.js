window.addEventListener("load", ()=>{
    // 헤더 서브메뉴 배경
    const mainMenu = document.querySelector(".menu-list")
    const headerBg = document.querySelector(".header-bg")
    mainMenu.addEventListener("mouseenter", ()=>{
        headerBg.style.height = "180px"
    })
    mainMenu.addEventListener("mouseleave", ()=>{
        headerBg.style.height = "0px"
    })
    // 스와이퍼
    var swiper = new Swiper(".visual-swiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
    // 뉴 스와이퍼
    var swiper = new Swiper(".new-swiper", {
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
})
