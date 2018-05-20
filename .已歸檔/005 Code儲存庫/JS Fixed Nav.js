let targetNav = document.querySelector('#fixedNav')

fixedNavPure(targetNav)

window.addEventListener('scroll', toggleNavFixed)
function toggleNavFixed() {
  let scrollPosition = window.pageYOffset
  targetNav.classList.add('navSticky')
  if (scrollPosition > targetNav.offsetTop) {
    targetNav.classList.add('navSticky')
  } else {
    targetNav.classList.remove('navSticky')
  }
}

//* 似乎沒差別
function fixedNavPure(dom) {
  let newNav = `<div id="navJumpFix">${dom.outerHTML}</div>`
  dom.innerHTML = newNav
  let navJumpFix = document.querySelector('#navJumpFix')
  let h = dom.offsetHeight
  navJumpFix.offsetHeight = h
}
