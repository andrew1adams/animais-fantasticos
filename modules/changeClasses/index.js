export function changeClasses() {
  const sections = document.querySelectorAll('.animais-descricao section')

  sections.forEach((section, index) => {
    const contitionIf = [index] % 2 === 0
    if (contitionIf) {
      section.classList.add(section.dataset.anime = 'show-down')
    } else {
      section.classList.add(section.dataset.anime = 'show-right')
    }
  })

  sections.forEach((section) => {
    if (section.dataset.anime === 'show-down') {
      section.classList.add('show-down')
    } else if (section.dataset.anime === 'show-right') {
      section.classList.add('show-right')
    } else {
      console.log('Nenhuma classe foi definida.')
    }
  })
}
