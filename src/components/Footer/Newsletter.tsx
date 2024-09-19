import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Newsletter = () => {
  return (
    <div className="grid gap-y-6">
      <div className="grid gap-y-2">
        <h2 className="text-2xl font-semibold">Stay informed</h2>
        <p className="text-base text-textColor dark:text-[#a5a5ac]">
          Sign up for our newsletter to receive updates and promotions.
        </p>
      </div>

      <form className="grid gap-2 lg:grid-cols-[1fr_auto]">
        <Input
          type="email"
          placeholder="Your email address"
          className="bg-background dark:bg-secondary w-full py-4 px-6 h-[50px]"
        />
        <Button className="lg:w-fit py-4 px-6 h-[45px] text-white bg-primary">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;
