//HTML
// [네비게이션 토글]
const toggleItems = document.querySelectorAll('.toggle-item')
const toggleBtn = document.getElementById('menu-toggle')
const menuToggleItems = document.querySelectorAll('.nav-list li')

//[스탑워치]
const stopwatchWrapper = document.querySelector('.stopwatch')
const stopwatchContainer = document.querySelector('.stopwatch-container')
const display = document.getElementById('display')
const btns = document.getElementById('btns')
const startBtn = document.getElementById('start')
const puaseBtn = document.getElementById('pause')
const resetBtn = document.getElementById('reset')
const records = document.getElementById('records')

//[시계]
const clockWrapper = document.querySelector('.clock')
const clockDisplay = document.getElementById('clock-display')

//[투두]
const todoWrapper = document.querySelector('.todo')
const todoInput = document.getElementById('todo-input')
const todoAddBtn = document.getElementById('todo-add-btn')
const todoList = document.getElementById('todo-list')

//VARS
//[스탑워치]
let count = 0
let timer = false
let recordCount = 0
const INITIAL_DISPLAY = "00 : 00 : 00"
//[투두]
let todoDataList = []

//INIT
;(() => {
  //[스탑워치]
  display.textContent = INITIAL_DISPLAY
  //[시계]
  setInterval(renderTime, 1000)
  //[투두]
  if (localStorage.getItem('todo')){
    initDataList()
    renderTodoList()
  }
})()

//EVENT LISTENERS
//[네비게이션 토글]
toggleBtn.addEventListener('click', onToggleEvent)
menuToggleItems.forEach( (item, index) => item.addEventListener('click', () => {
  onMenuSelect(index)
}))

//[스탑워치]
startBtn.addEventListener('click', onStartClicked)
puaseBtn.addEventListener('click', onPauseClicked)
resetBtn.addEventListener('click', onResetClicked)

//[투두]
todoAddBtn.addEventListener('click', () => {
  onTodoAddBtn()
})
todoInput.addEventListener('keyup', (input) => {
  if(input.key === "Enter") {
    todoAddBtn.click()
  }
})

//FUNCTIONS
//[네비게이션 토글]
function onToggleEvent() {
  toggleItems.forEach(item => {
    item.classList.toggle('toggle-item-active')
  })
}

function onMenuSelect(index) {
  let dest
  if (index === 0) {
    dest = stopwatchWrapper.offsetLeft
  }
  else if (index === 1) {
    dest = clockWrapper.offsetLeft
  }
  else {
    dest = todoWrapper.offsetLeft
  }
  window.scroll({
    top: 0,
    left: dest,
  })
  onToggleEvent()
}
//[스탑워치]
function onStartClicked() {
  timer = true
  stopwatch()
  stopwatchContainer.classList.add('active')
  startBtn.classList.add('visually-disabled')
  puaseBtn.classList.remove('visually-disabled')
}

function onPauseClicked() {
  timer = false
  stopwatchContainer.classList.remove('active')
  puaseBtn.classList.add('visually-disabled')
  startBtn.classList.remove('visually-disabled')
}

function onResetClicked() {
  timer = false
  count = 0
  stopwatchContainer.classList.remove('active')
  startBtn.classList.remove('visually-disabled')
  puaseBtn.classList.remove('visually-disabled')

  if (display.textContent !== INITIAL_DISPLAY){
    const record = document.createElement('span')
    record.textContent = `[${++recordCount}] ${display.textContent}`
    records.append(record)
  }
  display.textContent = INITIAL_DISPLAY
}

function stopwatch() {
  if (timer) {
    count++
    const mil = count > 99 ? 
    (count % 100).toString().padStart(2, 0) : 
    count.toString().padStart(2, 0)

    const sec = count > 60 * 100 ?
     (Math.floor(count / 100) % 60).toString().padStart(2, 0) : 
     Math.floor(count / 100).toString().padStart(2, 0)

    const min = count > 60 * 60 * 100 ? 
    (Math.floor(count / 100 / 60) % 60).toString().padStart(2, 0) :
    Math.floor(count / 100 / 60).toString().padStart(2, 0)

    display.textContent = ""
    display.textContent = `${min} : ${sec} : ${mil}`
  }

  setTimeout(stopwatch, 10)
}

//[시계]
function renderTime() {
  let hour = new Date().getHours()
  let min = new Date().getMinutes()
  let sec = new Date().getSeconds()
  let ampm = hour < 12 ? "AM" : "PM"
  
  hour = hour > 12 ? hour - 12 : hour
  hour = hour < 10 ? `0${hour}` : hour
  min = min < 10 ? `0${min}` : min
  sec = sec < 10 ? `0${sec}` : sec
  clockDisplay.textContent = `${hour}:${min}:${sec} ${ampm}`
}

//[투두]

function updateToLocal() {
  localStorage.setItem('todo', JSON.stringify(todoDataList))
}

function initDataList () {
  todoDataList = JSON.parse(localStorage.getItem('todo'))
}

function onTodoAddBtn() {
  if (todoInput.value !== "") {
    todoDataList.push(createTodoObject(todoInput.value))
    updateToLocal()
    renderTodoList()
    todoInput.value = ""  
  }
}

function createTodoObject(input) {
  return { 
    id: Date.now(),
    input,
    done: false
  }
}

function onDelBtn(id) {
  return todoDataList = todoDataList.filter( obj => obj.id !== id)
}

function renderTodoList() {
  const liEls = todoDataList.map( obj => {
    const todoCheck = document.createElement('input')
    todoCheck.type = 'checkbox'
    todoCheck.value = obj.done

    const todoText = document.createElement('span')
    todoText.textContent = obj.input

    const todoDelBtn = document.createElement('button')
    todoDelBtn.innerHTML = /* html */`<span class="material-symbols-outlined">skull</span>`
    todoDelBtn.addEventListener('click', () => {
      onDelBtn(obj.id)
      updateToLocal()
      renderTodoList()
    })

    const liEl = document.createElement('li')
    liEl.append(todoCheck)
    liEl.append(todoText)
    liEl.append(todoDelBtn)

    return liEl
  })
  todoList.innerHTML = ""
  todoList.append(...liEls)
}
