import { useState } from "react";

import iconArrowDown from "../assets/images/icon-arrow-down.svg";
import iconTodo from "../assets/images/icon-todo.svg";
import iconCalendar from "../assets/images/icon-calendar.svg";
import iconReminders from "../assets/images/icon-reminders.svg";
import iconPlanning from "../assets/images/icon-planning.svg";

const renderDropdownItem = (label, items = [], isOpen, onClick) => (
  <li key={label} className="relative">
    <a href="#" className="flex items-center gap-2" onClick={onClick}>
      {label}
      <img
        src={iconArrowDown}
        alt="Dropdown Arrow"
        className={`h-max ${isOpen ? "rotate-180" : "rotate-0"}`}
      />
    </a>

    <ul
      className={`menu-dropdown ${
        label === "Features" ? "right-0" : "left-0"
      } ${isOpen ? "menu-dropdown-open" : "menu-dropdown-close"}`}
    >
      {items.map((item) => (
        <li key={item.text}>
          <a href="#" className="flex items-center gap-4">
            {item.icon && (
              <img
                src={item.icon}
                alt={`${item.text} Icon`}
                className="h-max"
              />
            )}
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  </li>
);

const Menu = () => {
  const [featuresDropdown, setFeaturesDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);

  const toggleDropdown = (dropdown) => {
    if (dropdown === "features") {
      setFeaturesDropdown(!featuresDropdown);
      setCompanyDropdown(false);
    } else if (dropdown === "company") {
      setCompanyDropdown(!companyDropdown);
      setFeaturesDropdown(false);
    }
  };

  return (
    <ul className="menu">
      {renderDropdownItem(
        "Features",
        [
          { text: "Todo List", icon: iconTodo },
          { text: "Calendar", icon: iconCalendar },
          { text: "Reminders", icon: iconReminders },
          { text: "Planning", icon: iconPlanning },
        ],
        featuresDropdown,
        () => toggleDropdown("features")
      )}
      {renderDropdownItem(
        "Company",
        [{ text: "History" }, { text: "Our Team" }, { text: "Blog" }],
        companyDropdown,
        () => toggleDropdown("company")
      )}
      <li>
        <a href="#">Careers</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
    </ul>
  );
};

export default Menu;
