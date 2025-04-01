import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import Nosotros from './Pages/Nosotros';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </Router>
  )
}

export default App