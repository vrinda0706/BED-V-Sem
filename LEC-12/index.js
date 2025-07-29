let box=document.querySelector("#box");
let btn=document.querySelector(".btn");
let stop=document.querySelector(".stop");
let arr=["red","black","green","yellow","brown","pink","blue","purple","orange","grey"]
function generateRandonColour(){
    let index=Math.floor(Math.random()*10);
    console.log(index);
    let randomcolor=arr[index];
    console.log(randomcolor)
    box.style.backgroundColor=[randomcolor];

}
let id;
btn.addEventListener("click",function(){
    id=setInterval(()=>{
        generateRandonColour();
    },500)
})
stop.addEventListener("click",function(){
    if(id){
        clearInterval(id)
    }
})
