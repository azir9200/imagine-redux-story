import { CreditCard, Trash2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { clearCart } from "../redux/features/cartSlice";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { tax, taxRate, grandTotal, totalPrice, selectedItems } =
    useAppSelector((store) => store.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-full lg:w-[390px] bg-slate-400 border border-slate-200 rounded-lg shadow-sm h-fit">
      <div className="px-6 py-6 space-y-4">
        <h1 className="text-2xl font-bold text-slate-800">Order Summary</h1>
        <div className="space-y-2">
          <div className="flex justify-between text-slate-600">
            <span>Selected Items:</span>
            <span>{selectedItems}</span>
          </div>

          <div className="flex justify-between text-slate-600">
            <span>Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-slate-600">
            <span>Tax ({(taxRate * 100).toFixed(0)}%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          <div className="h-px bg-slate-200 my-3"></div>

          <div className="flex justify-between text-slate-800 text-lg font-semibold">
            <span>Grand Total:</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
        </div>
        {/* <div>
          <p className="text-white mt-2">Selected Items :{selectedItems} </p>
          <p className=" text-white mt-2">
            Total Price : ${totalPrice.toFixed(2)}{" "}
          </p>
          <p className=" text-white mt-2">
            Tax ({taxRate * 100}): ${tax.toFixed(3)}
          </p>
          <h3 className="text-xl font-semibold text-white mt-4">
            Grand Total ${grandTotal.toFixed(3)}
          </h3>
        </div> */}
      </div>

      {/* <div className="px-4 pb-6">
        {" "}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClearCart();
          }}
          className="hover:bg-emerald-500 hover:text-slate-800 px-3 py-2 bg-white  mt-2 rounded-md w-full text-md flex justify-between items-center mb-4"
        >
          <span>Clear Cart</span>
          <Trash2 className="inline" width={15} height={15} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate("/checkout");
          }}
          className="hover:bg-emerald-500 hover:text-slate-800 px-3 py-2 bg-white  mt-2 rounded-md w-full text-md flex justify-between items-center"
        >
          <span>Proceed Checkout</span>
          <CreditCard className="inline" width={15} height={15} />
        </button>
      </div> */}

      <div className="px-6 pb-6 space-y-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClearCart();
          }}
          className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-md w-full text-sm font-medium flex justify-between items-center hover:bg-slate-50 transition-colors"
        >
          <span>Clear Cart</span>
          <Trash2 className="inline" width={16} height={16} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate("/checkout");
          }}
          className="px-4 py-2.5 bg-emerald-600 text-white rounded-md w-full text-sm font-medium flex justify-between items-center hover:bg-emerald-700 transition-colors"
        >
          <span>Proceed to Checkout</span>
          <CreditCard className="inline" width={16} height={16} />
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
