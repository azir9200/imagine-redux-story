import { useNavigate } from "react-router-dom";

const PaymentFailed = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center  justify-center min-h-screen bg-blue-300">
      <div className="bg-blue-900 shadow-lg rounded-lg p-6 mx-4 md:p-10 text-center">
        <svg
          className="w-16 h-16 text-red-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        <h1 className="text-2xl font-bold text-red-600 mb-2">Payment Failed</h1>
        <p className="text-gray-600 mb-6">
          Unfortunately, your payment could not be processed. Please try again.
        </p>
        <button
          onClick={handleRedirect}
          className="bg-blue-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 mb-4"
        >
          Try Again
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-green-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 mb-4"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentFailed;
