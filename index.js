const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
 let stageEl = document.getElementById("")
let prvi = document.getElementById("prvi-el")
let drugi = document.getElementById("drugi-el")
let passlength = 8

let spanEl = document.getElementById("pass-sp")

function createPassword(){
    for(let i=0; i< passlength; i++){
    let randomIndexOne = Math.floor( Math.random()*characters.length)
    let randomIndexTwo = Math.floor( Math.random()*characters.length)
    prvi.value += characters[randomIndexOne]
    drugi.value += characters[randomIndexTwo]
}}


prvi.addEventListener("click", function(){
    let copyText = document.getElementById("prvi-el");
    
  copyText.select();
  
  document.execCommand("copy"); 
  console.log("password copied") 
})

drugi.addEventListener("click", function(){
      let copyText2 = document.getElementById("drugi-el");
    copyText2.select()
    document.execCommand("copy")
    console.log("password copied")
})


