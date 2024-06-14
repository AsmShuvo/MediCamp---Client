import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Review from "./Review";
import SecTitle from "./../../Components/SecTitle";
import { Link } from "react-router-dom";

const HomeReviews = () => {
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

  // Slice the first 3 reviews
  const firstThreeReviews = reviews ? reviews.slice(1, 4).reverse() : [];

  return (
    <div className="my-20">
      <SecTitle heading={"What out clients say"} subHeading={"Reviews"} />
      <div className="grid md:mx-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {firstThreeReviews.map((review) => (
          <Review
            key={review.id} // Ensure each review has a unique key
            email={review.email}
            name={review.name}
            text={review.feedback}
            rating={review.rating}
          />
        ))}
      </div>
      <div className="text-center mt-5">
        <Link to="/reviews">
          <button className="btn mx-auto btn-primary hover:btn-secondary text-white font-semibold">
            See More{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeReviews;
