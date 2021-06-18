export default class Work {
  constructor(works) {
    this.works = document.querySelector(works)
    this.activeClass = 'aberto'
  }

  worksData() {
    this.daysWeek = this.works.dataset.semana.split(',').map(Number)
    this.hoursWeek = this.works.dataset.hora.split(',').map(Number)
  }

  currentData() {
    this.dateNow = new Date()
    this.daysNow = this.dateNow.getDay()
    this.hoursNow = this.dateNow.getUTCHours() - 3
  }

  isOpen() {
    const openWeek = this.daysWeek.indexOf(this.daysNow) !== -1
    const openHours = this.hoursNow >= this.hoursWeek[0] && this.hoursNow < this.hoursWeek[1]

    return openWeek && openHours
  }

  activeOpenClass() {
    if (this.isOpen()) {
      this.works.classList.add(this.activeClass)
    }
  }

  init() {
    if (this.works) {
      this.worksData()
      this.currentData()
      this.activeOpenClass()
    }

    return this
  }
  // const now = new Date()
  // const future = new Date('Dec 24 2021 23:59')
  // const daysNow = convertDays(now)
  // const daysFuture = convertDays(future)
  // const last =  daysFuture - daysNow

  // function convertDays(time) {
  //   return time / (24 * 60 * 60 * 1000)
  // }

  // console.log(last)
}
