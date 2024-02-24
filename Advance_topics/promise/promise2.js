// const promise=new Promise(function(resolve,reject){
//     let login=false
//     if(login){
//         resolve({name:"praveen",email:"praveen@gmail.com"})
//     }
//     else
//     {
//         reject("Error : invalid user")
//     }
// })
// async function handlepromise(){
//     try {
//         const response=await promise
//         return response
//     } catch (error) {
//         console.log(error);
//     }
// }
// handlepromise()


fatchdata1()
async function fatchdata1(){
    try {
        const url= await fetch("https://jsonplaceholder.typicode.com/users")
        const data=await url.json()
        console.log("first");
        console.log(data[0])
    } catch (error) {
        console.log(error)
    }

}
