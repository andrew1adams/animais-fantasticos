import { outsideClick } from '../outsideClick/index.js'

export default class DropDownMenu {
  constructor(dropDownMenus, events) {
    this.dropDownMenus = document.querySelectorAll(dropDownMenus)

    // define '[touchstart, 'click']' como evento padrão
    if (events === undefined) {
      this.eventsList = ['touchstart', 'click']
    } else {
      this.eventsList = events
    }
    this.activeClass = 'ativo'

    this.activeDropDownMenu = this.activeDropDownMenu.bind(this)
  }

  // ativa o dropDownMenu e adiciona a função de verificar o click fora dele
  activeDropDownMenu(event) {
    event.preventDefault()
    const element = event.currentTarget

    element.classList.add(this.activeClass)
    outsideClick(element, this.eventsList, () => {
      element.classList.remove(this.activeClass)
    })
  }

  // adiciona os eventos ao dropdownmenu
  addDropDownEvent() {
    this.dropDownMenus.forEach((menu) => {
      this.eventsList.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu)
      })
    })
  }

  init() {
    if (this.dropDownMenus.length) {
      this.addDropDownEvent()
    }
    return this
  }
}
