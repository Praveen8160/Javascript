const mysyn=Symbol("key1")
const obj={
    name:"praveen",
    "full name":"praveen prajapati",
    [mysyn]:"symbol1", //symbol
    age:18,
    login:false,
}
// console.log(obj.name);
// console.log(obj["full name"])
// console.log(obj[mysyn]) //access symbol
// console.log(obj)

// obj.name="raj"
// Object.freeze(obj)
// obj.age=20
// console.log(obj)

obj.greeting=function(){
    console.log("hello pravenn")
}
obj.greeting2=function(){
    console.log(`hello ${this["full name"]}`)
}

console.log(obj.greeting())
console.log(obj.greeting2())