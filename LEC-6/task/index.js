const fs = require("fs");

// read demo.txt and demo2.txt and write in file result .txt

fs.readFile("../demo.txt","utf-8",function(err,data){
    if(err) return console.log(err);
    let data1=data;
    fs.readFile("../demo2.txt","utf-8",function(err,data){
        if(err) return console.log(err);
        let data2=data;
        let result = data1.trim()+"\n" + data2.trim();
        fs.writeFile("./result.txt",result,function(err){
            if(err) return console.log(err);
            console.log("data");
        })
    })
})