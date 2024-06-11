import React, { useEffect } from "react";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Analytics = () => {
  useEffect(() => {
    document.title = "Medicamp | Analytics";
  }, []);
  const axiosSecure = useAxiosPublic();
  const {
    data: regCamps,
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["regCamps"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });
  console.log(regCamps);
  return <></>;
};

export default Analytics;
