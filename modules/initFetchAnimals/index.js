import { initAnimaNumber } from '../initAnimaNumber/index.js'

export function initFetchAnimals() {
  function createAnimal(animal) {
    const div = document.createElement('div')
    div.classList.add('numero-animal')
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`
    return div
  }

  async function fetchAnimals(url) {
    try {
      const animalsResponse = await fetch(url)
      const animalsJSON = await animalsResponse.json()
      const numberGrid = document.querySelector('.numeros-grid')
      animalsJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal)
        numberGrid.appendChild(divAnimal)
      })

      initAnimaNumber()
    } catch (error) {
      console.log(Error(error))
    }
  }

  fetchAnimals('./data/animalsapi.json')
}
