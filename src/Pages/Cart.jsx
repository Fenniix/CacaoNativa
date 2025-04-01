import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

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

const Cart = () => {
  // Ejemplo de datos del carrito (en una app real esto vendría de un estado global o props)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Cacao en Polvo Premium",
      price: 25.00,
      image: "/img/img1.jpg",
      quantity: 2
    },
    {
      id: 2,
      name: "Tableta de Chocolate 70%",
      price: 35.00,
      image: "/img/img2.jpg",
      quantity: 1
    }
  ]);

  // Calcular total
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15.00; // Envío gratis para compras > $100
  const total = subtotal + shipping;

  // Actualizar cantidad
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? {...item, quantity: newQuantity} : item
    ));
  };

  // Eliminar producto
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="cart-app">
      <Navbar />
      
      <div className="cart-container">
        <h1>Tu Carrito de Compras</h1>
        
        {cartItems.length > 0 ? (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>${item.price.toFixed(2)}</p>
                    
                    <div className="quantity-controls">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="quantity-btn"
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="remove-item"
                    >
                      Eliminar
                    </button>
                  </div>
                  <div className="cart-item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <h2>Resumen de Compra</h2>
              
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="summary-row">
                <span>Envío:</span>
                <span>{shipping === 0 ? 'Gratis' : `$${shipping.toFixed(2)}`}</span>
              </div>
              
              <div className="summary-row total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              
              <button className="checkout-btn">
                Proceder al Pago
              </button>
              
              <Link to="/products" className="continue-shopping">
                ← Seguir comprando
              </Link>
            </div>
          </div>
        ) : (
          <div className="empty-cart">
            <h2>Tu carrito está vacío</h2>
            <p>Agrega algunos productos deliciosos de cacao</p>
            <Link to="/products" className="shop-btn">
              Ver Productos
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;