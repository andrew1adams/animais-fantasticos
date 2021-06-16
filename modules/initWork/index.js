export function initWork() {
  // const now = new Date()
  // const future = new Date('Dec 24 2021 23:59')
  // const daysNow = convertDays(now)
  // const daysFuture = convertDays(future)
  // const last =  daysFuture - daysNow

  // function convertDays(time) {
  //   return time / (24 * 60 * 60 * 1000)
  // }

  // console.log(last)

  const works = document.querySelector('[data-semana]')
  const daysWeek = works.dataset.semana.split(',').map(Number)
  const hoursWeek = works.dataset.hora.split(',').map(Number)
  const dateNow = new Date()
  const daysNow = dateNow.getDay()
  const hoursNow = dateNow.getHours()
  const openWeek = daysWeek.indexOf(daysNow) !== -1
  const openHours = hoursNow >= hoursWeek[0] && hoursNow < hoursWeek[1]

  if (openHours && openWeek) {
    works.classList.add('aberto')
  }
}
