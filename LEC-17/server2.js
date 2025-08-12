const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const users = require("./model/user");
const mongoose = require('mongoose'); //common js syntax
// import mongoose from 'mongoose'; //ES6 module syntax

mongoose.connect('mongodb://127.0.0.1:27017/G27DB')
  .then(() => console.log('Connected!'));

//create
app.post("/xyz",async (req,res)=>{
    let name = req.body.name;
    let password = req.body.password;
    let user = {
        name:name,
        password:password,
        date:Date.now()
    }
    let newuser =  new users(user);
    await newuser.save();//data add in mongoose using save method this is and IO operation
    //await is used in all function of db

    res.json({
        success:true,
        message:"user added successfully",
        data:newuser
    })


})
app.get("/fetch",async(req,res)=>{
    let allusers = await users.find();
    res.json({
        success:true,
        message:"all users fetch successffully",
        data:allusers
    })
})
app.get("/fetch/:id",async(req,res)=>{
    let id= req.params.id;
    let blog= await users.findById(id);
    res.json({
        success:true,
        message:"user fetch successfully",
        data:blog
    })
})

app.listen(3002,()=>{
    console.log("server running on port 3002");
})