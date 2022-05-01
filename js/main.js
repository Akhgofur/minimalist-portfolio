const elHeaderNav = document.querySelector('.sitenav')
const elHeaderBtn = document.querySelector('.nav-toggler')

// site-header__nav--open

elHeaderBtn.addEventListener('click', () => {
  elHeaderNav.classList.toggle('sitenav--open')
  elHeaderBtn.classList.toggle('nav-toggler--open')
})