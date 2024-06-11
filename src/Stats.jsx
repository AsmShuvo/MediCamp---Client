import React, { useContext, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

import useAxiosPublic from "./hooks/useAxiosPublic";
import { AuthContext } from "./Providers/AuthProvider";

const Stats = () => {
  const axiosSecure = useAxiosPublic();
  const { user } = useContext(AuthContext);

  const {
    data: regCamps,
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["regCamps"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });
  console.log(regCamps);

  // const getPath = (x, y, width, height) => {
  //   return `M${x},${y + height}C${x + width / 3},${y + height} ${
  //     x + width / 2
  //   },${y + height / 3}
  //   ${x + width / 2}, ${y}
  //   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
  //     x + width
  //   }, ${y + height}
  //   Z`;
  // };

  // const TriangleBar = (props) => {
  //   const { fill, x, y, width, height } = props;

  //   return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  // };

  return (
    <>
      {/* <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="uv"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {regCamps?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart> */}
    </>
  );
};

export default Stats;
