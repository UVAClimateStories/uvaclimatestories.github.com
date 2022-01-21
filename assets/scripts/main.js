const maxMobileWidth = 766
let navOpen = false

function toggleNav() {
  navOpen = !navOpen
  document.getElementById('mobile-toggle').innerHTML = navOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>'
  document.getElementById('nav').style.maxHeight = navOpen ? '250px' : '0'
}

function updateElements() {
  if (window.innerWidth > maxMobileWidth) {
    navOpen = false
    document.getElementById('nav').style.maxHeight = ''
    document.getElementById('mobile-toggle').innerHTML = '<i class="fa-solid fa-bars"></i>'
    stickyNav()
  } else {
    nav.classList.remove('sticky')
  }
}
