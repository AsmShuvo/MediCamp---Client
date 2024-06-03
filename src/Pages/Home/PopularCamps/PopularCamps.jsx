import React from "react";
import useCamps from "../../../hooks/useCamps";
import popularSide from "../../../../public/images/pallu.png";
import popularSide2 from "../../../../public/images/doctor2.png";
import popularHeader from "../../../../public/images/popularParalux.png";
import Paralux from "../../../Components/Paralux";
import PopularCards from "./PopularCards";
import PrimaryButton from "../../../Components/PrimaryButton";
const PopularCamps = () => {
  const [camps, refetch] = useCamps();
  // console.log(camps);
  const sortedArray = camps?.sort(
    (a, b) => b.participant_count - a.participant_count
  );
  const popularSixCamps = sortedArray?.slice(0, 6);
  // console.log(popularSixCamps);
  return (
    <div className="mx-10 my-20">
      <Paralux
        image={popularHeader}
        title="Discover Popular Health Camps Near You"
        desc="Explore a curated selection of health camps offering diverse programs and expert guidance.
            From fitness retreats to wellness workshops, find the perfect event to boost your well-being.
            Join our community and embark on a journey to a healthier lifestyle today!"
      />

      <div className="mt-10">
        <div className="flex gap-8">
          <div className="flex flex-col gap-12 ">
            {popularSixCamps?.map((camp) => (
              <PopularCards camp={camp} />
            ))}
          </div>
          <div className=" flex flex-col  justify-evenly items-center">
            <img className="h-screen" src={popularSide} />
            <img className="h-screen rounded-xl my-4" src={popularSide2} />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <PrimaryButton text="See More" route="availableCamps" />
      </div>
    </div>
  );
};

export default PopularCamps;
