// const arr=[20,30,40,50]
// for (const num of arr) {
//     console.log(num)
// }

// const str="hello praveen"
// for (const str1 of str) {
//     console.log(str1)
// }

// const map=new Map()
// map.set('a',20)
// map.set('b',30)
// map.set('c',40)

// for (const [mapkey,mapval] of map) {
//     console.log(mapkey,"-:",mapval)
// }
// console.log(map)

const obj={
    a:20,
    b:30
}


// for (const [mapkey,mapval] of obj) {
//     console.log(mapkey,"-:",mapval)                               //we cant use forof loop direct in object
// }

for (const [mapkey,mapval] of Object.entries(obj)){
    console.log(mapkey,"-:",mapval)  
}
