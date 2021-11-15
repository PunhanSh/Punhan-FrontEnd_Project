
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