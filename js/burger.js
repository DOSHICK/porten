let burgerBtn = document.querySelector('.header__burger-btn')

let burgerBody = document.querySelector('.header__nav-list')
burgerBtn.onclick = () =>{
  burgerBtn.classList.toggle("open")
  burgerBody.classList.toggle("visible")
}