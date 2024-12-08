/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Modal from "./Modal";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/features/cartSlice";
import toast from "react-hot-toast";

const ProductCart = ({ product }: { product: any }) => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleShowModal = (product: any) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    toast.success(<div> You Product added to cart successfully! </div>);
  };

  return (
    <div className="relative">
      {showModal && (
        <Modal
          product={selectedProduct}
          onClose={handleCloseModal}
          handleAddToCart={() => {}}
        />
      )}

      <div
        onClick={() => handleShowModal(product)}
        className="border rounded-lg shadow-lg overflow-hidden bg-blue-200 transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col h-full"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-75"
        />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-blue-700 mb-2">
            {product.name}
          </h3>
          <p className="text-blue-700 font-semibold text-lg mb-4 flex-grow">
            {product.description}
          </p>
          <p className="text-lg font-bold text-purple-800 mb-4">
            {product.price}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart(product);
            }}
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-300 shadow-md hover:shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
