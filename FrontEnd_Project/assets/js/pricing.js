
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