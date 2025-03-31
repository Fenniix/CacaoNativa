const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-text">
        <h1>Café y Cacao de Origen Peruano</h1>
        <p>Productos 100% orgánicos y de comercio justo</p>
        <button className="hero-button">Explorar Productos</button>
      </div>
      {/* Espacio para tu imagen */}
      <img 
        src="/src/assets/images/hero-banner.jpg" 
        alt="Plantación de café" 
        className="hero-image"
      />
    </section>
  );
};

export default HeroBanner;