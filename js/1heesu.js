// NAV MENU

const activeEl = document.querySelectorAll('.active-el')
const menuToggelEl = document.querySelector('.menu-toggle')
const menuListEl = document.querySelectorAll('.main-nav-list ul li')
const sectionEl = document.querySelectorAll('.section')
const arr = [...sectionEl]

// MENU HANDLER
menuToggelEl.addEventListener('click',showMenu)
function showMenu(){
  for(let active of activeEl){
    active.classList.toggle('active')
  }
}

menuListEl.forEach((list)=>{
  list.addEventListener('click',(e)=>{
    arr.forEach(e=>{
      e.classList.add('hidden')
    })
    const className = e.currentTarget.getAttribute("class").toLowerCase()
    const element = document.querySelector(`.${className}`)
    element.classList.remove('hidden')
    showMenu()
  })
})


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
  
  
  hourEl.textContent = String(hour).padStart(2,'0')
  minuteEl.textContent = minute
  dateEl.textContent = `${year}.${month}.${date}`
  dayEl.textContent = `${days[day]}`
  
  // COPY
  const copyYear = document.querySelector('.copy-year')
  copyYear.textContent = year
}

///// TIMER
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
  timer.ten = 0
  timer.seconde = 0
  timer.minute = 0
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

////// TODO-LIST
const todoFormEl = document.querySelector('.todo-form')
const todoInputEl = document.querySelector('.todo-form>input')
const todoBtnEl = document.querySelector('.todo-form>button')
const taskEl = document.querySelector('.task')


// SUBMIT
todoFormEl.addEventListener('submit',onSubmitHandler)
function onSubmitHandler(e){
  e.preventDefault()
  let task = todoInputEl.value
  todoInputEl.value = ''
  onAddTask(task)
}
// ADD LIST
function onAddTask(task){
  const liEl = document.createElement('li')
  const inputEl = document.createElement('input')
  const btnEl =document.createElement('button')
  const spanEl =document.createElement('span')
  inputEl.setAttribute('type','checkbox')
  spanEl.textContent = task
  btnEl.textContent = '❌'
  liEl.append(inputEl)
  liEl.append(spanEl)
  liEl.append(btnEl)
  taskEl.append(liEl)
  btnEl.addEventListener('click',onDeletTask)
}
// DELET LIST
function onDeletTask(e){
  const liEl = e.target.parentElement
  liEl.remove()
}
