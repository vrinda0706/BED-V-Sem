const fs = require('fs');
const express = require('express')
const app =express();
let port = 3008;

app.use(express.json()); //this parse json into object
 
app.post("/blog",(req,res)=>{

    let title = req.body.title;
    let age = req.body.age;
    
   fs.readFile("demo.txt", "utf-8", function (err, data) {
        let arr = [];

        if (!err && data!="") {
           arr=JSON.parse(data)
        }

        arr.push({
            title: title,
            age: age,
        });
        fs.writeFile("demo.txt", JSON.stringify(arr), function (err) {
            if (err) {
                console.log(err)
                return;
            }
            res.json({ message: "Done", data: arr });
        });
    });

    
    
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})