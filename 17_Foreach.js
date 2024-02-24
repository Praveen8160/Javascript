
const obj=[20,30,40]
// ____________________foreach in array_____________________________________
// obj.forEach(function (element){
//     console.log(element)
// });

// obj.forEach((element,index,arr)=>{
//     console.log(element,index,arr)
// });

// function printme(element){
//       console.log(element)
//   }
// obj.forEach(printme)


// ____________________foreach in Object_____________________________________
// const obj = {
//     name: 'praveen',
//     rank: 'HOD'
//   };

//   Object.keys(obj).forEach(key => {
//     console.log(key, obj[key]);
//   });

// ____________________foreach in Object inside array__________________________
// const code=[
//   {
//     languagename:"java",
//     Filename:"java"
//   },
//   {
//     languagename:"python",
//     Filename:"py"
//   },
//   {
//     languagename:"javascript",
//     Filename:"js"
//   }
// ]

// code.forEach((element)=>{
//   console.log(element.languagename)
// })



// _________________________foreach not return any value but we can push value in new array_____________________________

// const ret=obj.forEach(function (element){
//     // console.log(element)
//     return element
// });                                       // foreach not return any value 
// console.log(ret)


const obj2=[]
obj.forEach(function (element){
    if(element>20)
    {
        obj2.push(element)
    }
}
)
console.log(obj)