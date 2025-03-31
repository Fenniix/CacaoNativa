const ProductGrid = () => {
  const products = [
    { id: 1, name: "Café Andino", price: "S/ 25", image: "/src/assets/images/cafe-1.jpg" },
    { id: 2, name: "Cacao Chuncho", price: "S/ 30", image: "/src/assets/images/cacao-1.jpg" },
  ];

  return (
    <section className="product-grid">
      <h2>Nuestros Productos</h2>
      <div className="product-grid-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button className="product-button">Añadir al carrito</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;