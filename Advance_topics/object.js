function calculate(num){
    return num*2
}
// calculate.power=20
// calculate.n=(calculate.power)*10
// console.log(calculate(5))
// console.log(calculate.n)
// console.log(calculate)


function user(username,score){
    this.username=username
    this.score=score
    return this
}
user.prototype.printme=function(){
    console.log(`score is ${this.score}`)
}
user.prototype.incremenet=function(){
    this.score++
    console.log(this.score)
}
let user1=new user("praveen",20)
let user2=new user("raj",30)
user1.printme()
user1.incremenet()
