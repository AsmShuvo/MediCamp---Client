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
      {/* table starts here */}
      <div className="m-10">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Camp name
                </th>
                <th scope="col" class="px-6 py-3">
                  Fees
                </th>
                <th scope="col" class="px-6 py-3">
                  Location
                </th>
                <th scope="col" class="px-6 py-3">
                  Payment Status
                </th>
                <th scope="col" class="px-6 py-3">
                  Payment Confirmation Status
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
                <th scope="col" class="px-6 py-3">
                  Feedback
                </th>
              </tr>
            </thead>
            <tbody>
              {myCart.map((cart) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {cart.name}
                  </th>
                  <td class="px-6 py-4">${cart.campFee}</td>
                  <td class="px-6 py-4">{cart.location}</td>
                  <td class="px-6 py-4">=</td>
                  <td class="px-6 py-4">=</td>
                  <td class="px-6 py-4">
                    <div
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Cancel
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Show
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
