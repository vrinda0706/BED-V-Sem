let p= new Promise((resolve,reject)=>{
    resolve("okay")
})

console.log(p);
p.then((data)=>{
    console.log(data)
    console.log("promise completed")
})
.catch((err)=>{
    console.log(err);
})
let users=[
    {
        id:1,
        age:16,
        name:"yahsu"
    },
    {
        id:1,
        age:20,
        name:"yahsu2"
    }
]
function isEligible(id){
     return new Promise((resolve,reject)=>{
        let user= users.filter((user)=> user.id==id)[0];
    console.log(user);
    if(!user) return  reject ("no user found");
    if(user.age>=18){
        return "eligible to vote"
    }
    else{
        return "not eligible"
    }
    })
}

isEligible(1).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
console.log("hi");
console.log("bye");