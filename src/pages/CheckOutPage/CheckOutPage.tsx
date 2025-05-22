/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
// import { useToast } from "../../hooks/use-toast";
import CheckoutLayout from "./checkoutLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../components/ui/card";
import { useToast } from "../../hooks/use-toast";
import { Badge } from "../../components/ui/badge";
import CartSummary from "./CartSummery";
import BillingDetails from "./BilingDetails";
import { Separator } from "../../components/ui/separator";
import { Check, ShieldCheck } from "lucide-react";
import { Label } from "../../components/ui/label";
import img1 from "../../../src/assets/assets/Screenshot_2025-05-02_210353-removebg-preview.png";
import img2 from "../../../src/assets/assets/Screenshot_2025-05-02_210518-removebg-preview.png";
import { Button } from "../../components/ui/button";

// Mock data for this example
const cartItems = [
  { id: "1", name: "Premium Package", quantity: 1, price: 99.99 },
  { id: "2", name: "Basic Service", quantity: 2, price: 24.99 },
];

const CheckOut = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Order placed successfully",
        description: "You will receive a confirmation email shortly.",
      });
    }, 1500);
  };

  // Calculate total
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 5.99;
  const total = subtotal + shipping;

  // const navigate = useNavigate();
  // const [createOrder] = useCreateOrderMutation();
  // //get me query
  // const { data } = useGetMeQuery(undefined);
  // const myself = data?.data;
  // const cartItems = useAppSelector((store) => store.cart.products);
  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   const data = {
  //     user: myself,
  //     products: cartItems.map((item: any) => ({
  //       product: item._id,
  //       quantity: item.quantity,
  //     })),
  //   };
  //   // order data creating here
  //   try {
  //     const res = await createOrder(data).unwrap();

  //     toast.success("Successfully submitted");

  //     if (res.success) {
  //       // window.location.href = res.data.payment_url;
  //       console.log("href", res.data);
  //     } else {
  //       console.error("Order creation failed:", res.message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <CheckoutLayout>
      <div className="flex w-full gap-5 ">
        {/* Left side - Order details and summary */}

        <div className="w-2/3 space-y-8">
          <Card className="shadow-md">
            <CardHeader className="border-b bg-muted/30">
              <CardTitle className="flex items-center">
                <span className="mr-2">Order Summary</span>
                <Badge variant="outline" className="ml-2 bg-primary/10">
                  {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
                </Badge>
              </CardTitle>
              <CardDescription>
                Review your items before proceeding to payment
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <CartSummary items={cartItems} />
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="border-b bg-muted/30">
              <CardTitle>Billing Details</CardTitle>
              <CardDescription>
                Please provide your billing information
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <BillingDetails />
            </CardContent>
          </Card>
        </div>
        {/* Right side - Payment summary */}
        <div>
          <Card className="sticky top-14 shadow-md">
            <CardHeader className="border-b bg-muted/30">
              <CardTitle>Payment Summary</CardTitle>
              <CardDescription>Secure payment via Stripe</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex items-center justify-between font-medium">
                  <span>Total</span>
                  <span className="text-lg">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="rounded-lg bg-muted/50 p-3 text-sm flex items-center">
                <ShieldCheck className="h-4 w-4 mr-2 text-green-500" />
                <span>Your payment information is secure</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Available Payment</Label>
                  <div className="grid grid-cols-1 gap-2">
                    <img src={img1} className=" w-60" alt="Bkash" width="50" />
                    <img
                      src={img2}
                      className=" w-60"
                      alt="Google Pay"
                      width="50"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      Processing <span className="animate-spin">...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Pay ${total.toFixed(2)} <Check className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>

              <div className="text-xs text-center text-muted-foreground pt-2">
                By clicking "Pay" you agree to our Terms of Service and Privacy
                Policy
              </div>
            </CardContent>
          </Card>
        </div>
        <form onSubmit={handleSubmit}>
          {/* <div className="mb-8 border p-5 rounded">
            <h3 className="text-xl  text-white font-semibold mb-4">
              User Information
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-base font-medium text-white  text-left">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={myself?.name}
                  required
                  className="mt-1 block w-full bg-white p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
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
                  className="mt-1 block w-full bg-white p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
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
                  className="mt-1 block w-full bg-white p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
          </div> */}

          {/* <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Azir Order Summary</h3>
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
          </div> */}

          {/* <div className="flex justify-end">
            <button
              type="submit"
              onClick={() => navigate("/payment/success")}
              className="bg-white text-slate-900 font-semibold py-2 px-6 rounded-lg hover:bg-emerald-700 transition duration-300"
            >
              Proceed to Payment
            </button>
          </div> */}
        </form>
      </div>
    </CheckoutLayout>
  );
};
export default CheckOut;
