import { Link } from "react-router-dom";
import PrimaryButton from "../../../Components/PrimaryButton";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="carousel w-full h-screen">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full"
          />
          <div className="absolute h-full bg-gradient-to-r from-[#151515b9] to-[rgba(21,21,21,0)] flex items-center left-0 top-0  gap-4">
            <div className="space-y-7 pl-16 mt-16">
              <h1 className="text-4xl font-serif w-1/3 text-white font-bold animate__animated animate__backInDown ">
                <span className="text-secondary ">Succes Story</span> -
                Empowering Women with Health Education
              </h1>
              <p className="text-lg w-1/2 font-mono text-gray-200 animate__animated  animate__backInUp">
                Our team conducted a series of health education sessions focused
                on women's health and wellness. Mrs. Jane Smith, a mother of
                three, attended these sessions and gained valuable knowledge
                about nutrition, family planning, and prenatal care. This
                initiative has empowered her to make informed health decisions
                for herself and her family.
              </p>
              {!user && (
                <div className="flex flex-col md:flex-row gap-2">
                  <PrimaryButton route="register" text="register" />
                  <PrimaryButton route="login" text="login" />
                </div>
              )}
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1681995291320-d0e369cc373d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full"
          />
          <div className="absolute h-full bg-gradient-to-r from-[#151515b9] to-[rgba(21,21,21,0)] flex items-center left-0 top-0  gap-4">
            <div className="space-y-7 pl-16 mt-16">
              <h1 className="text-4xl font-serif w-1/3 text-white font-bold">
                <span className="text-secondary">Succes Story</span> - Healing
                Smiles with Dental Care
              </h1>
              <p className="text-lg w-1/2 font-mono text-gray-200">
                During the camp, we offered free dental check-ups and treatments
                to children from underserved communities. Little Emily, a
                7-year-old girl, received treatment for severe dental cavities.
                Her beaming smile after the procedure was a testament to the
                positive impact of our services.
              </p>
              {!user && (
                <div className="flex flex-col md:flex-row gap-2">
                  <PrimaryButton route="register" text="register" />
                  <PrimaryButton route="login" text="login" />
                </div>
              )}
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1605684954998-685c79d6a018?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full"
          />
          <div className="absolute h-full bg-gradient-to-r from-[#151515b9] to-[rgba(21,21,21,0)] flex items-center left-0 top-0  gap-4">
            <div className="space-y-7 pl-16 mt-16">
              <h1 className="text-4xl font-serif w-1/3 text-white font-bold">
                <span className="text-secondary">Succes Story</span> - Saving
                Lives with Timely Diagnosis
              </h1>
              <p className="text-lg w-1/2 font-mono text-gray-200">
                One of the highlights of our camp was the early diagnosis of
                chronic illnesses. Mr. Robert Brown, a 50-year-old resident, was
                diagnosed with hypertension and diabetes during a routine
                check-up. Early detection allowed him to start treatment
                immediately, significantly improving his quality of life.
              </p>
              {!user && (
                <div className="flex flex-col md:flex-row gap-2">
                  <PrimaryButton route="register" text="register" />
                  <PrimaryButton route="login" text="login" />
                </div>
              )}
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full"
          />
          <div className="absolute h-full bg-gradient-to-r from-[#151515b9] to-[rgba(21,21,21,0)] flex items-center left-0 top-0  gap-4">
            <div className="space-y-7 pl-16 mt-16">
              <h1 className="text-4xl font-serif w-1/3 text-white font-bold">
                <span className="text-secondary">Succes Story</span> -
                Transforming Lives Through Free Eye Surgeries
              </h1>
              <p className="text-lg w-1/2 font-mono text-gray-200">
                In our recent medical camp, we provided free eye surgeries to
                over 100 patients suffering from cataracts. Among them was Mr.
                John Doe, a 65-year-old farmer who had been struggling with
                vision impairment for years. Thanks to the timely intervention,
                Mr. Doe can now see clearly and has resumed his daily activities
                with newfound independence.
              </p>
              {!user && (
                <div className="flex flex-col md:flex-row gap-2">
                  <PrimaryButton route="register" text="register" />
                  <PrimaryButton route="login" text="login" />
                </div>
              )}
            </div>
          </div>
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
