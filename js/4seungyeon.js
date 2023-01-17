// STOP-WATCH
const secondEl = document.querySelector('.second')
const milliSecondEl = document.querySelector('.milli-second')
const startButtonEl = document.querySelector('.btn-start')
const stopButtonEl = document.querySelector('.btn-stop')
const resetButtonEl = document.querySelector('.btn-reset')

let intervalId

let sec = '00'
let msec = '00'

// Events
startButtonEl.addEventListener('click', function () {
  clearInterval(intervalId)
  intervalId = setInterval(startTimer, 10)
})

stopButtonEl.addEventListener('click', function () {
  clearInterval(intervalId)
})

resetButtonEl.addEventListener('click', function () {
  clearInterval(intervalId)

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

    if (sec <= 9) {
      secondEl.innerHTML = `0${sec}`
    } else if (sec > 9) {
      secondEl.innerHTML = sec
    }

    msec = 0
    milliSecondEl.innerHTML = `0${msec}`
  }
}

// CLOCK
const clockEl = document.querySelector('.clock')
const timeEl = clockEl.querySelector('.time')

function renderTime() {
  const date = new Date()
  // 현지 시간 기준 시(0–23)를 반환
  let h = date.getHours()
  // 현지 시간 기준 분(0–59)을 반환
  let m = date.getMinutes()
  // 현지 시간 기준 초(0–59)를 반환
  let s = date.getSeconds()

  let meridiem = h > 11 ? 'PM' : 'AM'

  if (s < 10) {
    s = `0${s}`
  }

  if (m < 10) {
    m = `0${m}`
  }

  if (h < 10) {
    h = `0${h}`
  }

  const time = `${h}:${m}:${s} ${meridiem}`
  timeEl.textContent = time
}

setInterval(renderTime, 1000)
