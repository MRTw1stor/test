const form = document.querySelector('.create')
const dela = document.querySelector('.dela')
const span = document.querySelector('.result')

const input = document.createElement('input');
input.setAttribute("placeholder", "Введите дело")

const addBtn = document.createElement('button');
addBtn.innerText = "Добавить"

const getDela = document.createElement('button');
getDela.innerText = "Получить"
dela.appendChild(getDela)

dela.appendChild(addBtn);
dela.appendChild(input);

let constructot = [
    {
        value: "tets",
        marc : true
    }
,
    {
        value: "tets1",
        marc : false
    }
]

function check () {

    if (input.value.length == 0) {
        alert("Вы не ввели дело")
   }
   else {
    let childs = document.querySelectorAll(".li")
    for (let index = 0; index < childs.length; index++) {
        childs[index].remove()
    }

    let aaaa = JSON.parse(localStorage.getItem('toDo'))
    aaaa.push({value: input.value, marc : false})
     
    for (let index = 0; index < aaaa.length; index++) {
        getAdd(aaaa[index]) 
    }

    localStorage.setItem('toDo', JSON.stringify(aaaa))
    
}
}

function getAdd (obj) {
        //let obj = JSON.parse(localStorage.getItem('toDo'))
        let li = document.createElement('li');
        li.className = 'li'
        let p = document.createElement('p')
        p.className = 'p'
        p.textContent = obj.value
        li.append(p)
        
        let btnDel = document.createElement('button');
        btnDel.className = "btnDel"
        btnDel.innerText = "Удалить"

        let markBtn = document.createElement('button');
        markBtn.className = "markBtn"

        if (obj.marc){
            p.style.backgroundColor = "red"
            markBtn.textContent = "Вернуть"
            
        }else{
            markBtn.innerText = "Отметить"
        }
        
        result.appendChild(li)
        li.appendChild(btnDel)
        li.appendChild(markBtn)
        input.value = ''

        btnDel.addEventListener('click', () =>{
            result.removeChild(li)
            removeSorage()
        })
        
        markBtn.addEventListener('click', () =>{
            
            if (markBtn.textContent == "Отметить"){
            p.style.backgroundColor = "red"
            markBtn.textContent = "Вернуть"
            removeSorage()
            }
            else {
                p.style.backgroundColor = "white"
                markBtn.textContent = "Отметить"
                removeSorage()
                }
        })

        ///console.log(obj)
}


function add () {
    addBtn.addEventListener("click", check)

    input.addEventListener('keyup', function(){
        if(event.keyCode == 13){
            addBtn.click()
        }
    });
    
}

function removeSorage(params) {
    let n = document.querySelectorAll('.li')
    let array = []
    for (let i = 0; i < n.length; i++) {
        let marc = false
        if (n[i].firstChild.style.backgroundColor === "red") {
            marc = true
        }
        //console.log(n[i].firstChild);
        array.push({value: n[i].firstChild.textContent, marc})
    }
    localStorage.setItem('toDo', JSON.stringify(array))
}

if (!JSON.parse(localStorage.getItem('toDo'))) {
    localStorage.setItem('toDo', JSON.stringify(constructot))
}
arrayLok = JSON.parse(localStorage.getItem('toDo'))
for (let index = 0; index < arrayLok.length; index++) {
    getAdd(arrayLok[index])    
}
add ()


function getloc() {
    getDela.addEventListener('click', () => {
    let al = []
    al = JSON.parse(localStorage.getItem('toDo'))
    if (al.length <= 0) {
        alert("пустой")
    } 
    else {
        alert("Не пустой")
    }
    
    })};   

getloc()
