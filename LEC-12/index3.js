// how to insert new element in dom
// 1. create a new Element ----> createElement
// 2. add required data in that element using innertext or innerHtml
// 3. add that element in parent container using appendChild or append
let todo={
    id:3435435,
    title:"todo4"
}
let ul=document.querySelector(".todolist")

function addTodo(){
    let li = document.createElement("li");
    li.setAttribute("id",`${todo.id}`)
    li.innerHTML= `<div>
                <input type="checkbox" name="" id="checkbox">
                <h1>${todo.title}</h1>
                <div>
                <button class="edit">✅</button>
                <button class="delete">❌</button>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sit libero alias assumenda quis labore esse dolor amet vero eos culpa ratione, odio dolorum veniam modi reiciendis quia, consequuntur quaerat.</p>
                </div>
            </div>`
    ul.appendChild(li)
}
addTodo()
addTodo()
addTodo()
