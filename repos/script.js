function createForm () {
    let form = document.querySelector('.create');
    let conteiner = document.createElement('div');
    let btn = document.createElement('button');
    btn.innerText = "Добавить"

    let input = document.createElement('input');
    input.setAttribute("placeholder", "Введите дело")

    form.appendChild(conteiner);
    conteiner.appendChild(btn);
    conteiner.appendChild(input);

    let delo = document.createElement('div');

}
createForm()

function createDo () {
    let placeholder = document.querySelector('#placeholder');
    let delo = document.querySelector('.delo')
    if (placeholder.value.length == 0) {
        alert("Вы не ввели дело")
    }
    else {
        let span = document.createElement('span')
        let delBtn = document.createElement('button')
        let 
    }
    

}

