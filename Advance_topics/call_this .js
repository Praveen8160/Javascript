
// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.



// _______________________________________________________________________________________________________



// function setuser(username){
//     console.log(this)
//     this.username=username
//     // console.log(this.username)
// }
// function createuser(username,email,password){
//     // we can't do this because when we call it then js execution context execute that mathod and remove from call stack it's set username only in setuser() not in creatuser()
//     // setuser(username) 

//     //we should call like this bcz it call function and help of this keyword set creatuser() username value bcz its provide own this(current context) for assign value 
//     setuser.call(this,username) 

//     this.email=email
//     this.password=password
// }
// const user=new createuser("praveen","praveen@gmail.com","praveen1234")
// console.log(user)



// _______________________________________________________________________________________________________



// function a()
// {
//     const c=20
//     // console.log(this)                                      //refer globel
//     function b(f){
//         this.f=f
//         // console.log(f)
//         console.log(this.f)
//     }
//     b(c)
// }
// console.log(a())



// _______________________________________________________________________________________________________

// const a={
//     name:"raj",
//     fi:this,                                  //it refer globel store {} value
//     secon:function(){
//         console.log(this)                       its refer to {a} object
//     }
// }
// console.log(a.fi) = {}
