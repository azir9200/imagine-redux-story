/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShoppingCart } from "lucide-react";
import Rating from "./Ratings";

const Modal = ({ product, onClose, handleAddToCart }: any) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-blue-200 shadow-lg rounded-2xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden">
          <img
            className="sm:order-2 w-full object-cover h-full max-sm:max-h-[300px]"
            src={product?.image}
            alt={product?.name}
          />
          <div className="p-5 lg:p-11">
            <div>
              <h2 className="text-3xl lg:text-[50px] mb-2 font-bold text-blue-700">
                {product?.name}
              </h2>
              <p className="text-xl lg:text-base text-blue-700">
                {product?.description}
              </p>
            </div>
            <div className="flex space-x-5 items-center">
              <Rating value={product?.ratings} />
            </div>
            <p className="text-sm lg:text-base mb-8 lg:mb-16 font-semibold mt-3 text-gray-800">
              {product?.seller}
            </p>

            <div className="grid lg:grid-cols-2 gap-2">
              <a
                className="bg-blue-700 rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-white font-semibold text-sm hover:bg-purple-700 transition duration-300"
                href="#"
                onClick={(e) => handleAddToCart(e, product)}
              >
                <ShoppingCart />
                <span>${product?.price} | Add to Cart</span>
              </a>
              <a
                onClick={onClose}
                className="border border-red-600 rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-red-600 font-semibold text-sm hover:bg-red-50 transition duration-300"
                href="#"
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
