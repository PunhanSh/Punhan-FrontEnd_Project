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

  let myinput = document.querySelector(".form-group input")

  let myclick = document.getElementsByClassName("sendmessagecontact")[0]
  

  myclick.addEventListener("click", (e) =>{
    e.preventDefault();
    let value1 = myinput.textContent[1];
    console.log(value1);

  })