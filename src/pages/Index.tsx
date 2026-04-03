import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Products />
      <Testimonials />
      <Promo />
      <Footer />
    </main>
  );
};

export default Index;