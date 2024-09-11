function title_name (title) {
    let names = document.querySelector('#todo_name')
    names.innerHTML = title
    return names
}
const keyCode = "id";

class Storage { // Конструктор объекта
    constructor(value, done=false) {
        this.value = value,
        this.done = done
    }
}

let standart = [
{
    delo : "pppppp",
    end : false, 
},
{
    delo : "lhjp",
    end : false,
}]
function standartDo(array) {
    let delo = document.querySelector('.delo');
    for (let i = 0; i < array.length; i++) {
        delo.innerHTML +=  
            `
            <div class = "task">
                <div class="tasks"> 
                    <span id="name_task"> ${array[i].delo} </span>
                    <button type="button" id="button_Delete" class="delete">Удалить</button>
                    <button type="button" id="complite" class="complite">Отметить</button>
                </div>
            </div>`;
        controlBtn();
    }
}
//let objJASksm = new Storage(Значение, выполнено)

function createForm() { 
    let conteiner = document.querySelector('#conteiner_todo')
    conteiner.innerHTML += `
    <div class = form_container id = form_container>
        <h2 id = "todo_name"></h2>
        <div class = form>
            <input type = "text" id = "placeholder" class = "placeholder" placeholder = "Введите дело">
            <button class = "save_button" id = "save_button"> Добавить </button>
            <div class = "task"> </div> 
        </div>
        <div class = delo></div>
    </div>
    `;
    window.onload = standartDo(standart);
}
createForm()
    function createDo () {
        let placeholder = document.querySelector('#placeholder')
        let delo = document.querySelector('.delo')
            if (placeholder.value.length == 0) {
                alert("Вы не ввели дело")
            }else {
             delo.innerHTML +=  
            `
            <div class = "task">
                <div class="tasks"> 
                    <span id="name_task"> ${placeholder.value} </span>
                    <button type="button" id="button_Delete" class="delete">Удалить</button>
                    <button type="button" id="complite" class="complite">Отметить</button>
                </div>
            </div>
                ` 
            controlBtn();
        }
    }
    function controlBtn () {
        let delete_task = document.querySelectorAll('#button_Delete')
                let complite_task = document.querySelectorAll('#complite')
                placeholder.value = ""
                for (let i = 0; i < delete_task.length; i++) {
                    delete_task[i].onclick = function() {
                        this.parentNode.remove()
                    }
                    
                    
                }
                for (let i = 0; i < complite_task.length; i++) {
                    complite_task[i].onclick = function() {
                        if(complite_task[i].textContent === "Отметить"){
                            this.parentNode.style.backgroundColor = "lime"
                            complite_task[i].textContent = "Не отмечать"
                        }
                        else{
                            this.parentNode.style.backgroundColor = "white"
                            complite_task[i].textContent = "Отметить"
                        }
                    }
               
                }
    }
    function taskin() {
        let save_button = document.querySelector('#save_button')
         save_button.onclick = createDo;
        
        let place_holder = document.querySelector('#placeholder')
        place_holder.addEventListener('keyup', function(){
            if(event.keyCode == 13){
                save_button.click()
            }
        });
    }

function all_functions() {
    title_name("Спонсор сегодняшнего дня - куча дел.")
    taskin()
}
all_functions()