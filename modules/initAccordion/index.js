export function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')

  function activeAccordion() {
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo')
  }

  if (accordionList.length) {
    accordionList[0].nextElementSibling.classList.add('ativo')

    accordionList.forEach((param) => {
      param.addEventListener('click', activeAccordion)
    })
  }
}
