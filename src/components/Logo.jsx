import logo from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <a href="/">
      <img src={logo} alt="Logo" className="h-max" />
    </a>
  );
};

export default Logo;
