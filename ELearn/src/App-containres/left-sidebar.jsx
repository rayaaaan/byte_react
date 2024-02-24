import logo from "../assets/logo.svg";
import React, { useState } from "react";
//import icons in order
import home from "../assets/Left-SideBar_icones/Home.svg";
import icone from "../assets/Left-SideBar_icones/icone.svg";
import book from "../assets/Left-SideBar_icones/book.svg";
import document from "../assets/Left-SideBar_icones/Document.svg";
import light from "../assets/Left-SideBar_icones/light.svg";
import graduate from "../assets/Left-SideBar_icones/graduate.svg";
import help_icone from "../assets/help/_.svg";

function LeftSide() {
  const [activeButton, setActiveButton] = useState("button6");
  const [IsHover, setIsHover] = useState(null);
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const handelMouseOver = (buttonName) => {
    setIsHover(buttonName);
  };
  const handelMouseOut = (buttonName) => {
    setIsHover(null);
  };
  return (
    <div className="center">
      <img className="left_sidebar_logo" src={logo} alt="" />
      <ul className="button_list">
        <li
          className="flex-start button_li"
          style={{
            backgroundColor:
              activeButton === "button1"
                ? "#5271FF"
                : IsHover === "button1"
                ? "rgb(245, 245, 245)"
                : "white",
          }}
          onClick={() => handleClick("button1")}
          onMouseOver={() => handelMouseOver("button1")}
          onMouseOut={() => handelMouseOut("button1")}
        >
          <img className="button_list_img" src={home} alt="" />
          <span>Home</span>
        </li>
        <li
          className="flex-start button_li"
          style={{
            backgroundColor:
              activeButton === "button2"
                ? "#5271FF"
                : IsHover === "button2"
                ? "rgb(245, 245, 245)"
                : "white",
          }}
          onClick={() => handleClick("button2")}
          onMouseOver={() => handelMouseOver("button2")}
          onMouseOut={() => handelMouseOut("button2")}
        >
          <img className="button_list_img" src={icone} alt="" />
          <span>Announcements</span>
        </li>
        <li
          className="flex-start button_li"
          style={{
            backgroundColor:
              activeButton === "button3"
                ? "#5271FF"
                : IsHover === "button3"
                ? "rgb(245, 245, 245)"
                : "white",
          }}
          onClick={() => handleClick("button3")}
          onMouseOver={() => handelMouseOver("button3")}
          onMouseOut={() => handelMouseOut("button3")}
        >
          <img className="button_list_img" src={book} alt="" />
          <span>Courses</span>
        </li>
        <li
          className="flex-start button_li"
          style={{
            backgroundColor:
              activeButton === "button4"
                ? "#5271FF"
                : IsHover === "button4"
                ? "rgb(245, 245, 245)"
                : "white",
          }}
          onClick={() => handleClick("button4")}
          onMouseOver={() => handelMouseOver("button4")}
          onMouseOut={() => handelMouseOut("button4")}
        >
          <img className="button_list_img" src={document} alt="" />
          <span>Assignments</span>
        </li>
        <li
          className="flex-start button_li"
          style={{
            backgroundColor:
              activeButton === "button5"
                ? "#5271FF"
                : IsHover === "button5"
                ? "rgb(245, 245, 245)"
                : "white",
          }}
          onClick={() => handleClick("button5")}
          onMouseOver={() => handelMouseOver("button5")}
          onMouseOut={() => handelMouseOut("button5")}
        >
          <img className="button_list_img" src={light} alt="" />
          <span>Quizzes</span>
        </li>
        <li
          className="flex-start button_li"
          style={{
            backgroundColor:
              activeButton === "button6"
                ? "#5271FF"
                : IsHover === "button6"
                ? "rgb(245, 245, 245)"
                : "white",
          }}
          onClick={() => handleClick("button6")}
          onMouseOver={() => handelMouseOver("button6")}
          onMouseOut={() => handelMouseOut("button6")}
        >
          <img className="button_list_img" src={graduate} alt="" />
          <span>Students</span>
        </li>
      </ul>
      <div className="help center">
        <img src={help_icone} alt="" className="help_img" />
        <p className="help_p">
          If you need any help do not hesitate to contact us
        </p>
        <ul>
          <li>+213 770 375 299</li>
          <li>+213 770 307 515</li>
          <li>elitesalgerie@gmail.com</li>
        </ul>
      </div>
    </div>
  );
}
export default LeftSide;
