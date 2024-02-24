// class user{
//     constructor(username,email,password)
//     {
//         this.username=username;
//         this.email=email;
//         this.password=password
//     }

//     display()
//     {
//         console.log(`Username is ${this.username}`)
//     }
// }
// console.log(new user("praveen","praveen@gmail.com","praveen").display())
// console.log(userdata.display())


// we define function and it's prototype before ES6 (class) was not introduced   

function user(username,email,password)
{
    this.username=username;
    this.email=email;
    this.password=password
}

user.prototype.display=function(){
    console.log(`Username is ${this.username}`)
}
const userdata=new user("praveen","praveen@gmail.com","praveen")
userdata.display()
