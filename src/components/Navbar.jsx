import iconMenu from "../assets/images/icon-menu.svg";

import Menu from "./Menu";
import Logo from "./Logo";
import Auth from "./Auth";

import { useState } from "react";
import MenuMobile from "./MenuMobile";

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <nav className="flex justify-between text-MediumGray">
      <section className="nav-mobile">
        <Logo />
        <img
          src={iconMenu}
          alt="Menu"
          className="cursor-pointer h-max"
          onClick={toggleMobileMenu}
        />
      </section>

      <section className="nav-desktop">
        <div
          className="flex gap-6 items-center 
                      lg:gap-16"
        >
          <Logo />
          <Menu />
        </div>

        <Auth />
      </section>

      <MenuMobile
        mobileMenuVisible={mobileMenuVisible}
        toggleMobileMenu={toggleMobileMenu}
      />
    </nav>
  );
};

export default Navbar;
