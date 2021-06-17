import AnimaNumber from '../initAnimaNumber/index.js'

export function initFetchAnimals(url, target) {
  // cria a div com as informações dos animais
  function createAnimal(animal) {
    const div = document.createElement('div')
    div.classList.add('numero-animal')
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`
    return div
  }

  const numberGrid = document.querySelector(target)

  // completa as lacunas com os animais
  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal)
    numberGrid.appendChild(divAnimal)
  }

  function initAnimaNumber() {
    const animaNumber = new AnimaNumber('[data-numero]', '.numeros', 'ativo')
    animaNumber.init()
  }

  // consome a api utilizando os dados obtidos e cria os animais com a function acima
  // método utilizado foi o async await
  async function createAnimals() {
    try {
      const animalsResponse = await fetch(url)
      const animalsJSON = await animalsResponse.json()
      animalsJSON.forEach((animal) => {
        fillAnimals(animal)
      })
      initAnimaNumber()
    } catch (error) {
      console.log(Error(error))
    }
  }

  return createAnimals()
}
