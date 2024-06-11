import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageRegisteredCamps = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allCamps, refetch } = useQuery({
    queryKey: ["allcamps"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });
  console.log(allCamps);
  const handleCancel = (camp) => {
    console.log(camp);
    camp.status = "Rejected";
    console.log("reject", camp);
    axiosSecure
      .patch(`/payments/${camp._id}/${camp.email}/Cancelled`, camp)
      .then((data) => {
        console.log(data.data);
        if (data.data.modifiedCount) {
          Swal.fire({
            title: "Cancelled",
            time: 1000,
          });
          refetch();
        }
      });
  };
  const handleApprove = (camp) => {
    console.log(camp);
    camp.status = "Confirmed";
    console.log("reject", camp);
    axiosSecure
      .patch(`/payments/${camp._id}/${camp.email}/Approved`, camp)
      .then((data) => {
        console.log(data.data);
        if (data.data.modifiedCount) {
          Swal.fire({
            title: "Approved",
            time: 1000,
          });
          refetch();
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-mono text-center ">
        All camps requests here
      </h2>
      <div className="overflow-x-auto my-10">
        <table className="table">
          {/* head */}
          <thead className="text-gray-400 bg-gray-700 ">
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Camps</th>
              <th>Total Fee</th>
              <th>Payment Status</th>
              <th>Confirmation Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allCamps?.map(
              (camp, idx) =>
                camp.status != "Cancelled" && (
                  <tr>
                    <th>{idx + 1}</th>
                    <th>{camp?.email}</th>
                    <td>
                      {camp?.cartNames?.map((it) => (
                        <p>{it}</p>
                      ))}
                    </td>
                    <td>{camp?.price}</td>
                    <td>Paid</td>
                    <td>{camp.status}</td>
                    {camp.status == "pending" && (
                      <td>
                        <div>
                          <button
                            onClick={() => handleCancel(camp)}
                            className="btn btn-link"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleApprove(camp)}
                            className="btn btn-link"
                          >
                            Approve
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageRegisteredCamps;
