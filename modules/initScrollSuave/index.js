export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links)

    if (options === undefined) {
      this.options = {
        behavior: 'smooth',
        block: 'start',
      }
    } else {
      this.options = options
    }

    this.scrollToSection = this.scrollToSection.bind(this)
  }

  // método para dar o efeito de rolagem
  scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView(this.options)
  }

  // adiciona o evento de click
  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollToSection)
    })
  }

  // inicia o método
  init() {
    if (this.linksInternos.lenght) {
      this.addLinkEvent()
    }
    return this
  }
}
