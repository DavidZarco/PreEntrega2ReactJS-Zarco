const products = [
  {
    id: '1',
    name: 'pepe',
    price: 1222,
    category: 'pantalones',
    img:'https://nikearprod.vtexassets.com/arquivos/ids/660116-1000-1000?v=1779138592&width=1000&height=1000&aspect=true',
    stock: 199,
    description:'Descripcion de pantalon nike'
  },
  {
    id: '2',
    name: 'pepe',
    price: 1222,
    category: 'pantalones',
    img:'https://nikearprod.vtexassets.com/arquivos/ids/600613-1000-1000?v=1779138473&width=1000&height=1000&aspect=true',
    stock: 199,
    description:'Descripcion de pantalon nike'
  },
  {
    id: '3',
    name: 'pepe',
    price: 1222,
    category: 'pantalones',
    img:'https://nikearprod.vtexassets.com/arquivos/ids/311548-1000-1000?v=1779138577&width=1000&height=1000&aspect=true',
    stock: 199,
    description:'Descripcion de pantalon nike'
  }
]
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}