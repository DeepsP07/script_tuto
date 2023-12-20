
//primitive data type => string,number,boolean,null,undefined,symbol
let value=32
let type =Symbol("asd")
let temp =null
let isValue=true
let name="Deepali"
const tempr =Symbol("234")

//Reference or non primitive (function,object,Array)
let heros=["DEEps","resa","fsfsd"];
let myobj = {
    name:"Dasee",
    id:12344,
}
//output =>object

let val = function(){
   console.log("Hello world")
}
//=>function

console.log(typeof myobj )

// +++++++++++++++++++++++++++++++++++++++++++++++++++++=
// Stack=> primitive  Non-Primitive=> heap
//stack 
let nameOfYoutube ="deepali@youtube.com"
let anothername =nameOfYoutube
anothername="ADC@google.com"

console.log(nameOfYoutube)
console.log(anothername)
// Heap
let userOne={
    username:"Deepali"
}
let userTwo=userOne

userOne.username="Rishi"

console.log(userOne)
console.log(userTwo)