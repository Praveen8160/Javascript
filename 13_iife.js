(function one(){
    //named iife
    console.log("db connected")
})(); // we should close (;) the iife function for make second iife function

(function two(){
    //named iife
    console.log("db not connected")
})()

const a=((name)=>{
    console.log(`i am ${name}`)
    return name
})('praveen');

console.log(a)

const vari=(function(){
    let a=40
    let c=20
    return{
        a:function(){
            console.log(a)
        },
        c:function(){
            console.log(c)
        },
        setter:function(b){
            a=b
        }
    }
})()
// vari.setter(20)
console.log(vari.a())
console.log(vari.c())