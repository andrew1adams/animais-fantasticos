import { debounce } from '../debounce'

export default class AnimationScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.6;

    this.checkDistance = debounce(this.checkDistance.bind(this), 100)
  }

  // pega a distância de cada elemento em relação ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop
      return {
        element: section,
        offset: Math.floor(offset) - this.halfWindow,
      }
    })
  }

  // verifica a distância dos elementos em relação ao topo do site
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    })
  }

  init() {
    if (this.sections.length) {
      this.getDistance()
      this.checkDistance()
      window.addEventListener('scroll', this.checkDistance);
    }
    return this
  }

  // remove o evento de scroll animation
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
