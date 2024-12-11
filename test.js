const arr = [
    {
        id:1,
        category: 'a'
    },
    {
        id:2,
        category: 'b'
    },
    {
        id:3,
        category: 'c'
    },
    {
        id:4,
        category: 'a'
    },
    {
        id:5,
        category: 'a'
    },
]

const arr2 = arr.filter((e) => 
    e.category == 'a'
)

console.log(arr2)