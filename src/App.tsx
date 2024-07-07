import './App.css'
import Home from './components/Home'
import Cart from './components/cart'
import About from './components/about'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductListing from './components/ProductListing'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<ProductListing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
