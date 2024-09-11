const recURL = "https://gorest.co.in/public/v2/users"

let ul = document.createElement("ul")
let wrapper = document.querySelector(".wrapper");
wrapper.appendChild(ul);

async function main(params) {
    let response = await fetch('https://gorest.co.in/public/v2/posts')
    text = await response.json()
    wrapper.appendChild(ul)
    
    for (let i = 0; i < text.length; i++) {
            let li = document.createElement("li")
            let p = document.createElement("a")
            li.appendChild(p)
            p.innerText = text[i].title
            p.setAttribute("href", `page.html?id=${text[i].id}`)
            console.log(text[i].id) 
            ul.appendChild(li)

    }
}
main()