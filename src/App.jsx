
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ProducidPages from './pages/ProducidPages'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import HeaderNav from './components/shared/HeaderNav'
import CartPage from './pages/CartPage'
import PurchasesPages from './pages/PurchasesPages'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {
  
  return (
    <div>
      <HeaderNav  />
      <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/products/:id' element={<ProducidPages />}/>
      <Route path='/register' element={<RegisterPage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route element={<ProtectedRoutes  />} >
      <Route path='/cart' element={<CartPage />} />
      <Route path='/purchases' element={<PurchasesPages/>}/>
      </Route>
      
      </Routes>
    </div>
  )
}

export default App
