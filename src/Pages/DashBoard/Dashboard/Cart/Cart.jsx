import React, { useContext } from "react";
import useCarts from "../../../../hooks/useCart";
import { AuthContext } from "../../../../Providers/AuthProvider";

const Cart = () => {
  const [carts] = useCarts();
  const { user } = useContext(AuthContext);

  // Ensure carts and user are defined before filtering
  const myCart =
    carts?.filter((cart) => cart.participant_email === user?.email) || [];
  console.log("My cart", myCart);

  // Calculate total price safely
  const totalPrice = myCart?.reduce((total, cart) => {
    const fee = cart.campFee || 0;
    return total + (isNaN(fee) ? 0 : fee);
  }, 0);
  console.log(totalPrice);

  return (
    <div>
      <div className="flex justify-evenly mt-4 font-serif">
        <h2 className="text-3xl text-white rounded-full px-4 py-1 bg-secondary">
          Registered Camps: {myCart?.length}
        </h2>
        <h2 className="text-3xl text-gray-800 rounded-full px-4 py-1 bg-primary">
          Total Price: ${totalPrice}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
