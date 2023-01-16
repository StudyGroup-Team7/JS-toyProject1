const secondEl = document.querySelector('.second')
const milliSecondEl = document.querySelector('.milli-second')
const startButtonEl = document.querySelector('.btn-start')
const stopButtonEl = document.querySelector('.btn-stop')
const resetButtonEl = document.querySelector('.btn-reset')

let startIntervalId

let sec = '00'
let msec = '00'

// Events
startButtonEl.addEventListener('click', function () {
  clearInterval(startIntervalId)
  startIntervalId = setInterval(startTimer, 10)
})

stopButtonEl.addEventListener('click', function () {
  clearInterval(startIntervalId)
})

resetButtonEl.addEventListener('click', function () {
  clearInterval(startIntervalId)

  sec = '00'
  msec = '00'
  secondEl.textContent = sec
  milliSecondEl.textContent = msec
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
