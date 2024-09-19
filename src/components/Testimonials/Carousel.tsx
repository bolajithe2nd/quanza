import Marquee from "react-fast-marquee";

interface Testimonial {
  name: string;
  experience: string;
}

const MyCarousel = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Alex Johnson",
      experience:
        "Quanza made charging my EV so easy and fast. Highly recommend!",
    },
    {
      name: "Jamie Lee",
      experience:
        "Reliable and convenient. Quanza is my go-to for all my charging needs.",
    },
    {
      name: "Morgan Smith",
      experience:
        "Quanza's stations are always clean and well-maintained. Great service!",
    },
    {
      name: "Taylor Brown",
      experience:
        "Fast charging and excellent customer support. Quanza is top-notch!",
    },
    {
      name: "Jordan White",
      experience:
        "I love how simple and efficient Quanza makes charging my car. Fantastic experience!",
    },
  ];

  return (
    <Marquee>
      <div className="grid grid-flow-col items-stretch">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="grid gap-y-8 content-between bg-secondary rounded-xl p-8 ml-8 max-w-[18rem] lg:max-w-[25rem]"
          >
            <h3 className="text-xl font-medium text-primary-200">
              <q>{testimonial.experience}</q>
            </h3>
            <p className="text-base text-textColor dark:text-[#a5a5ac]">
              ~ {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default MyCarousel;
