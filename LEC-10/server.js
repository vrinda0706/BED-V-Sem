const express =require('express');
const app = express();
const fs=require('fs');

app.use(express.static(__dirname+"/public"))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+ "./index.html")
// })

// app.get("/about.html",(req,res)=>{
//     res.sendFile(__dirname+ "./about.html");
// })
app.post("/adduser",(req,res)=>{
    console.log(req.body);
    let username=req.body.username;
    let email =req.body.email;
    let password=req.body.password;
    res.json({
        username,
        password,
        email 
    })
    const content = `uname: ${username} , paswd:${password}, email:${email} \n`;
    fs.appendFileSync("data.txt",content);
    
})
app.listen(3009,()=>{
    console.log("Server is running on port 3009");
})