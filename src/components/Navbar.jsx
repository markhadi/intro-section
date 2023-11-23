import logo from "../assets/images/logo.svg";
import iconMenu from "../assets/images/icon-menu.svg";
import iconArrowDown from "../assets/images/icon-arrow-down.svg";

const Navbar = () => {
  return (
    <nav>
      <section className="nav-mobile">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <img src={iconMenu} alt="Menu" />
      </section>

      <section className="nav-tablet">
        <div className="logo-and-menu">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
          <ul>
            <li>
              <a href="/">
                Features
                <img src={iconArrowDown} alt="Arrow Down" />
              </a>
            </li>
            <li>
              <a href="/">
                Company
                <img src={iconArrowDown} alt="Arrow Down" />
              </a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </div>

        <div className="auth">
          <a href="/login" className="login">
            Login
          </a>
          <a href="/register" className="register">
            Register
          </a>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
