import Banner from "../components/Banner";
import HomeSlide from "../components/shareHome/Carousal";
import HomeProducts from "../components/shareHome/HomeProducts";

const Home = () => {
  return (
    <div className="bg-slate-500 w-full">
      <HomeSlide />
      <Banner />
      <HomeProducts />
    </div>
  );
};

export default Home;
