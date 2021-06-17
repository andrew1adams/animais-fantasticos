export default class Modal {
  constructor(openButton, closeButton, containerModal) {
    this.openButton = document.querySelector(openButton)
    this.closeButton = document.querySelector(closeButton)
    this.containerModal = document.querySelector(containerModal)

    // bind this ao callback para referenciar o objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.clickOut = this.clickOut.bind(this)
  }

  // adiciona ou remove a classe ativo
  toggleModal() {
    this.containerModal.classList.toggle('ativo')
  }

  // previne o padrão
  eventToggleModal(event) {
    event.preventDefault()
    this.toggleModal()
  }

  // fecha o modal ao clicar fora do elemento
  clickOut(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event)
    }
  }

  // add os eventos aos elementos
  addModalEvent() {
    this.openButton.addEventListener('click', this.eventToggleModal)
    this.closeButton.addEventListener('click', this.eventToggleModal)
    this.containerModal.addEventListener('click', this.clickOut)
  }

  // inicia a função
  init() {
    if (this.openButton && this.closeButton && this.containerModal) {
      this.addModalEvent()
    }
    return this
  }
}
