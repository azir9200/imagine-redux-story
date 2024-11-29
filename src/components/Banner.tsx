const Banner = () => {
  return (
    <div className="mt-3  w-full bg-gradient-to-r from-slate-400 to-gray-400 text-white py-16 text-center">
      <div className="">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to FitGear Store. A E-Commerce Product Brand Land.
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">
          Your gateway to quality products and excellent service.
        </p>
        <a
          href="/products"
          className="bg-blue-400 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300 shadow-lg"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Banner;
