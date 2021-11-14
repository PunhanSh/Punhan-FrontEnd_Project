
let meetourexpertsscroll = document.getElementsByClassName("meetourexperts-card")
window.addEventListener("scroll", () => {
  if (window.pageYOffset > window.innerHeight - 600) {
    for (let i = 0; i < meetourexpertsscroll.length; i++) {
      meetourexpertsscroll[i].classList.add("meetourexperts-active");      
    }
  }
});


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
