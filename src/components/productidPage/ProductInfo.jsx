import { useState } from "react"
import { addProductToCartThunk } from "../../store/slices/cart.slice"
import { useDispatch } from "react-redux"

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1)

  const handleMinus = () =>{
    if(quantity > 0){
 
    setQuantity(quantity - 1)
    }
  }

  const handlePlus = () =>{
    setQuantity(quantity + 1)

  }

const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addProductToCartThunk(product?.id, quantity))
  }
  return (
    <article>
      <h1>{product?.brand}</h1>
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <footer>
        <div>
          <span>Price</span>
          <span>{product?.price}</span>
        </div>
        <div>
          <button onClick={handleMinus}>-</button>
          <div>{quantity}</div>
          <button onClick={handlePlus}>+</button>
        </div>
        <button onClick={handleAddToCart}>add to cart</button>
      </footer>
    </article>
  )
}

export default ProductInfo