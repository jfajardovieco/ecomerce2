import ProductInfo from "../components/productidPage/ProductInfo"
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import SimilarProducts from "../components/productidPage/SimilarProducts"
import SliderImgs from "../components/productidPage/SliderImgs"

const ProducidPages = () => {
  const { id }= useParams()
  const [product, getProduct]= useFetch()

  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
getProduct(url)

  },[id])

  

  return (
    <div className="product__containter">
      <SliderImgs product={product} />
      <ProductInfo product={product} />
      <SimilarProducts categoryId={product?.category.id} idProd={product?.id}/>

    </div>
  )
}

export default ProducidPages