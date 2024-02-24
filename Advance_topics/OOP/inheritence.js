class user{
    constructor(username)
    {
        this.username=username;
    }
    display(){
        console.log(`Username is ${this.username}`)
    }
}
class userinfo extends user{
    constructor(username,email,password){
        super(username) // befor ES6 we use call method
        this.email=email
        this.password=password
    }
    setpass(){
        console.log(`${this.password}123`)
    }
}
const userdata=new userinfo("praveen","praveen@gmail.com","praveen")
userdata.display()
userdata.setpass()
