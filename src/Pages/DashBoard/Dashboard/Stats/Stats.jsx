import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../../Providers/AuthProvider";

const Stats = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const {
    data: regedCamps,
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["regCamps"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments`);
      return res.data;
    },
  });
  console.log("Regecamps", regedCamps);
  const approvedCamps = regedCamps?.filter((camp) => {
    return camp.status == "Approved" && camp.email == user?.email;
  });
  console.log("app", approvedCamps?.length);

  const campFees = approvedCamps?.flatMap((it) => {
    return it.cartFees || [];
  });

  const campNames = approvedCamps?.flatMap((it) => {
    return it.cartNames || [];
  });
  console.log(campNames);

  const chartData = campNames?.map((name, index) => ({
    name: name,
    fee: campFees[index] || 0,
  }));

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="fee" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stats;
