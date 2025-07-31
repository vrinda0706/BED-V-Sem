// fetch
fetch("http://localhost:2999/todos")
.then((response)=> response.json())
.then((data)=>console.log(data))