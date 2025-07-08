let file3=require("./file3")
let res=file3.add(5,6);
console.log(res);
let res1=file3.mul(5,6)
console.log(res1)

console.log(file3);

function sub(a,b){
    return a-b;
}


module.exports.sub=sub;