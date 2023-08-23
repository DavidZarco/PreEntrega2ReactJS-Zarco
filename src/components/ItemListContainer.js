import React , { useState, useEffect} from 'react';
import { getProducts } from '../products'
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {
  console.log(getProducts);
  const [products, setProducts] = useState([])

    useEffect(() => {
      getProducts()
        .then(response => {
          setProducts(response)
        })
        .catch(error => {
          console.error(error)
        })
    },[])
    return(
      <div>
        <h1>{greeting}</h1>
        <ItemList products={products}/>
      </div>
  )
} 
;


export default ItemListContainer;

