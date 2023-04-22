//const body = document.querySelector("body");
//const navbar = document.querySelector(".menu");

const button = document.querySelector('.button')
const nav    = document.querySelector('.nav')


button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})


//const button = document.querySelector('.button')
//const nav    = document.querySelector('.nav')

//button.addEventListener('click',()=>{
   //nav.classList.toggle('activo')
//})



//const cancelBtn = document.querySelector(".menu__btn-cancel");
//barBtn.onclick = () => {
  //  menu.classList.add("active");
  //  barBtn.classList.add("hide");
  // body.classList.add("disabledScroll");
//}
//cancelBtn.onclick = () => {
   // menu.classList.remove("active");
   //barBtn.classList.remove("hide");
   //body.classList.remove("disabledScroll");
//}

//window.onscroll = () => {
 //   this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky")
//}