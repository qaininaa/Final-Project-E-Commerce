let product =[
  {
    id:1,
    value:'a',
    category: 'jewelery'
  },
  {
    id:2,
    value:'a',
    category: 'mobil'

  },
  {
    id:3,
    value:'a',
    category: 'jewelery'

  },
  {
    id:4,
    value:'a',
    category: 'jewelery'

  },
  {
    id:5,
    value:'a',
    category: 'sepatu'

  },
]
let product2 =[
  {
    id:1,
    value:'a',
    category: 'jewelery yeni'
  },
  {
    id:6,
    value:'a',
    category: 'mobil'

  },
  {
    id:3,
    value:'a',
    category: 'jewelery yeni'

  },
  {
    id:7,
    value:'a',
    category: 'jewelery doni'

  },
  {
    id:8,
    value:'a',
    category: 'sepatu'

  },
]

let cnth = 'jewelery yeni'

let newArr = []

newArr = product.filter((e) => new RegExp(cnth, "i").test(e.category))

 console.log(newArr)

