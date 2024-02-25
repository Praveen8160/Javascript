// console.log(Math.PI)

// // can we change PI value

// const descripter=Object.getOwnPropertyDescriptor(Math,'PI')  

// // getOwnPropertyDescriptor and some prototype are not showing in browser object prototype list 
// console.log(descripter)


// Object.defineProperty(Math,'PI',{
//     configurable: true,
// })


// console.log(descripter)           //Error: Cannot redefine property: PI


// but we can redfine other object property


const obj={
    "name":"praveen",
    "address":"surat"
}

obj.name="rqj"
obj.address="banglore"

const descripter=Object.getOwnPropertyDescriptor(obj,'name') 
console.log(descripter)

Object.defineProperty(obj,'name',{
    writable: false,  //for value change
    enumerable:false, // enumerable is use for iteration
})

const descripter2=Object.getOwnPropertyDescriptor(obj,'name') 
console.log(descripter2)


obj.name="manish"
obj.address="rajkot"
console.log(obj)

// Object.defineProperties() for multiple properties: