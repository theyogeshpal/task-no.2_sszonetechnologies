let overlay = document.querySelector(".overlay");
let btn = document.querySelector(".menu");


let turnClose = true;

btn.addEventListener("click", () => {
   if (turnClose) {
    overlay.classList.remove("hide");
    
    turnClose = false;
    console.log("open");
   } else {
    overlay.classList.add("hide");
    turnClose = true;
    console.log("close");
   }
    
});