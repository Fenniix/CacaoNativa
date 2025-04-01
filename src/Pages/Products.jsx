import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Products.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/img/LogoNav.png" className='logo' alt="Logo Cacao Nativa"/>
      <Link to="/" className="navbar-logo">Cacao Nativa</Link>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/products">Productos</Link>
        <Link to="/cart">Carrito 🛒</Link>
      </div>
    </nav>
  );
};

const Products = () => {
  // Estado para los productos
  const [products] = useState([
    {
      id: 1,
      name: "Cacao en Polvo Premium",
      price: 300.00,
      image: "/img/img1.jpg",
      description: "100% puro, origen orgánico",
      category: "polvo",
      stock: 10
    },
    {
      id: 2,
      name: "Tableta de Chocolate 70%",
      price: 60.00,
      image: "/img/img3.jpg",
      description: "Elaboración artesanal",
      category: "chocolate",
      stock: 15
    },
    {
      id: 3,
      name: "Nibs de Cacao",
      price: 250.00,
      image: "/img/img2.jpg",
      description: "Crujientes y nutritivos",
      category: "nibs",
      stock: 8
    },
    {
      id: 4,
      name: "Frappe de chocolate con café",
      price: 100.00,
      image: "/img/img4.jpg",
      description: "Delicioso y artesanal",
      category: "bebidas",
      stock: 12
    },
    {
      id: 5,
      name: "Chocolate maya caliente (100% cacao)",
      price: 52.00,
      image: "/img/img5.png",
      description: "Caliente y con sabor tradicional",
      category: "bebidas",
      stock: 7
    },
    {
      id: 6,
      name: "Frappe de café",
      price: 80.00,
      image: "/img/img6.jpg",
      description: "Refrescante y energético",
      category: "bebidas",
      stock: 9
    },
    {
      id: 7,
      name: "Mantequilla de Cacao",
      price: 1000.00,
      image: "/img/img7.jpeg",
      description: "Crema natural para repostería",
      category: "derivados",
      stock: 5
    }
  ]);

  // Estado para filtros
  const [categoryFilter, setCategoryFilter] = useState('todos');
  const [priceFilter, setPriceFilter] = useState([0, 1100]); // Rango máximo a $1100
  const [cart, setCart] = useState([]);

  // Filtrar productos
  const filteredProducts = products.filter(product => {
    const price = typeof product.price === 'string' 
      ? parseFloat(product.price.replace('$', '')) 
      : product.price;
    
    const matchesCategory = categoryFilter === 'todos' || product.category === categoryFilter;
    const matchesPrice = price >= priceFilter[0] && price <= priceFilter[1];
    
    return matchesCategory && matchesPrice;
  });

  // Agregar al carrito
  const addToCart = (product) => {
    setCart([...cart, {...product, quantity: 1}]);
  };

  return (
    <div className="products-app">
      <Navbar />
      
      <div className="products-page">
        {/* Sidebar de filtros */}
        <div className="filters-sidebar">
          <h3>Filtrar Productos</h3>
          
          <div className="filter-group">
            <h4>Categorías</h4>
            <select 
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="todos">Todos</option>
              <option value="polvo">Cacao en polvo</option>
              <option value="chocolate">Chocolate</option>
              <option value="nibs">Nibs de cacao</option>
              <option value="bebidas">Bebidas</option>
              <option value="derivados">Derivados</option>
            </select>
          </div>

          <div className="filter-group">
            <h4>Rango de Precio</h4>
            <div className="price-range">
              <span>${priceFilter[0]}</span>
              <input 
                type="range" 
                min="0" 
                max="1100"
                step="10"
                value={priceFilter[1]}
                onChange={(e) => setPriceFilter([priceFilter[0], parseInt(e.target.value)])}
              />
              <span>${priceFilter[1]}</span>
            </div>
          </div>

          <div className="cart-preview">
            <h4>Tu Carrito ({cart.length})</h4>
            {cart.length > 0 ? (
              <Link to="/cart" className="view-cart-btn">Ver Carrito</Link>
            ) : (
              <p>Tu carrito está vacío</p>
            )}
          </div>
        </div>

        {/* Lista de productos */}
        <div className="products-grid">
          <h2>Nuestros Productos de Cacao</h2>
          
          {filteredProducts.length > 0 ? (
            <div className="products-container">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image-container">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="product-image"
                    />
                    {product.stock < 5 && (
                      <span className="stock-alert">¡Últimas unidades!</span>
                    )}
                  </div>
                  
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                    
                    <div className="product-actions">
                      <button 
                        onClick={() => addToCart(product)}
                        disabled={product.stock === 0}
                        className="add-to-cart-btn"
                      >
                        {product.stock > 0 ? 'Añadir al carrito' : 'Agotado'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-products">No hay productos que coincidan con tus filtros.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;