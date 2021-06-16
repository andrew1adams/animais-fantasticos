export function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')

  function scrollToSection() {
    const href = this.getAttribute('href')
    const section = document.querySelector(href)

    section.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    })

    // const top = section.offsetTop

    // window.scrollTo({
    //   top: top,
    //   behavior: "smooth"
    // }) //v1

    // NENHUMA DESSAS PORRA FUNCIONA
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
}
