const secondEl = document.querySelector('.second')
const milliSecondEl = document.querySelector('.milli-second')
const startButtonEl = document.querySelector('.btn-start')

let sec = '00'
let msec = '00'

// Events
startButtonEl.addEventListener('click', function () {
  setInterval(startTimer, 10)
})

window.addEventListener('DOMContentLoaded', function () {
  secondEl.innerHTML = sec
  milliSecondEl.innerHTML = msec
})

// Functions
function startTimer() {
  msec++

  if (msec <= 9) {
    milliSecondEl.innerHTML = `0${msec}`
  }

  if (msec > 9) {
    milliSecondEl.innerHTML = msec
  }

  if (msec > 99) {
    sec++
    secondEl.innerHTML = `0${sec}`
    msec = 0
    milliSecondEl.innerHTML = `0${msec}`
  }

  if (sec > 9) {
    secondEl.innerHTML = sec
  }
}
