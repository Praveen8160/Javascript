
// array-------|
//             |
// string------|----->object----->null
//             |
// finction----|

// 1.how js travel for checking prototype are available
// 2.if js check any property and its not available in string,function or array then it will go and check in obj prototype
// 3.object is parent ,that's why they can't access to child(string,array and function) prototype


const arr=["raj","praveen"]
const obj={
    "raj":"surat",
    praveen:"rajkot"
}

// obj.state()      we cant access it bcz its not defined property or function in prototype




//  now we have to define one satae prototype in object and use it

// Object.prototype.state=function(){
//     console.log(`this prototype made in object prototype and name is ${this.raj}`)
// }

// obj.state()  
// // we can access object prototype in array
// arr.state()



//  now we have to define one satae prototype in array and use it

// Array.prototype.state=function(name){
//     console.log(`this prototype made in array prototype and name is ${name}`)
// }


// arr.state(arr[0]) 
// we can't access array prototype in object
// obj.state(obj.raj) 



const obj2={
    manish:"jaipur",
    divya:"Ratanpur"
}
// how to access obj1 data in obj2

// first way
// obj2.__proto__=obj
// console.log(obj2.raj)


// second way
// Object.setPrototypeOf(obj2,obj)
// console.log(obj2.raj)