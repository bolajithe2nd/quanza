import Carousel from "./Carousel";

const Testimonials = () => {
  return (
    <section
      className="relative grid gap-y-8 container max-w-[1280px] mx-auto py-[6rem] px-6"
      id="testimonials"
    >
      {/* Top */}
      <div className="grid gap-y-2 place-items-center">
        <h2 className="text-4xl font-bold text-center">
          You are in good company.
        </h2>
        {/* Text */}
        <p className="text-textColor dark:text-[#a5a5ac] text-center">
          Read what clients are saying about us!
        </p>
      </div>

      {/* Carousel */}
      <Carousel />
    </section>
  );
};

export default Testimonials;
