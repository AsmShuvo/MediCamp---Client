import React, { useContext, useState } from "react";
import Modal from "react-modal";
import useCarts from "../../../../hooks/useCart";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { MdOutlineDone } from "react-icons/md";
import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";

const Cart = () => {
  const [carts, refetch] = useCarts();
  const { user } = useContext(AuthContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [selectedCamp, setSelectedCamp] = useState(null);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const axiosSecure = useAxiosPublic();
  const { data: regedCamps = [], refetch: refetchPayment } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  const handleSendFeedback = (camp) => {
    setSelectedCamp(camp);
    setModalIsOpen(true);
  };

  const handleDeleteCartItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/participants/${id}/${user?.email}`)
          .then((data) => {
            if (data.data.deletedCount) {
              Swal.fire("Camp cancelled successfully");
              refetch();
            }
          });
      }
    });
  };

  const regedCampsWithFees = regedCamps?.flatMap((item) => {
    return item?.cartNames.map((name, idx) => {
      return {
        name,
        fees: item.cartFees[idx],
        status: item?.status,
      };
    });
  });

  const myCart =
    carts?.filter((cart) => cart.participant_email === user?.email) || [];
  const totalPrice = myCart?.reduce((total, cart) => {
    const fee = cart.campFee || 0;
    return total + (isNaN(fee) ? 0 : fee);
  }, 0);

  // Pagination states and functions
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalItems = myCart.length + regedCampsWithFees.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginate = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleSubmitFeedback = () => {
    console.log("Feedback submitted:", feedback);
    console.log("Rating submitted:", rating);
    const userReview = {
      email: user?.email,
      name: user?.displayName,
      feedback,
      rating,
    };
    axiosSecure.post(`/reviews`, userReview).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire("Thanks For your feedback");
      }
    });

    setModalIsOpen(false);
    setFeedback("");
    setRating(0);
  };

  return (
    <div>
      <div className="flex justify-evenly mt-4 font-serif">
        <h2 className="text-3xl text-gray-800 rounded-full px-4 py-1 bg-primary">
          Total Price Unpaid: ${totalPrice}
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
              {paginate(myCart).map((cart) => (
                <tr
                  key={cart._id}
                  className="border-b text-gray-200 bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {cart.camp_name}
                  </th>
                  <td className="px-6 py-4">${cart.campFee}</td>
                  <td className="px-6 py-4">{cart.status}</td>
                  <td className="pl-10 py-4">
                    <ImCross />
                  </td>
                  <td className="px-6 py-4">
                    <div
                      onClick={() => handleDeleteCartItem(cart._id)}
                      className="font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Cancel
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div
                      onClick={() => handleSendFeedback(cart)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      -
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tbody>
              {paginate(regedCampsWithFees).map((camp, id) => (
                <tr key={id} className="border-b bg-gray-950">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {camp.name}
                  </th>
                  <td className="px-6 py-4">${camp.fees}</td>
                  <td className="px-6 py-4 flex items-center gap-1">
                    Paid{" "}
                    <MdOutlineDone className="text-green-500 border border-green-500 rounded-full" />
                  </td>
                  <td className="px-6 py-4">{camp.status}</td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-blue-600 pl-4 dark:text-blue-500 hover:underline">
                      -
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div
                      onClick={() => handleSendFeedback(camp)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Give Feedback
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Previous
          </button>
          <span className="px-4 py-2 text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>
      {myCart.length ? (
        <div className="text-center">
          <Link to="/dashboard/payment">
            <button className="btn bg-gradient-to-r border-none from-gray-700 to-gray-800 hover:transfor hover:scale-105 text-white font-bold tracking-widest btn-wide">
              PAY
            </button>
          </Link>
        </div>
      ) : (
        <div className="text-center">
          <button
            disabled
            className="btn bg-gradient-to-r border-none from-gray-700 to-gray-800 hover:transfor hover:scale-105 text-white font-bold tracking-widest btn-wide"
          >
            PAY
          </button>
        </div>
      )}

      {/* Feedback Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="flex justify-center items-center"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl mb-4">Provide Feedback</h2>
          <div className="flex mb-4">
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;
              return (
                <button
                  key={index}
                  type="button"
                  className={`text-2xl ${
                    currentRating <= (hover || rating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                  onClick={() => setRating(currentRating)}
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                >
                  <FaStar />
                </button>
              );
            })}
          </div>
          <textarea
            className="w-full h-40 p-2 border border-gray-300 rounded"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter your feedback here..."
          ></textarea>
          <div className="flex justify-end mt-4">
            <button
              onClick={() => setModalIsOpen(false)}
              className="px-4 py-2 mr-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmitFeedback}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
