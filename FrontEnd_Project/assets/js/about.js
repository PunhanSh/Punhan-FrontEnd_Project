let youtubevideofooterscroll = document.getElementsByClassName("youtubevideo-footer")[0]
window.addEventListener("scroll", () => {
  if (window.pageYOffset > window.innerHeight + 400) {
      youtubevideofooterscroll.classList.add("youtubevideo-footer-active");
  }
});

let youtubevideoquestionscroll = document.getElementsByClassName("youtubevideo-question")[0]
window.addEventListener("scroll", () => {
  if (window.pageYOffset > window.innerHeight + 400) {
      youtubevideoquestionscroll.classList.add("youtubevideo-question-active");
  }
});

let meetourexpertsscroll = document.getElementsByClassName("meetourexperts-card")
window.addEventListener("scroll", () => {
  if (window.pageYOffset > window.innerHeight + 800) {
    for (let i = 0; i < meetourexpertsscroll.length; i++) {
      meetourexpertsscroll[i].classList.add("meetourexperts-active");      
    }
  }
});

//Slider
$('.featuredbyslider').owlCarousel({
  loop:true,
  margin:50,
  nav:false,
  dots:false,
  autoplay:true,
  responsive:{
      0:{
          items:3
      },
      768:{
          items:3
      },
      992:{
          items:4
      }
  }
})

$(".whatsourclients-slider").owlCarousel({
  loop: true,
  margin: 10,
  autoplay:true,
  dots:true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    992: {
      items: 2,
    },
  },
});

let pagetop = document.querySelector(".go-top-button")

window.addEventListener("scroll",() =>{
  if (window.pageYOffset > 800) {
    pagetop.classList.add("active");
  } else {
    pagetop.classList.remove("active");
  }
});
pagetop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 200) {
    document.getElementById("nav").classList.add("active"); 
   } 
   else {
      document.getElementById("nav").classList.remove("active");
    }
});

let navclick = document.getElementsByClassName("navdot")[0];

navclick.addEventListener("click", () => {
  navclick.nextElementSibling.classList.toggle("active")
})