import { useSelector } from 'react-redux'
import { getProductsThunk } from '../store/slices/products.slices'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import ProductCard from '../components/HomePage/ProductCard'
import FilterCategory from '../components/HomePage/FilterCategory'
import FilterPrice from '../components/HomePage/FilterPrice'
import './styles/HomePage.css'

const HomePage = () => {

  const [nameValue, setNameValue] = useState('')
  const [categorySelected, setCategorySelected] = useState('all')
  const [priceRange, setPriceRange] = useState({
    from: 0,
    to: Infinity
  })

    const products = useSelector(store => store.products )
    console.log(products)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(getProductsThunk())

    },[])
    
    const inputName  = useRef ()
    const   handleInputName = () => {
      setNameValue(inputName.current.value.toLowerCase())
    }

    
    const callbackFilter = prod => {
      const filterName = prod.title.toLowerCase().includes(nameValue)
      const filterCategory = categorySelected === 'all' ? true : categorySelected === prod.category.id
      const price = Number(prod.price)
      const filterPrice = priceRange.from <= price && price <= priceRange.to

      return filterName && filterCategory && filterPrice
    }
  return (
    <div>
      <input ref={inputName} onChange={handleInputName} type="text" />
      <div>
        
          <h2>Filters</h2>
          <FilterPrice setPriceRange={setPriceRange} />
          <FilterCategory setCategorySelected={setCategorySelected}  />
        </div>
        <div className='product__containter'>
      {products?.filter(callbackFilter).map((prod) => (
        <ProductCard key={prod.id} product={prod}/>
        

      ))}
      </div>
    </div>
  )
}

export default HomePage

