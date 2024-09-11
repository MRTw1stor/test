"use strict";
// numb 1 

// let wrapper = document.querySelector(".create")
// let button = document.createElement('button')
// button.innerText = "Привет"

// wrapper.appendChild(button)

// function btnClick() {
//     alert("Привет, МИР!")
// }
// function main() {
//     button.addEventListener('click', btnClick);
// }
// main()



// nub 2

// let wrapper = document.querySelector(".create")
// let input = document.createElement('input')
// let button = document.createElement('button')
// button.innerText = "Нажми"

// input.setAttribute('placeholder', 'Введите текст')

// wrapper.appendChild(input)
// wrapper.appendChild(button);

// function btnClick() {
//     input.value = "test@email.ru"
// }

// function main() {
//     button.addEventListener('click', btnClick);
// }
// main()

// number 3

// let wrapper = document.querySelector(".create")
// let conteiner = document.createElement('div')
// let input = document.createElement('input')
// let button = document.createElement('button')
// button.innerText = "Нажми"
// input.setAttribute('placeholder', 'Введите текст')
// wrapper.appendChild(conteiner);
// conteiner.appendChild(input)
// conteiner.appendChild(button);

// function btnClick() {
//     if (input.value == "") {
//         alert("Введите текст")
//     }
//     else {
//         alert(input.value)
//     }
// }

// function main() {
//     button.addEventListener('click', btnClick);
// }
// main()


// номер 4

// let wrapper = document.querySelector(".create")
// let conteiner = document.createElement('div')
// let button = document.createElement("button");
// let input1 = document.createElement('input');
// let input2 = document.createElement('input')
// button.innerHTML = "Поменять"
// wrapper.appendChild(conteiner);
// conteiner.appendChild(input1)
// conteiner.appendChild(input2)
// conteiner.appendChild(button);

// function getChenge () {
//     let holder = input2.value
//     input2.value = input1.value
//     input1.value = holder

// }
// function main() {
//      button.addEventListener('click', getChenge);
// }
//  main()



/// номер 5

// // создаеие 
// let wraper =  document.querySelector('.create');
// let conteiner = document.createElement('div'); 

// let button1 = document.createElement('button');
// let button2 = document.createElement('button');
//  button1.innerText = "Заблокировать"
//  button2.innerText = "Разблокировать"
// let input = document.createElement('input');
// // отрисовка

// wraper.appendChild(conteiner);
// conteiner.appendChild(button1)
// conteiner.appendChild(button2)
// conteiner.appendChild(input)

// function upblocked() {
//     input.removeAttribute('disabled');
// }
// function getBlock () {
//     input.setAttribute('disabled', 'disabled');

// }

// function main () {
//     button1.addEventListener("click", getBlock);
//     button2.addEventListener("click", upblocked);
// }
// main();


// numb 6

let wraper = document.querySelector('.create');
let conteiner = document.createElement('div');
conteiner.className = 'square'
let button = document.createElement('button')
button.innerText = "Скрыть"


wraper.appendChild(conteiner);
wraper.appendChild(button)

function btnClic () {
    if (document.querySelector('.button').textContent == "Скрыть"){
    
    button.innerText = "Показать"}
    conteiner.classList.toggle('offhiden');
}


function main() {
     button.addEventListener('click', btnClic);
}
 main()


/// задание 7

// let wraper = document.querySelector('.create');
// let conteiner = document.createElement('div');
// conteiner.className = 'square'

// wraper.appendChild(conteiner);

// function getHover () {
//     conteiner.style.backgroundColor = 'blue';
// }
// function outHover () {
//     conteiner.style.backgroundColor = 'red';
// }

// function main () {
//     conteiner.addEventListener("mouseover", getHover)
//     conteiner.addEventListener("mouseout", outHover)
// }
// main();

// задание 8


// let conteiner = document.querySelector('.wraper');

// wraper.addEventListener("click", function (e) {
//     if (!e.target.classList.contains('square')) {
//         return;
//       }

//       if (document.querySelector('div.green')) {
//         document.querySelector('.green').classList.remove('green');
//       }
//       e.target.classList.add('green')
      
//       document.querySelector('div.green').classList.remove('green');
//       e.target.classList.add('green');
// }) 



