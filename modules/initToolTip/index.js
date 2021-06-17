export default class ToolTip {
  constructor(toolTip) {
    this.toolTips = document.querySelectorAll(toolTip)

    // bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
  }

  // move a toolTip de acordo com a posição do mouse
  onMouseMove(event) {
    this.toolTipBox.style.top = `${event.pageY + 20}px`

    if (event.pageX + 240 > window.innerWidth) {
      this.toolTipBox.style.left = `${event.pageX - 200}px`
    } else {
      this.toolTipBox.style.left = `${event.pageX + 20}px`
    }
  }

  // remove a tooltip e seus eventos
  onMouseLeave(event) {
    this.toolTipBox.remove()
    event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave)
    event.currentTarget.removeEventListener('mousemove', this.onMouseMove)
  }

  // cria tooltip box e coloca no body
  createToolTip(element) {
    const toolTipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    toolTipBox.classList.add('toolTip')
    toolTipBox.innerText = text
    document.body.appendChild(toolTipBox)
    this.toolTipBox = toolTipBox
  }

  // cria a tooltip e adiciona seus eventos
  onMouseOver(event) {
    // cria a tooltip e põe em uma propriedade
    this.createToolTip(event.currentTarget)

    event.currentTarget.addEventListener('mousemove', this.onMouseMove)
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave)
  }

  // adiciona os eventos de mouseover
  addToolTipsEvents() {
    this.toolTips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver)
    })
  }

  // inicia a função
  init() {
    if (this.toolTips.length) {
      this.addToolTipsEvents()
    }
    return this
  }
}
