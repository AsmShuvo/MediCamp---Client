import React, { useContext } from "react";
import useCarts from "../../../../hooks/useCart";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const Cart = () => {
  const [carts] = useCarts();
  const { user } = useContext(AuthContext);

  const axiosSecure = useAxiosPublic();
  const { data: regedCamps = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });
  console.log(regedCamps);
  console.log(regedCamps[0]?.cartFees[0]);
  const regedCampsWithFees = regedCamps?.flatMap((item) => {
    return item?.cartNames.map((name, idx) => {
      return {
        name,
        fees: item.cartFees[idx],
        status: item?.status,
      };
    });
  });
  console.log(regedCampsWithFees);

  const myCart =
    carts?.filter((cart) => cart.participant_email === user?.email) || [];
  const totalPrice = myCart?.reduce((total, cart) => {
    const fee = cart.campFee || 0;
    return total + (isNaN(fee) ? 0 : fee);
  }, 0);
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
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Camp name
                </th>
                <th scope="col" className="px-6 py-3">
                  Fees
                </th>
                <th scope="col" className="px-6 py-3">
                  Payment Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Payment Confirmation Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
                <th scope="col" className="px-6 py-3">
                  Feedback
                </th>
              </tr>
            </thead>
            <tbody>
              {regedCampsWithFees?.length}
              {regedCampsWithFees?.map((camp, id) => (
                <tr
                  key={camp.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {camp.name}
                  </th>
                  <td className="px-6 py-4"> ${camp.fees} </td>
                  <td className="px-6 py-4">Paid </td>
                  <td className="px-6 py-4"> {camp.status} </td>
                  <td className="px-6 py-4">
                    <div
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Cancel
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Show
                    </div>
                  </td>
                </tr>
              ))}
              {myCart.map((cart) => (
                <tr
                  key={cart._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {cart.camp_name}
                  </th>
                  <td className="px-6 py-4">${cart.campFee}</td>
                  <td className="px-6 py-4">{cart.status}</td>
                  <td className="px-6 py-4">{cart.confirmation}</td>
                  <td className="px-6 py-4">
                    <div
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Cancel
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
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
      {myCart?.length ? (
        <>
          <div className="text-center">
            <Link to="/dashboard/payment">
              <button className="btn bg-gradient-to-r border-none from-gray-700 to-gray-800 hover:transfor hover:scale-105 text-white font-bold tracking-widest btn-wide ">
                PAY
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="text-center">
            <button
              disabled
              className="btn bg-gradient-to-r border-none from-gray-700 to-gray-800 hover:transfor hover:scale-105 text-white font-bold tracking-widest btn-wide "
            >
              PAY
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
