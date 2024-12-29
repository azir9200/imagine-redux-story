import Banner from "../components/Banner";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="bg-slate-500 w-full">
      {/* <div className="bg-gradient-to-r from-blue-400 to-gray-400 w-full"> */}
      <Banner />
      <Products />
    </div>
  );
};

export default Home;
