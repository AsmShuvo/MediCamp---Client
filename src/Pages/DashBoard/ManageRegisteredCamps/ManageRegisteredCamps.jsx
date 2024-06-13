import React, { useState } from "react";
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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleCancel = (camp) => {
    camp.status = "Rejected";
    axiosSecure
      .patch(`/payments/${camp._id}/${camp.email}/Cancelled`, camp)
      .then((data) => {
        if (data.data.modifiedCount) {
          Swal.fire({
            title: "Cancelled",
            timer: 1000,
          });
          refetch();
        }
      });
  };

  const handleApprove = (camp) => {
    camp.status = "Confirmed";
    axiosSecure
      .patch(`/payments/${camp._id}/${camp.email}/Approved`, camp)
      .then((data) => {
        if (data.data.modifiedCount) {
          Swal.fire({
            title: "Approved",
            timer: 1000,
          });
          refetch();
        }
      });
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allCamps?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil((allCamps?.length || 0) / itemsPerPage);

  return (
    <div>
      <h2 className="text-3xl font-mono text-center">
        All camps requests here
      </h2>
      <div className="overflow-x-auto my-10 mx-4">
        <table className="table">
          {/* head */}
          <thead className="text-gray-400 bg-gray-700">
            <tr>
              <th>User</th>
              <th>Camps</th>
              <th>Total Fee</th>
              <th>Payment Status</th>
              <th>Confirmation Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems?.map(
              (camp) =>
                camp.status !== "Cancelled" && (
                  <tr key={camp._id}>
                    <th>{camp?.email}</th>
                    <td>
                      {camp?.cartNames?.map((it, idx) => (
                        <p key={idx}>{it}</p>
                      ))}
                    </td>
                    <td>{camp?.price}</td>
                    <td>Paid</td>
                    <td>{camp.status}</td>
                    {camp.status === "pending" && (
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
        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          <button
            className="btn"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-4">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="btn"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageRegisteredCamps;
