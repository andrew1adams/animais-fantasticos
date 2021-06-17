export default class AnimaNumber {
  constructor(numbers, observeTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers)
    this.observeTarget = document.querySelector(observeTarget)
    this.observerClass = observerClass

    this.handleMutation = this.handleMutation.bind(this)
  }

  // recebe o elemento do dom com número em seu texto
  // a partir de 0 ele incremeneta até o número final
  static incNumber(number) {
    const total = +number.innerText
    const inc = Math.floor(total / 200)
    let start = 0
    const timer = setInterval(() => {
      start += inc
      number.innerText = start
      if (start > total) {
        number.innerText = total
        clearInterval(timer)
      }
    }, 25 * Math.random());
  }

  // ativa o incremento dos números de forma aleatória aos elementos
  numberAnimation() {
    this.numbers.forEach((number) => {
      this.constructor.incNumber(number)
    })
  }

  // função que ocorre quando a mutação for consolidada
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect()
      this.numberAnimation()
    }
  }

  // adiciona MutationObserver para verificar quando a classe ativo é adicionada ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation)
    this.observer.observe(this.observeTarget, { attributes: true })
  }

  // inicia o método
  init() {
    if (this.numbers.length && this.observeTarget) {
      this.addMutationObserver()
    }
    return this
  }
}
