import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout"; // Import StripeCheckout component
import Cartitem from "../Components/Cartitem";

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [playNow, setPlayNow] = useState(false);

  // Calculate subtotal
  const subtotal = productData.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleCheckOut = () => {
    if (userInfo) {
      setPlayNow(true);
    } else {
      toast.error("Please sign in or create an account");
      // You might want to redirect the user to the sign-in page here
    }
  };

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="../Assets/cart.jpg" // Make sure the image path is correct
        alt="Cart"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <Cartitem />
        <div className="w-1/3 bg-white py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-500 pb-6">
            <h2 className="text-2xl font-medium">Cart Total</h2>

            <p className="flex items-center gap-4 text-base">
              Subtotal{" "}
              <span className="font-semibold text-lg">${subtotal}</span>
            </p>

            {/* You might want to handle shipping charges dynamically */}
            <p className="flex items-start gap-4 text-base">
              Shipping:{" "}
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                eum tenetur corrupti dignissimos possimus laboriosam repellat
                fugit quibusdam assumenda? Quas exercitationem et enim rerum
                delectus ullam eveniet quia vel architecto!
              </span>
            </p>

            <p>
              Total{" "}
              <span className="text-xl font-bold">${subtotal}</span>
            </p>

            <button
              onClick={handleCheckOut}
              className="bg-blue-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Proceed to checkout
            </button>

            {/* Display Stripe checkout component if playNow is true */}
            {playNow && (
              <div>
                <StripeCheckout
                  stripeKey="pk_test_51OIVUnHWNR5yak9vKD1xUulhpzziMwhzZRt0BiSkiJGarj8lAGJ1M80l9tvVL8MMeWMnw6zH772Y9rr6Xt6qLOJB00T9xk513q"
                  name="Online Shop"
                  amount={subtotal * 100} // Convert to cents
                  label="Proceed to Pay"
                  description="Complete your purchase"
                   // Callback function to handle token
                  email={userInfo.email} // Pass user's email
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
