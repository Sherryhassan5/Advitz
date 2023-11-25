

let hamburger = document.getElementsByClassName("hamburger");
let ul = document.getElementsByClassName("ulhide");
let nav = document.querySelector("nav");
hamburger[0].addEventListener("click",(e) => {
  ul[0].classList.toggle("show");
  nav.classList.toggle("darkish");
});
ul[0].addEventListener("click",(e)=>{
  ul[0].classList.toggle("show");
  nav.classList.toggle("darkish");
});







setInterval(()=>{
    
}, 3000);

var typed = new Typed('#element', {
    strings: ['Question', 'Query','Project'],
    typeSpeed: 50,
    loop:true,
    loopCount: Infinity,
  });
