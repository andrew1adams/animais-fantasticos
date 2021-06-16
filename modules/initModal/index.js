export function initModal() {
  const openButton = document.querySelector('[data-modal="abrir"]')
  const closeButton = document.querySelector('[data-modal="fechar"]')
  const containerModal = document.querySelector('.modal-container')

  function toggleModal(event) {
    event.preventDefault()
    containerModal.classList.toggle('ativo')
  }

  function clickOut(event) {
    if (event.target === this) {
      toggleModal(event)
    }
  }

  if (openButton && closeButton && containerModal) {
    openButton.addEventListener('click', toggleModal)
    closeButton.addEventListener('click', toggleModal)
    containerModal.addEventListener('click', clickOut)
  }
}
