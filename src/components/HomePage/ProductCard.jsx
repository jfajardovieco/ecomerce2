import { useNavigate } from "react-router-dom"
import { addProductToCartThunk } from "../../store/slices/cart.slice"
import { useDispatch } from "react-redux"
import './style/ProductCard.css'

const ProductCard = ({ product }) => {
const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleNavegate = () => {
        navigate(`/products/${product.id}`)
    }

    const handleAddCart = e => {
e.stopPropagation()
dispatch(addProductToCartThunk(product.id, 1))
    }

  return (
    <article className="product" onClick={handleNavegate}>
        <header className="product__header">
            <img className="product__img product__img-1" src={product.images[0].url} alt="" />
            <img className="product__img product__img-2" src={product.images[1].url} alt="" />
        </header>
        <section className="product__body">
            <h4 className="product__brand">{product.brand}</h4>
            <h3 className="product__name">{product.brand}</h3>
            <div className="product__price">
                <span className="product__price__label">Price</span>
                <span className="product__price__value">{product.price}</span>
            </div>
            <button  className="product__btn" onClick={handleAddCart}>
            <i className='bx bx-cart product__iconcart'></i>
            </button>
        </section>
    </article>
  )
}

export default ProductCard