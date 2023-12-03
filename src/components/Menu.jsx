import iconArrowDown from "../assets/images/icon-arrow-down.svg";

const Menu = () => {
  return (
    <ul className="menu">
      <li>
        <a href="#">
          Features
          <img src={iconArrowDown} alt="Arrow Down" />
        </a>
      </li>
      <li>
        <a href="#">
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
  );
};

export default Menu;
