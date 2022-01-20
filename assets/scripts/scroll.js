const nav = document.getElementById('nav')
const content = document.getElementById('content')
const title = document.getElementById('site-title')
const navSticky = nav.offsetTop
const titleSticky = title.offsetTop

function stickyNav() {
  if (window.innerWidth > maxMobileWidth) {
    if (window.pageYOffset > navSticky) {
      nav.classList.add('sticky')
      content.style.paddingTop = '50px'
    } else {
      nav.classList.remove('sticky')
      content.style.paddingTop = ''
    }
  }
  // } else {
  //   if (window.pageYOffset > titleSticky) {
  //     title.classList.add('sticky')
  //     content.style.paddingTop = '50px'
  //     if (navOpen) {
  //       nav.classList.add('sticky-mobile')
  //     } else {
  //       nav.classList.remove('sticky-mobile')
  //     }
  //   } else {
  //     title.classList.remove('sticky')
  //     content.style.paddingTop = ''
  //     nav.classList.remove('sticky-mobile')
  //   }
  // }
}
