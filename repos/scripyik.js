let conteiner = document.querySelector('.container')
let btn = document.createElement("button")
let btn2 = document.createElement("button")

let input = document.createElement('input')
input.setAttribute("placeholder", "Введите")

btn.innerText = "Поменять"
btn2.innerText = "Очистить"

conteiner.appendChild(input)
conteiner.appendChild(btn)
conteiner.appendChild(btn2)
 let kwadrat = document.createElement("div")
 kwadrat.className = 'square'
 conteiner.appendChild(kwadrat)

function btnClick() {
    // let value = (input.value)
    // kwadrat.style.backgroundColor = value
    btn.addEventListener('click', function(){
        conteiner.style.backgroundColor = input.value
    })
}

function clear() {
    input.value = ""
    kwadrat.style.backgroundColor = "white"
}
function main() {
    btn.addEventListener('click', btnClick )
    btn2.addEventListener("click", clear)
    input.addEventListener('input', function(){
        kwadrat.style.backgroundColor = input.value;
    })
}


main()
