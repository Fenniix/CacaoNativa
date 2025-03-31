import HeroBanner from "../components/HeroBanner";
import ProductGrid from "../components/ProductGrid";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="home-page">
      <HeroBanner />
      <ProductGrid />
      <Testimonials />
    </div>
  );
};

export default Home;