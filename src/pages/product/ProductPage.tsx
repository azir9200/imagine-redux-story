import Products from "../../components/Products";
import BenefitsSection from "../../components/shareHome/BenefitsSection";
import ImageGallery from "../../components/shareHome/Gallery";
import Header from "./Header";

const ProductPage = () => {
  return (
    <div>
      <Header />
      <BenefitsSection />
      <Products />
      <ImageGallery />
    </div>
  );
};

export default ProductPage;
