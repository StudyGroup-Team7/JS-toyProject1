const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')
const tens = document.querySelector('.tens')
const minutes = document.querySelector('.minutes')
const secondes = document.querySelector('.secondes')

// 초기값
const timer = {
  ten: 0,
  seconde: 0,
  minute: 0
}

// STATUS
let interval

// START
start.addEventListener('click',()=>{
  clearInterval(interval)
  interval = setInterval(onStart,10)
})

// STOP
stop.addEventListener('click',()=>{clearInterval(interval)})

// RESET
reset.addEventListener('click',()=>{
  clearInterval(interval)
  appenTime(0,0,0)
})

// STRAT FUNCTION
function onStart(){
  timer.ten++
  if(timer.ten>=99){
    timer.ten = 0
    timer.seconde++
  }
  if(timer.seconde>=99){
    timer.seconde = 0
    timer.minute++
  }
  appenTime(timer.ten,timer.seconde,timer.minute)
}

function appenTime(t,s,m){
  tens.textContent=String(t).padStart(2,'0')
  secondes.textContent=String(s).padStart(2,'0')
  minutes.textContent=String(m).padStart(2,'0')
}

///// CLOCK

const dateEl = document.querySelector('.date')
const dayEl = document.querySelector('.day')
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')

const days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']

setInterval(onAppendTimes,100)

function onAppendTimes(){
  // TIME
  const hour = new Date().getHours()
  const minute = String(new Date().getMinutes()).padStart(2,'0')
  
  // DATE
  const year = new Date().getFullYear()
  const month = String(new Date().getMonth()+1).padStart(2,'0')
  const date = new Date().getDate()
  const day = new Date().getDay()

  hourEl.textContent = hour
  minuteEl.textContent = minute
  dateEl.textContent = `${year}.${month}.${date}`
  dayEl.textContent = `${days[day]}`
}