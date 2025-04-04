import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../styles/Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Navbar
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/img/LogoNav.png" className='logo' alt="Logo Cacao Nativa"/>
      <Link to="/" className="navbar-logo">Cacao Nativa</Link>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/products">Productos</Link>
        <Link to="/cart">Carrito 🛒</Link>
      </div>
    </nav>
  );
};

// Carrusel
const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    adaptiveHeight: false
  };

  const images = [
    '/img/Carrusel1.png',
    '/img/Carrusel2.jpeg',
    '/img/Carrusel3.jpg'
  ];

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="slide-item">
              <img 
                src={img} 
                alt={`Slide ${index + 1}`} 
                className="carousel-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// Sección de Productos
const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "Cacao en Polvo Premium",
      price: "$300.00",
      image: "../img/img1.jpg",
      description: "100% puro, origen orgánico"
    },
    {
      id: 2,
      name: "Tableta de Chocolate 70%",
      price: "$60.00",
      image: "../img/img3.jpg",
      description: "Elaboración artesanal"
    },
    {
      id: 3,
      name: "Nibs de Cacao",
      price: "$250.00",
      image: "../img/img2.jpg",
      description: "Crujientes y nutritivos"
    },
    {
      id: 4,
      name: "Frappe de chocolate con cafe",
      price: "$100.00",
      image: "../img/img4.jpg",
      description: "Delicioso y artesanal"
    },
    {
      id: 5,
      name: "Chocolate maya caliente (100% cacao)",
      price: "$52.00",
      image: "../img/img5.png",
      description: "Caliente y con sabor"
    },
    {
      id: 6,
      name: "Frappe de cafe",
      price: "$80.00",
      image: "../img/img6.jpg",
      description: "Crujientes y nutritivos"
    }
  ];

  return (
    <div className="product-section1">
      <h2 className="section-title">Nuestros Productos</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card1">
            <img src={product.image} alt={product.name} className="product-image"/>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
              <button className="add-to-cart">Añadir al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente del Mapa
const MapSection = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '10px',
    margin: '20px 0'
  };

  const center = {
    lat: 16.745737086030985,  // Coordenadas de Cacao Nativa
    lng: -93.07488379336806
  };

  return (
    <div className="map-section">
      <h2 className="section-title">Nuestras Ubicaciones</h2>
      <div className="map-container">
        <LoadScript
          googleMapsApiKey="AIzaSyDzdrgcmR7Hx0L_kCqHDg4JJS1iJ_YDCso" 
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={15}
          >
            <Marker 
              position={center}
              label="Cacao Nativa"
            />
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="location-info">
        <p>📍 Dirección: Carr. Panamericana a Chiapa de Corzo 651-Local Ex.01, Zona Sin Asignación de Nombre de Col 24, 29096 Tuxtla Gutiérrez, Chis.</p>
        <p>🕒 Horario: Lunes a Viernes 9:00 - 18:00</p>
      </div>
    </div>
  );
};

// Componente principal
const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="content-wrapper">
        <ImageCarousel />
        <ProductSection />
        <MapSection />
      </div>
    </div>
  );
};

export default Home;