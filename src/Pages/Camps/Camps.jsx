import React, { useEffect } from "react";
import useCamps from "../../hooks/useCamps";
import Camp from "../Camp/Camp";
import Paralux from "../../Components/Paralux";

import campsCover from "../../../public/images/camps.png";
import MenuCover from "../../Components/Covers/MenuCover";
const Camps = () => {
  useEffect(() => {
    document.title = "Medicamp | Available Camps";
  }, []);

  const [camps] = useCamps();
  console.log(camps);

  return (
    <div className="mx-10">
      <MenuCover
        image={campsCover}
        title="Explore Our Exciting Health Camps"
        desc="Discover a variety of health camps tailored to your needs. Join us to improve your well-being with expert guidance and support."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {camps?.map((camp) => (
          <Camp key={camp._id} camp={camp} />
        ))}
      </div>
    </div>
  );
};

export default Camps;
