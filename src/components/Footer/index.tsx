import { Instagram, Linkedin, X } from "lucide-react";
import Sections from "./Sections";
import Newsletter from "./Newsletter";

const SocialLink = ({
  children,
  href,
}: {
  children: JSX.Element;
  href: string;
}) => {
  return (
    <a
      href={href}
      className="grid place-items-center bg-background dark:bg-secondary h-[50px] aspect-square rounded-full"
      target="_blank"
    >
      {children}
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="py-[12] bg-secondary dark:bg-background lg:mt-40 lg:py-14">
      <div className="container max-w-[1280px] mx-auto grid gap-y-8">
        {/*====== Item 1 ======*/}
        <div className="container rounded-[3.5rem] grid gap-y-8 grid-cols-1 lg:grid-cols-2 p-6">
          {/*=== Sections ====*/}
          <Sections />

          {/* Newsletter */}
          <Newsletter />
        </div>

        {/*====== Item 2 ======*/}
        <div className="grid gap-y-3 place-items-center p-6">
          {/* Socials */}
          <div className="flex items-center gap-x-6">
            <SocialLink href="https://instagram.com">
              <Instagram />
            </SocialLink>
            <SocialLink href="https://x.com">
              <X />
            </SocialLink>
            <SocialLink href="https://linkedin.com">
              <Linkedin />
            </SocialLink>
          </div>
          {/* Me */}
          <p className="text-base text-center">
            Built with ❤️ by{" "}
            <a
              href="https://www.instagram.com/life.of.lanre/"
              target="_blank"
              className="text-primary"
            >
              Lanre Bello
            </a>
          </p>
          {/* Copyright */}
          <p className="text-base text-center">
            © 2023 Quanza Energy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
