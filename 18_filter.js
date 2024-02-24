const obj=[20,30,40]
// const ret=obj.forEach(function (element){
//     // console.log(element)
//     return element
// });// foreach not return any value 
// console.log(ret)

// const ret=obj.filter((ele)=>{
//     return ele>20
// })
// console.log(ret)


const code=[
  {
    languagename:"java",
    Filename:"java",
    publish:2013
  },
  {
    languagename:"python",
    Filename:"py",
    publish:2000
  },
  {
    languagename:"javascript",
    Filename:"js",
    publish:2014
  }
]

const ans=code.filter((book)=>
{
    return book.publish>2000
})
console.log(ans)