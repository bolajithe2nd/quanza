import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section
      className="p-6 container max-w-[1280px] mx-auto grid grid-cols-1 gap-6 lg:grid-cols-[30rem_30rem] items-center place-content-center py-[3rem] lg:h-[60vh]"
      id="contact"
    >
      {/* Text */}
      <div className="grid gap-y-6">
        <p className="text-sm text-primary">Feel like reaching us?</p>

        <div className="grid gap-y-4">
          <h2 className="text-4xl font-bold">
            Contact us.
            <br />
            We'll respond ASAP.
          </h2>
          <p className="text-textColor dark:text-[#a5a5ac]">
            We're here to help you find the perfect solution for your charging
            needs. Please feel free to reach out using the contact form below.
          </p>
        </div>
      </div>

      {/* Form */}
      <form
        action="#"
        className="w-full h-fit bg-background grid gap-y-6 place-items-center p-6 lg:p-8 rounded-2xl border-[1.7px] border-secondary shadow-xl"
      >
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="name">Full Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="Type your fullname"
            className="bg-secondary"
            required
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Type your email"
            className="bg-secondary"
            required
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="message">Your message</Label>
          <Textarea
            placeholder="Type your message here."
            rows={4}
            id="message"
            className="bg-secondary"
          />
        </div>

        <Button className="w-full font-medium text-white">Send Message</Button>
      </form>
    </section>
  );
};

export default Contact;
