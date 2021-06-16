export function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
  const tabContent = document.querySelectorAll('[data-tab="content"] section')

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo')
    })
    tabContent[index].classList.add('ativo')
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo')

    tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}
