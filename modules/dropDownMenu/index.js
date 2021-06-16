import { outsideClick } from '../outsideClick/index.js'

export function dropDownMenu() {
  const dropDownMenus = document.querySelectorAll('[data-dropdown]')
  const eventsList = ['touchstart', 'click']

  function handleClick(event) {
    event.preventDefault()
    this.classList.add('ativo')
    outsideClick(this, eventsList, () => {
      this.classList.remove('ativo')
    })
  }

  dropDownMenus.forEach((menu) => {
    eventsList.forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick)
    })
  })
}
