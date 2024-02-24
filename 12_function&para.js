// function namerepete(){
//     console.log("praveen")
//     console.log("praveen")
//     console.log("praveen")
//     console.log("praveen")
//     console.log("praveen")
//     console.log("praveen")
//     console.log("praveen")
// }
// namerepete();

// function adding(num1,num2){
//     console.log(num1 + num2)
//     return num1+num2
// }
// let add=adding(20,20)
// console.log(add)

function login(user){
    if(!user.trim()){
        return`enter user name`
    }
    else{
        return`${user} is login`
    }
    
}
console.log(login("   raj"))
