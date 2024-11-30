import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center  justify-center min-h-screen bg-blue-300">
      <div className="bg-blue-900 shadow-lg rounded-lg p-6 mx-4 md:p-10 text-center">
        <svg
          className="w-16 h-16 text-green-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m0 0a9 9 0 110-2 9 9 0 010 2z"
          ></path>
        </svg>
        <h2 className="text-2xl font-bold text-green-500 mb-2">
          Payment Successful!
        </h2>
        <p className="text-green-600 text-xl font-bold mb-6">
          Thank you for your payment. Your transaction was completed
          successfully.
        </p>
        <button
          onClick={() => navigate("/products")}
          className="bg-green-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 mb-4"
        >
          See more Product
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 mb-4"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
