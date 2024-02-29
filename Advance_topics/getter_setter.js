
// when user want to access property value and we don't want to give the value of that property or give after update that value than we use get and set method

// we should define both method get and set else compiler gives error

// when we define property code will autometically make get and set method we just use that method


// class user{
//     constructor(username,password){
//         this.username=username
//         this.password=password
//     }
//     set password(value){
//         this.Password="you can't access this value"
//     }
//     get password(){
//         return this.Password
//     }
// }
// const users=new user("Praveen","praveen@")
// console.log(users.password)




// ________________________________________________________________________________________________


// before(ES6) class was not there


function user(username,password){
    this._username=username
    this._password=password

    Object.defineProperty(this,'password',{
        get:function(){
            return `${this._password}abc`
        },
        set:function(value){
            this._password=value
        },
    })
}
const users=new user("praveen","praveen@")
console.log(users.password)



//using object

// const user={
//     "_username":"praveen",
//     "_password":"praveeen@",

//     set username(value){
//         this._username=value
//     },
//     get username(){
//         return this._username.toUpperCase()
//     }
// }
// const users=Object.create(user) //in object create new instance
// console.log(users.username)

