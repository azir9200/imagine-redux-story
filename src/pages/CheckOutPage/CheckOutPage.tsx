/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCreateOrderMutation } from "../../redux/api/orderApi/orderApi";
import { useAppSelector } from "../../redux/hooks";
import { useGetMeQuery } from "../../redux/api/getMeApi/getMeApi";

export default function CheckOutPage() {
  const [createOrder] = useCreateOrderMutation();
  //get me query
  const { data } = useGetMeQuery(undefined);

  const myself = data?.data;

  const cartItems = useAppSelector((store) => store.cart.products);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      user: myself,
      products: cartItems.map((item: any) => ({
        product: item._id,
        quantity: item.quantity,
      })),
    };
    try {
      const res = await createOrder(data).unwrap();
      console.log("res. checkout", res.data);
      console.log(data);

      if (res.success) {
        console.log("res.", res.data.payment_url);
        window.location.href = res.data.payment_url;
        console.log("href", res.data);
      } else {
        console.error("Order creation failed:", res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-6 p-6 bg-blue-300 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-8 border p-5 rounded">
          <h3 className="text-xl font-semibold mb-4">User Information</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-base font-medium text-blue-900 text-left">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={myself?.name}
                required
                className="mt-1 block w-full bg-slate-300 p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-900 text-left">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={myself?.email}
                required
                className="mt-1 block w-full bg-slate-300  p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-900 text-left">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={myself?.address}
                required
                className="mt-1 block w-full bg-slate-300  p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <table className="min-w-full bg-blue-100 border border-gray-300">
            <thead>
              <tr className="bg-blue-100 ">
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  Product
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  Quantity
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item: any) => (
                <tr key={item._id} className="border-b">
                  <td className="py-3 flex px-4">{item.name}</td>
                  <td className="py-3 px-4">{item.quantity}</td>
                  <td className="py-3 px-4">${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
}
