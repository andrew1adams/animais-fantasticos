export function initToolTip() {
  const toolTips = document.querySelectorAll('[data-tooltip]')
  const onMouseMove = {
    toolTipBox: '',
    element: '',
    handleEvent(event) {
      this.toolTipBox.style.top = `${event.pageY} 20px`
      this.toolTipBox.style.left = `${event.pageX} 20px`
    },
  }
  const onMouseLeave = {
    toolTipBox: '',
    element: '',
    handleEvent() {
      this.toolTipBox.remove()
      this.element.removeEventListener('mouseleave', onMouseLeave)
      this.element.removeEventListener('mousemove', onMouseMove)
    },
  }

  function createToolTip(element) {
    const toolTipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    toolTipBox.classList.add('toolTip')
    toolTipBox.innerText = text
    document.body.appendChild(toolTipBox)
    return toolTipBox
  }

  function onMouseOver() {
    const toolTipBox = createToolTip(this)

    onMouseMove.toolTipBox = toolTipBox
    this.addEventListener('mousemove', onMouseMove)

    onMouseLeave.toolTipBox = toolTipBox
    onMouseLeave.element = this
    this.addEventListener('mouseleave', onMouseLeave)
  }

  toolTips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver)
  })
}
