//start header section
let searchBtn = document.querySelector('#search-btn');
let searchBar =  document.querySelector('.search-bar-container');

let formBtn = document.querySelector('#login-btn');
let loginForm =  document.querySelector('.login-form-container');
let formClose =  document.querySelector('#form-close');

let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');


///////////////////////////////////////////////////
/*======================Scroll section active link===================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header .navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  /*======================sticky navbar===================*/
  let header = document.querySelector("header");
 header.classList.toggle("sticky", window.scrollY > 100);

  /*======================remove toggle icon and navbar when  click navbar link (scroll)===================*/
 searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
};



///////////////////////////////////////////////////

/*window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
     
}*/
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
    
});

formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
    
});





//end header section



/* home section start */

let videoBtn=document.querySelectorAll('.vid-btn');

videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls  .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

/* home section start */

/* swiper*/

var swiper = new Swiper(".review-slider", {
spaceBetween:20,
loop:true,
autoplay:{
    delay:0,
    disableOnInteraction:false,
},
breakpoints:{
    640:{
        slidesPerView:1,
    },
    768:{
        slidesPerView:2,
    },
     1024:{
        slidesPerView:3,
    },
},

});

var swiper = new Swiper(".brand-slider", {
spaceBetween:20,
loop:true,
autoplay:{
    delay:0,
    disableOnInteraction:false,
},
breakpoints:{
    450:{
        slidesPerView:2,
    },
    768:{
        slidesPerView:3,
    },
     991:{
        slidesPerView:4,
    },

     1200:{
        slidesPerView:5,
    },
},

});
