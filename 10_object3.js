const obj={
    "course":"M.sc(IT)",
    "semester":"2nd"
}
const marks={
    "first":"8",
    "2nd":"9",
    "result2":result
}
const obj2={
    "name":"praveen",
    "address":"surat",
    "study":obj,
    "result":marks
}
function result(){
    return this.first
}
console.log(obj2.result.result2())


for (const key in obj2) {
        console.log(key)
        console.log(obj2[key])
}
