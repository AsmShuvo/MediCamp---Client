import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useCamps = () => {
  const axiosSecure = useAxiosSecure();
  const { data: camps, refetch } = useQuery({
    queryKey: ["camps"],
    queryFn: async () => {
      const res = await axiosSecure.get("/camps");
      return res.data;
    },
  });
  return [camps, refetch];
};

export default useCamps;
