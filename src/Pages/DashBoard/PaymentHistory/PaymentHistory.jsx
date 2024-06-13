import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import { GoDotFill } from "react-icons/go";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      console.log("Payment history", res.data);
      return res.data;
    },
  });
  console.log(payments);

  // Pagination states and functions
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalItems = payments.length;
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

  return (
    <div className="p-4 mx-10">
      <h2 className="text-3xl text-center">
        Total Payments: {payments?.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th>#</th>
              <th>TRX ID</th>
              <th>Camps</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paginate(payments).map((payment, idx) => (
              <tr key={payment._id}>
                <th>{(currentPage - 1) * itemsPerPage + idx + 1}</th>
                <td>{payment.transactionId}</td>
                <td>
                  {payment.cartNames?.map((it, idx) => (
                    <div className="w-full" key={idx}>
                      <p className="mr-2 flex items-center gap-1">
                        <GoDotFill />
                        {it}
                      </p>
                    </div>
                  ))}
                </td>
                <td className="font-bold">${payment.price}</td>
                <td
                  className={`${
                    payment.status == "Approved"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {" "}
                  {payment.status}
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
  );
};

export default PaymentHistory;
