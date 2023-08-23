const products = [
  {
    id: '1',
    name: 'Pantalon Blanco',
    price: 1222,
    category: 'pantalones',
    img:'https://nikearprod.vtexassets.com/arquivos/ids/660116-1000-1000?v=1779138592&width=1000&height=1000&aspect=true',
    stock: 19,
    description:'Descripcion de pantalon nike'
  },
  {
    id: '2',
    name: 'Pantalon corto negro',
    price: 1222,
    category: 'pantalones',
    img:'https://nikearprod.vtexassets.com/arquivos/ids/600613-1000-1000?v=1779138473&width=1000&height=1000&aspect=true',
    stock: 19,
    description:'Descripcion de pantalon nike'
  },
  {
    id: '3',
    name: 'Conjunto deportivo',
    price: 1222,
    category: 'pantalones',
    img:'https://nikearprod.vtexassets.com/arquivos/ids/311548-1000-1000?v=1779138577&width=1000&height=1000&aspect=true',
    stock: 19,
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
export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId))
    }, 500)
  })
}