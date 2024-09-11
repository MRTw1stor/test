let double = document.querySelector(".double")
const param = new URLSearchParams(window.location.search);
console.log(param)
const id = param.get('id')

fetch(`https://gorest.co.in/public/v2/posts/${id}`).then((response) => response.json()).then(data => {
    
    console.log(id);
    double.innerText = data.body;
});


