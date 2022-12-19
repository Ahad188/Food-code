// swiper js
var swiper = new Swiper(".home", {
     spaceBetween: 30,
     centeredSlides: true,
     
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
   });
//    menubar
   
   var menu = document.getElementById("menu-icon");
   var list = document. querySelector(".navber");

   menu.onclick = () =>{
     menu.classList.toggle("bx-x");
     list.classList.toggle("active");
   };

   window.onscroll = () =>{
     menu.classList.remove("bx-x");
     list.classList.remove("active");
   }