import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCartThunk, setCart } from "../store/slices/cart.slice"
import CartProduc from "../components/CartPage/CartProduc"
import axios from "axios"
import getConfigToken from "../utils/getTokenConfig"

const CartPage = () => {

const cart = useSelector( store => store.cart)

const dispatch = useDispatch()

useEffect(() =>{
dispatch(getCartThunk())

},[])

console.log(cart)

const totalPriceCart = cart.reduce((acc,cv) => {
  const price = Number(cv.product.price)
  return acc + price * cv.quantity
}, 0)

  const handlePurchase = () => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    axios.post(url,'', getConfigToken() )
    .then(res => {

      console.log(res.data)
      dispatch(setCart([]))
      alert('Gracias por su compra')
    }
      
      )
    .catch(err => console.log(err))
  }

return (
    <div>
      <h1>Cart</h1>
      <div>
        {
          cart.map(prod => (
              <CartProduc 
              key={prod?.id} 
              prod={prod}/>  

          ))
        }
      </div>
      <hr />
      <footer>
        <span>Total: </span>
        <span>{totalPriceCart}</span>
        <button onClick={handlePurchase}>Checkout</button>
      </footer>
    </div>
  )
}

export default CartPage