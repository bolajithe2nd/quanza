import React from "react";
import { Button } from "../ui/button";
import {
  CloudLightning,
  BatteryCharging,
  Server,
  PlugZap,
  LucideProps,
} from "lucide-react";

interface Item {
  icon: React.ComponentType<LucideProps>;
  title: string;
}

const About = () => {
  const items: Item[] = [
    {
      icon: CloudLightning,
      title: "Sustainable Solutions",
    },
    {
      icon: BatteryCharging,
      title: "Fast & Reliable Charging",
    },
    {
      icon: Server,
      title: "EV Fleet Management",
    },
    {
      icon: PlugZap,
      title: "Smart Charging Network",
    },
  ];
  return (
    <section className="container max-w-[1280px] mx-auto grid grid-cols-1 gap-y-12 lg:grid-cols-2 place-items-center py-[3rem] lg:h-[80vh]">
      {/* Cards */}
      <div
        className="grid gap-8 p-6 justify-center order-last lg:order-none"
        style={{ gridTemplateColumns: "repeat(2, minmax(100px, 170px))" }}
      >
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              className="bg-background dark:bg-secondary grid gap-y-6 place-items-center p-6 rounded-2xl border-[1.7px] border-secondary shadow-xl transition ease-in-out duration-300 hover:border-primary hover:transform hover:scale-110"
              key={index}
            >
              <Icon className="h-8 w-8 fill-primary-300" />
              <h3 className="text-base text-center">{item.title}</h3>
            </div>
          );
        })}
      </div>

      {/* Text */}
      <div className="grid gap-y-6 pt-0 p-6">
        <p className="text-sm text-primary">Who we are?</p>

        <div className="grid gap-y-4">
          <h2 className="text-4xl font-bold">
            Let's tell you a little about us
          </h2>
          <p className="text-textColor dark:text-[#a5a5ac]">
            We provide accessible and reliable EV charging solutions, making
            electric vehicle charging easy and convenient for all. Our mission
            is to support the transition to sustainable transportation with
            innovative, user-friendly infrastructure.
          </p>
        </div>

        <Button className="w-fit py-6 px-8 font-medium text-white" asChild>
          <a href="#">Learn More</a>
        </Button>
      </div>
    </section>
  );
};

export default About;
