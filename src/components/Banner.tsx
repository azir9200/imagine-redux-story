import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mt-6 w-full bg-slate-700 text-white py-16 text-center">
      <div className="">
        <h1 className="text-4xl md:text-4xl font-bold mb-4 drop-shadow-lg">
          Welcome to FitGear Store. A E-Commerce Product Brand Land.
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">
          Your gateway to quality products and excellent service.
        </p>


        <div className="mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-slate-700 font-medium rounded-full shadow-lg hover:text-white hover:bg-slate-900 hover:shadow-slate-500/30 transition-all duration-300 flex items-center mx-auto"
            >
              <Link to="/product"> Contact Us</Link>
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </div>


        {/* <a
          href="/product"
          className="bg-emerald-500 text-slate-800  hover:bg-white hover:text-slate-800 transition duration-300 shadow-lg font-semibold py-2 px-6 rounded-lg"
        >
          Shop Now
        </a> */}
      </div>
    </div>
  );
};

export default Banner;
