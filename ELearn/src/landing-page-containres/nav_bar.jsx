import Button from "./button";
import arrow from "C:/Users/OMEN 16/Desktop/React/byte_react/ELearn/src/assets/arrow.png";
import logo from "../assets/logo.svg";
function Nav({ button_class }) {
  return (
    <nav className="nav">
      <div className="nav_div">
        <img src={logo} alt="logo" />
        <ul className="nav_list">
          <li className="nav_li">Home</li>
          <li className="nav_li">Programs</li>
          <li className="nav_li">Contact</li>
        </ul>
      </div>
      <a href="./login" className="text_deco-none">
        <Button text="Get started" clas={button_class} icone={arrow} />
      </a>
    </nav>
  );
}
export default Nav;
