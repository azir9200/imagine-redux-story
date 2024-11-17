import Banner from "../components/Banner";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-green-700 to-red-600 w-full">
      <Banner />
      {/* <ImageGallery /> */}
      <Products />
    </div>
  );
};

export default Home;
