import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Collection from './pages/Collection'
import Product from './pages/Product'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Order from './pages/Order'


function App() {
 

  return (
    <div>
      <Navbar/>
      <div className='pt-20 px-6 sm:px-20'>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/product/:productId' element={<Product/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<PlaceOrder/>} />
          <Route path='login' element={<Login/>} /> 
          <Route path='/order' element={<Order/>} />

        </Routes>
        
      </div>
      <Footer />
    </div>
  )
}

export default App
