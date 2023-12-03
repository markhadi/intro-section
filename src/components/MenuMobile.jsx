import iconClose from "../assets/images/icon-close-menu.svg";

import Menu from "./Menu";
import Auth from "./Auth";

const MenuMobile = ({ mobileMenuVisible, toggleMobileMenu }) => {
  return (
    <section
      className={`md:hidden ${
        mobileMenuVisible ? "w-screen" : "w-0"
      } fixed h-screen top-0 right-0 bg-AlmostBlack/50 overflow-hidden`}
    >
      <div className={`absolute right-0 h-full w-max px-6 bg-AlmostWhite`}>
        <div className="py-5 flex justify-end">
          <img
            src={iconClose}
            alt="Close Icon"
            className="cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>

        <Menu />
        <Auth />
      </div>
    </section>
  );
};

export default MenuMobile;
