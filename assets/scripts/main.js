const nav = document.getElementById('nav')
const mobileToggle = document.getElementById('mobile-toggle')
const maxMobileWidth = 766
let navOpen = false

function toggleNav() {
  navOpen = !navOpen
  document.getElementById('mobile-toggle').innerHTML = navOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>'
  document.getElementById('nav').style.height = navOpen ? '200px' : '0'
}

function updateElements() {
  if (window.innerWidth > maxMobileWidth) {
    navOpen = false
    document.getElementById('nav').style.height = ''
    document.getElementById('mobile-toggle').innerHTML = '<i class="fa-solid fa-bars"></i>'
  }
}
