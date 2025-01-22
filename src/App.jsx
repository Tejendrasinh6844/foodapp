 import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './pages/Menu'
import Category from './pages/Category'
import SingleProductPage from './pages/product'
import OrdersPage from './pages/Orders'
import LoginPage from './pages/Login'
import Notification from './components/Notification'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
function App() {
 
  return (
    <>
   <BrowserRouter>
    <Notification/>
    <Navbar/>
<Routes>

  <Route path="/" element={<Home />} />
  <Route path="/menu" element={<Menu />} />
  <Route path="/menu/:category" element={<Category />} />
  <Route path="/product/:id" element={<SingleProductPage />} />
  <Route path="/order" element={<OrdersPage />} />
  <Route path="/login" element={<LoginPage />} />
</Routes>
   <Footer/>
   </BrowserRouter>
    </>
  )
}

export default App
