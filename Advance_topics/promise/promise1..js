// const promise_first=new Promise(function(resolve,reject){
//     const time=setTimeout(function(){
//         console.log("promise is resolve")
//         resolve()
//     },1000)
// })
// promise_first.then(function(){
//     console.log("promise complate")
// })


// new Promise(function(resolve,reject){
//     const time=setTimeout(function(){
//         console.log("promise is resolve")
//         resolve({name:"praveen",email:"praveen@gmail.com"})
//     },1000)
// }).then(function(admin){
//     console.log(admin.name)
// })


// new Promise(function(resolve,reject){
//     let login=true
//     if(login){
//         resolve({name:"praveen",email:"praveen@gmail.com"})
//     }
//     else
//     {
//         reject()
//     }
// }).then(function(user){
//     console.log(user)
//     return user.name
// })
// .then(function(username){
//     console.log(username)
// })
// .catch(function(){
//     console.log("enter proprer user")
// })
// .finally(function(){
//     console.log("promise is resolve or reject")
// })



// fetch('https://jsonplaceholder.typicode.com/user').then(function(response){
//     return response.json()
// }).then(function(data){
//     console.log(data[1])
// }).catch(function(error){
//     console.log(error)
// })


// A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.


// new Promise(function(resolve,reject){
//     let login=true
//     if(login){
//         resolve(fetch('https://jsonplaceholder.typicode.com/users'))
//     }
//     else
//     {
//         reject()
//     }
// }).then(function(response){
//     console.log(response.ok)
//     console.log(response.status)
//     return response.json()
// }).then(function(data){
//     console.log(data)
// }).catch(function(error){
//     console.log(error)
// })



// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits',{
//     headers: {
//       Authentication: 'secret'
//     }
//   })
// // get one header
// .then(function(response){
//     console.log(response.headers);
//     return response
// }).then(function(response){
//     console.log(response.headers);
// })



