import { outsideClick } from '../outsideClick/index.js'

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton)
    this.menuList = document.querySelector(menuList)
    if (events === undefined) {
      this.eventsList = ['touchstart', 'click']
    } else {
      this.eventsList = events
    }
    this.activeClass = 'ativo'

    this.openMenu = this.openMenu.bind(this)
  }

  openMenu(event) {
    event.preventDefault()
    this.menuList.classList.add(this.activeClass)
    this.menuButton.classList.add(this.activeClass)
    outsideClick(this.menuList, this.eventsList, () => {
      this.menuList.classList.remove(this.activeClass)
      this.menuButton.classList.remove(this.activeClass)
    })
  }

  addMenuMobileEvents() {
    this.eventsList.forEach((event) => {
      this.menuButton.addEventListener(event, this.openMenu)
    })
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents()
    }
    return this
  }
}
