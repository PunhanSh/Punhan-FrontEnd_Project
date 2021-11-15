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