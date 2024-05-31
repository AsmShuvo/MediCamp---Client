import { Link } from "react-router-dom";
import PrimaryButton from "../../../Components/PrimaryButton";
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-screen">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full"
          />
          <div className="absolute h-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  flex flex-col left-0 top-0 gap-4">
            <div className="space-y-7 pl-16 mt-16">
              <h1 className="text-6xl font-serif w-1/4 text-white font-bold animate__animated animate__backInDown ">
                <span className="text-secondary">HealthCamp</span> - Bringing
                Quality Healthcare to Your Community
              </h1>
              <p className="text-lg w-1/2 font-mono text-gray-200 animate__animated  animate__backInUp">
                <span className="text-secondary">HealthCamp</span> organizes
                essential medical camps to provide accessible healthcare
                services to underserved communities. Our expert team ensures
                comprehensive care with modern facilities at each event. Join us
                in promoting health and wellness through our impactful
                initiatives.
              </p>
              <div className="flex flex-col md:flex-row gap-2">
                <PrimaryButton route="register" text="register" />
                <PrimaryButton route="login" text="login" />
              </div>
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
          <div className="absolute h-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  flex flex-col left-0 top-0 gap-4">
            <div className="space-y-7 pl-16 mt-16">
              <h1 className="text-6xl font-serif w-1/4 text-white font-bold">
                <span className="text-secondary">HealthCamp</span> - Bringing
                Quality Healthcare to Your Community
              </h1>
              <p className="text-lg w-1/2 font-mono text-gray-200">
                <span className="text-secondary">HealthCamp</span> organizes
                essential medical camps to provide accessible healthcare
                services to underserved communities. Our expert team ensures
                comprehensive care with modern facilities at each event. Join us
                in promoting health and wellness through our impactful
                initiatives.
              </p>
              <div className="flex flex-col md:flex-row gap-2">
                <PrimaryButton route="register" text="register" />
                <PrimaryButton route="login" text="login" />
              </div>
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
          <div className="absolute h-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  flex flex-col left-0 top-0 gap-4">
            <div className="space-y-7 pl-16 mt-16">
              <h1 className="text-6xl font-serif w-1/4 text-white font-bold">
                <span className="text-secondary">HealthCamp</span> - Bringing
                Quality Healthcare to Your Community
              </h1>
              <p className="text-lg w-1/2 font-mono text-gray-200">
                <span className="text-secondary">HealthCamp</span> organizes
                essential medical camps to provide accessible healthcare
                services to underserved communities. Our expert team ensures
                comprehensive care with modern facilities at each event. Join us
                in promoting health and wellness through our impactful
                initiatives.
              </p>
              <div className="flex flex-col md:flex-row gap-2">
                <PrimaryButton route="register" text="register" />
                <PrimaryButton route="login" text="login" />
              </div>
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
          <div className="absolute h-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  flex flex-col left-0 top-0 gap-4">
            <div className="space-y-7 pl-16 mt-16">
              <h1 className="text-6xl font-serif w-1/4 text-white font-bold">
                <span className="text-secondary">HealthCamp</span> - Bringing
                Quality Healthcare to Your Community
              </h1>
              <p className="text-lg w-1/2 font-mono text-gray-200">
                <span className="text-secondary">HealthCamp</span> organizes
                essential medical camps to provide accessible healthcare
                services to underserved communities. Our expert team ensures
                comprehensive care with modern facilities at each event. Join us
                in promoting health and wellness through our impactful
                initiatives.
              </p>
              <div className="flex flex-col md:flex-row gap-2">
                <PrimaryButton route="register" text="register" />
                <PrimaryButton route="login" text="login" />
              </div>
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
