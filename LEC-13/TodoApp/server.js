const fs=require('fs');
const express=require("express");
    const app=express();
    app.use(express.static(__dirname+"/public"));

    app.get("/todos",(req,res)=>{
        fs.readFile("Todo.json","utf-8",function(err,data){
            if(err) return res.send(err);
            let todos=JSON.parse(data);
            res.send(todos);
        })

    })

    app.listen(3005,()=>{
        console.log("server started")
    })
