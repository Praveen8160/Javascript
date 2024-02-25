// obj1={1:"a",2:"b"}
// obj2={2:"d",3:"c"}
// obj3={3:"e",4:"4"}

// const obj5=Object.assign({},obj1,obj2,obj3)
// const obj4={...obj1,...obj2,...obj3}                      //spread operator
// console.log(obj4)
// console.log(obj5)


const obj1={}
obj1.name="praveen"
obj1.age=18
obj1.login=false

// console.log(Object.keys(obj1));                   // output gives in array form
// console.log(Object.values(obj1));                 // output gives in array form
console.log(obj1.hasOwnProperty("age"))

const {name:n}=obj1  //destructure
console.log(n)

const obj6={}
if(Object.keys(obj6)==0){
    console.log("object is empty")
}
else{
    console.log("object is not empty")
}
