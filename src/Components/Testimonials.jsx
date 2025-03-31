const Testimonials = () => {
    const testimonials = [
      { id: 1, text: "¡El mejor café que he probado!", author: "Juan Pérez" },
      { id: 2, text: "Cacao puro y delicioso.", author: "María Gómez" },
    ];
  
    return (
      <section className="testimonials-section">
        <h2>Testimonios</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p>"{testimonial.text}"</p>
              <span>- {testimonial.author}</span>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;