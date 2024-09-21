import IMAGES from "@/assets/images";
import { Menu } from "lucide-react";
import { useState } from "react";
import NavLink from "./NavLink";
import { ModeToggle } from "../mode-toggle";

const Header = () => {
  const [showMenu, SetShowMenu] = useState<boolean>(false);
  const toggleMenu = () => SetShowMenu((prev) => !prev);

  return (
    <>
      <header className="bg-background/30 bg-opacity-50 backdrop-blur-md fixed top-0 left-0 right-0 z-10">
        <div className="container max-w-[1280px] mx-auto grid md:flex md:items-center md:justify-between py-4 px-5 md:py-2 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <img
              className="max-w-28 md:max-w-32"
              src={IMAGES.LOGO}
              alt="Logo"
            />

            <div className="flex items-center gap-x-4 md:hidden">
              <ModeToggle />
              {/* Navigation toggle */}
              <button
                onClick={toggleMenu}
                aria-expanded={showMenu}
                aria-controls="mobile-nav"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav
            id="mobile-nav"
            className={`${
              showMenu ? `mt-4 py-4 md:p-0 max-h-full` : `max-h-0`
            } overflow-hidden transition-max-height duration-300 ease-linear md:max-h-none md:mt-0`}
          >
            {/* Menu List */}
            <ul className="grid md:flex md:items-center md:gap-x-8 px-1">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#solutions">Solutions</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <div className="hidden md:block">
                <ModeToggle />
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
