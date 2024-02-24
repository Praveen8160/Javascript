class user{
    constructor(username,email,password)
    {
        this.username=username;
        this.email=email;
        this.password=password
    }
    display1()
    {
        console.log(`Username is ${this.username}`)
    }
    static display2()
    {
        console.log(`Username is ${this.email}`)
    }
}
const userdata=new user("praveen","praveen@gmail.com","praveen")
userdata.display1()

// use.display2() we can access static function only with class

