const fs = require("fs");


fs.writeFile("../demo2.txt","hello world", function(err,data){
    if(err) return console.log(err);
    console.log("success!!")
})