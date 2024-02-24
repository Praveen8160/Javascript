// async function getUsers(names) {
//     let jobs = [];
  
//     for(let name of names) {
//       let job = fetch(`https://api.github.com/users/${name}`).then(
//         successResponse => {
//           if (successResponse.status != 200) {
//             return null;
//           } else {
//             return successResponse.json();
//           }
//         },
//         failResponse => {
//           return null;
//         }
//       );
//       jobs.push(job);
//     }
//     let results = Promise.all(jobs);
//     console.log(results)
//   }
// getUsers(["praveen","raj","mukesh"])


// let jobs = [];
// function fetchdata(names){
// for(let name of names) {
//     let job = fetch(`https://api.github.com/users/${name}`)
//     .then((response)=>{
//         return response.json()
//     }).then((response)=>{
//         // console.log(response)
//     }).catch((error)=>{
//         console.log("error")
//     })
//     jobs.push(job)
//     console.log(jobs)
// }
// }
// fetchdata(["praveen","raj","mukesh","jay"])



// const All_user=[]
// async function userdata(names){
//     for(let name of names) {
//         let user=await fetch(`https://api.github.com/users/${name}`)
//         let data=await user.json();
//         console.log(data)
//         // All_user.push(data)
//     }
//     // console.log(All_user)
// }
// userdata(["praveen","raj","mukesh","jay"])







// const url = 'https://jsonplaceholder.typicode.com/users';

// let data = {
//   name: 'praveen'
// }

// let fetchData = {
//   method: 'POST',
//   body: JSON.stringify(data),
//   headers: new Headers({
//     'Content-Type': 'application/json; charset=UTF-8'
//   })
// }

// fetch(url, fetchData)
//   .then(function(response) {
//     return response.json()
//   }).then(function(response) {
//     console.log(response)
//   });



