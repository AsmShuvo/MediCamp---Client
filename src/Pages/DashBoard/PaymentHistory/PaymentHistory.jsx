import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  console.log(payments);
  {
    payments?.map((payment, idx) => console.log(payment.price));
  }
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
              <th>Price</th>
              <th>TRX ID</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((payment, idx) => (
              <tr key={payment._id}>
                <th>{idx + 1}</th>
                <td>${payment.price}</td>
                <td>{payment.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
