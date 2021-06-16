export function initAnimaNumber() {
  const observeTarget = document.querySelector('.numeros')
  let observer

  function numberAnimation() {
    const numbers = document.querySelectorAll('[data-numero]')

    numbers.forEach((number) => {
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
      }, 16 * Math.random());
    })
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect()
      numberAnimation()
    }
  }

  observer = new MutationObserver(handleMutation)

  observer.observe(observeTarget, { attributes: true })
}
