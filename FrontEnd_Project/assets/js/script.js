$(document).ready(function(){
    $(".my-carousel").owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
    responsiveClass:true,
    responsive:{
      0:{
        items: 1,
      }
    }
    });
  });

let accordionclick = document.querySelectorAll(".gettoknow-accordion ul li a")
let accordionicon = document.querySelectorAll(".gettoknow-accordion ul li a i")
let accordiontext = document.querySelectorAll(".gettoknow-accordion ul li")
console.log(accordiontext)
for (let i = 0; i < accordionclick.length; i++) {
  accordionclick[i].addEventListener("click", e => {
    e.preventDefault();
    for (let j = 0; j < accordiontext.length; j++) {
      if (!accordiontext[i].classList.contains("accordion-active")) {
        accordiontext[j].classList.remove("accordion-active")
      }
      if (!accordionicon[i].classList.contains("fa-minus")) {
        accordionicon[j].classList.remove("fa-minus")
        accordionicon[j].classList.add("fa-plus")
      }
    }  
    accordiontext[i].classList.toggle("accordion-active");
    accordionicon[i].classList.toggle("fa-plus")
    accordionicon[i].classList.toggle("fa-minus")   
  })

}

let uiuxscroll = document.getElementsByClassName("uiux-image")[0];
window.addEventListener("scroll", () => {
  if (window.pageYOffset > window.innerHeight - 100) {
    uiuxscroll.classList.add("uiux-active");
  }
});

let digitalscroll = document.querySelector("#digital-marketing .uiux-image");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > window.innerHeight + 800) {
    digitalscroll.classList.add("digital-active");
  }
});

let plansscroll = document.getElementsByClassName("main-plans")
window.addEventListener("scroll", () => {
  if (window.pageYOffset > window.innerHeight - 400) {
    for (let i = 0; i < plansscroll.length; i++) {
      plansscroll[i].classList.add("plans-active");      
    }
  }
});

let ouramazingscroll = document.getElementsByClassName("ouramazing-card")
window.addEventListener("scroll", () => {
  if (window.pageYOffset > window.innerHeight + 1600) {
    for (let i = 0; i < ouramazingscroll.length; i++) {
      ouramazingscroll[i].classList.add("ouramazing-active");      
    }
  }
});

//meetour
let meetourexpertsscroll = document.getElementsByClassName("meetourexperts-card")
window.addEventListener("scroll", () => {
  if (window.pageYOffset > window.innerHeight + 5800) {
    for (let i = 0; i < meetourexpertsscroll.length; i++) {
      meetourexpertsscroll[i].classList.add("meetourexperts-active");      
    }
  }
});


//youtube-video
let youtubevideofooterscroll = document.getElementsByClassName("youtubevideo-footer")[0]
window.addEventListener("scroll", () => {
  if (window.pageYOffset > window.innerHeight + 3900) {
      youtubevideofooterscroll.classList.add("youtubevideo-footer-active");
  }
});

let youtubevideoquestionscroll = document.getElementsByClassName("youtubevideo-question")[0]
window.addEventListener("scroll", () => {
  if (window.pageYOffset > window.innerHeight + 3900) {
      youtubevideoquestionscroll.classList.add("youtubevideo-question-active");
  }
});
 

$(".my-carousel2").owlCarousel({
  loop: true,
  margin: 25,
  nav: true,
  dots:true,
  autoplay:true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 2,
    },
    992: {
      items: 2,
    },
  },
});

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 200) {
    document.getElementById("nav").classList.add("active"); 
   } 
   else {
      document.getElementById("nav").classList.remove("active");
    }
});

let allyearly = document.getElementsByClassName("chooseplan-plans-yearly");
let monthly = document.getElementById("monthly");
let yearly = document.getElementById("yearly");

yearly.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < allyearly.length; i++) {
    monthly.style.color = "#8d8fb4";
    monthly.style.backgroundColor = "#fff";

    yearly.style.color = "#fff";
    yearly.style.backgroundColor = "#080a3c";

    allyearly[i].classList.add("active")    
  }  
});

monthly.addEventListener("click", (e) => {
  e.preventDefault();

  for (let i = 0; i < allyearly.length; i++) {    
    yearly.style.color = "#8d8fb4";
    yearly.style.backgroundColor = "#fff";

    monthly.style.color = "#fff";
    monthly.style.backgroundColor = "#080a3c";

    allyearly[i].classList.remove("active");    
  }
});


//Gotop
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


//Navbar
let navclick = document.getElementsByClassName("navdot")[0];

navclick.addEventListener("click", () => {
  navclick.nextElementSibling.classList.toggle("active")
})


window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 200) {
    document.getElementById("nav").classList.add("active"); 
   } 
   else {
      document.getElementById("nav").classList.remove("active");
    }
});