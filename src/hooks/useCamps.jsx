import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useCamps = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: camps,
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["camps"],
    queryFn: async () => {
      const res = await axiosSecure.get("/camps");
      return res.data;
    },
  });
  //console.log("fetched camps:", camps);
  return [camps, refetch, isLoading, error];
};

export default useCamps;
