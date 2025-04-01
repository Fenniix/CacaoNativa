// src/Pages/Nosotros.jsx
import { Link } from 'react-router-dom';
import '../styles/Nosotros.css';

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

const Nosotros = () => {
  return (
    <div className="nosotros-page">
      <Navbar />
      <div className="nosotros-content">
        <h1>Sobre Nosotros</h1>
        
        <section className="historia">
          <h2>Nuestra Historia</h2>
          <p>
            Cacao Nativa nació en 2015 con la misión de rescatar las tradiciones ancestrales
            del chocolate mexicano. Trabajamos directamente con pequeños productores de Chiapas
            para ofrecer productos de la más alta calidad.
          </p>
        </section>

        <section className="mision-vision">
          <div className="mision">
            <h2>Misión</h2>
            <p>
              Promover el consumo responsable de cacao mexicano, manteniendo los procesos
              artesanales y apoyando a las comunidades productoras.
            </p>
          </div>
          
          <div className="vision">
            <h2>Visión</h2>
            <p>
              Ser reconocidos como la marca líder en chocolates artesanales mexicanos,
              preservando nuestras raíces culturales.
            </p>
          </div>
        </section>

        <section className="equipo">
          <h2>Nuestro Equipo</h2>
          <div className="team-members">
            <div className="member">
              <img src="/img/Roberto.jpg" alt="Fundadora"/>
              <h3>María González</h3>
              <p>Fundadora y Chocolatiera</p>
            </div>
            <div className="member">
              <img src="/img/Marlon.jpg" alt="Productor"/>
              <h3>Juan Pérez</h3>
              <p>Productor de Cacao</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Nosotros;