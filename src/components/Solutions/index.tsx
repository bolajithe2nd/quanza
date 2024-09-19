import Lottie from "lottie-react";
import PublicCharging from "@/assets/animations/public-charging.json";
import PrivateCharging from "@/assets/animations/private-charging.json";
import BusinessCharging from "@/assets/animations/business-charging.json";
// import "./animations.css";

const Solutions = () => {
  return (
    <section className="relative grid gap-y-12 container max-w-[1048px] mx-auto py-[3rem] px-6">
      {/* Top */}
      <div className="grid gap-y-2 place-items-center">
        <p className="text-sm text-primary">Wonder what we do?</p>
        <h2 className="text-4xl font-bold text-center">Our Solutions</h2>
        {/* Text */}
        <p className="text-textColor dark:text-[#a5a5ac] text-center lg:max-w-[50%]">
          We deliver innovative solutions for a more convenient and sustainable
          charging experience.
        </p>
      </div>

      {/*====== Cards ======*/}

      {/* Public charging */}
      <div className="bg-secondary p-8 lg:p-12 rounded-[2rem] grid gap-6 grid-col-1 place-items-center content-between lg:grid-cols-2 ">
        {/* Text */}
        <div className="grid gap-y-4 order-last lg:order-none">
          <h2 className="text-3xl lg:text-4xl font-bold">Public Charging</h2>
          <p className="text-sm lg:text-base text-textColor dark:text-[#a5a5ac]">
            Rapid, efficient charging for all electric vehicles. Quick and
            convenient battery swaps for two and three-wheelers.
          </p>
        </div>

        <div className="relative w-full h-[180px] lg:h-[260px] overflow-hidden">
          <Lottie
            animationData={PublicCharging}
            className="absolute top-[-100px] lg:top-[-150px]"
          />
        </div>
      </div>

      {/* Private charging */}
      <div className="bg-secondary p-8 lg:p-12 rounded-[2rem] grid gap-6 grid-col-1 place-items-center content-between lg:grid-cols-2 ">
        {/* Animation */}
        <div className="relative w-full h-[150px] lg:h-[260px] overflow-hidden">
          <Lottie
            animationData={PrivateCharging}
            className="absolute top-[-80px] lg:top-[-100px]"
          />
        </div>

        {/* Text */}
        <div className="grid gap-y-2">
          <h2 className="text-3xl lg:text-4xl font-bold">Private Charging</h2>
          <p className="text-sm lg:text-base text-textColor dark:text-[#a5a5ac]">
            Convenient AC charging solutions for home use, keeping you ready for
            every journey.
          </p>
        </div>
      </div>

      {/* Business charging */}
      <div className="bg-secondary p-8 lg:p-12 rounded-[2rem] grid gap-6 grid-col-1 place-items-center content-between lg:grid-cols-2 ">
        {/* Text */}
        <div className="grid gap-y-2 order-last lg:order-none">
          <h2 className="text-3xl lg:text-4xl font-bold">Business Charging</h2>
          <p className="text-sm lg:text-base text-textColor dark:text-[#a5a5ac]">
            Tailored solutions for businesses to support your fleet, employees
            and guests with efficient charging options.
          </p>
        </div>

        {/* Animation */}
        <div className="relative w-full h-[220px] lg:h-[260px] overflow-hidden">
          <Lottie
            animationData={BusinessCharging}
            className="absolute top-[-20px] lg:top-[-30px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
