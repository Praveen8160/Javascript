const shopping_Cart=[
    {
        book:'java',
        price:2000
    },
    {
        book:'python',
        price:1000
    }
]
console.log(shopping_Cart.reduce((pre,curr)=>{
    pre+curr.price
},0))