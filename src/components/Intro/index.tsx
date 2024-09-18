import Lottie from "lottie-react";
import { Button } from "../ui/button";
import IntroAnimation from "@/assets/animations/intro-animation.json";
import Tesla from "./Logos/Tesla";
import Nissan from "./Logos/Nissan";
import Hyundai from "./Logos/Hyundai";
import Suzuki from "./Logos/Suzuki";

const Intro = () => {
  return (
    <section className="relative container max-w-[1280px] mx-auto">
      <div className="grid items-center place-items-center py-[3rem] pt-[5rem] lg:h-[100vh] grid-cols-1 lg:grid-cols-2">
        <div className="grid gap-y-6 p-6">
          {/* Text */}
          <div className="grid gap-y-3">
            <p className="text-sm text-primary">
              Charging Sustainable Mobility
            </p>
            <h1 className="text-6xl font-bold">
              Today's Technology, <br /> Tomorrow's Future.
            </h1>
            <p className="text-textColor dark:text-[#a5a5ac]">
              Enjoy fast, reliable EV charging for a cleaner, greener future.
              Our advanced charging stations are efficient, accessible, and
              ready to power your journey toward sustainable transportation.
            </p>
          </div>

          {/* Button */}
          <Button className="w-fit py-6 px-8 font-medium text-white" asChild>
            <a href="#">Discover More</a>
          </Button>

          <div className="mt-4">
            <h3 className="text-textColor dark:text-[#a5a5ac]">We support</h3>
            <div className="relative flex items-center gap-x-4 mt-[-23px]">
              <Tesla />
              <Suzuki />
              <Hyundai />
              <Nissan />
            </div>
          </div>
        </div>

        {/* Animation */}
        <div>
          <Lottie
            animationData={IntroAnimation}
            className="w-full lg:w-[45rem] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
