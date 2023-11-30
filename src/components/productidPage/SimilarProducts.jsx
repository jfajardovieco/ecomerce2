import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import ProductCard from '../HomePage/ProductCard'


const SimilarProducts = ({ categoryId, idProd }) => {

    const [ productsByCategory, getProductByCategory ] = useFetch()
useEffect(() => {
    if(categoryId){
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${categoryId}`
getProductByCategory(url)
}
},[categoryId])
  return (
    <article>
        <h2>Similar Proudct</h2>
        <div>
            {
                productsByCategory?.filter((prod) => prod.id !== idProd ).map(product => (
                    <ProductCard ket={product.id} product={product}/>
                ))
            }
        </div>

    </article>
  )
}

export default SimilarProducts