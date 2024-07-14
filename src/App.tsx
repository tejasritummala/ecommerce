import './App.css'
import Home from './components/Home'
import Cart from './components/cart'
import Login from './components/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductListing from './components/ProductListing'
import ProductDetail from './components/ProductDetail'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
