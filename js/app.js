//#region Калькулятор
//Создаю стрелочную функцию, которая принимает параметр и выводит в imput
const insert = num => document.form.textview.value = document.form.textview.value + num 
//Очищаем строку полностью
const clean = () => document.form.textview.value = ''
//Вычитаем последний символ
const minusLastSymbol = () => {
    var string = document.form.textview.value
    document.form.textview.value = string.substring(0, string.length - 1)
}
//Функция вычисления(eval сделает все сама)
function result(){
    var string = document.form.textview.value
    if(string){
        document.form.textview.value = eval(string)
    }
}
//#endregion

//#region Чеклист

//block - это div
let block = document.querySelectorAll('.check')
//text - это текст который находится в строке
let text = document.getElementsByTagName('span')

//line - это input в который пишут текст
const line = document.querySelector('[maxLength="30"]')
//checklist - в нем находятся и создаются задачи
const checklist = document.querySelector('[class = "checklist"]')


//Если Enter, запускает enterClick
line.addEventListener('keydown', function(event){
    if (event.keyCode === 13){
        enterClick(line.value)
        line.value = ''
    }
})

const enterClick = line =>{
    let count = 4
    let counts = 4
    var div = document.createElement('div')
    var p = document.createElement('p')
    var input = document.createElement('input')
    var span = document.createElement('span')
    var img = document.createElement('img')

    //Добавление свойств к тегам
    div.className = 'list check'
    input.type = "checkbox"
    input.name = "check"
    input.onclick = checkboxClick(this, count++) 
    span.innerHTML = line
    img.src = "img/x.png"
    img.alt = "img"
    img.onclick = deleteString(counts++)

    //То в каком порядке должны находиться теги
    checklist.appendChild(div)
    div.appendChild(p)
    p.appendChild(input)
    p.appendChild(span)
    p.appendChild(img)
}

//Скрывает чекбокс и меняет стиль текста
const checkboxClick = (check, number) => {
    check.hidden = true
    text[number].style.color = 'grey'
    text[number].style.textDecoration = 'line-through'
    text[number].style.marginLeft = '26px'
}

//Удаление одного div
const deleteString = n => {
    block[n].hidden = true
}
//#endregion

