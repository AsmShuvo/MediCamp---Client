import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Review from "./Review";
import SecTitle from "./../../Components/SecTitle";

const Reviews = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: reviews,
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
      return res.data;
    },
  });
  console.log(reviews);
  return (
    <div className="my-20">
      <SecTitle heading={"What out clients say"} subHeading={"Reviews"} />
      <div className="grid mx-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews?.map((review) => (
          <Review
            email={review.email}
            name={review.name}
            text={review.feedback}
            rating={review.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
