import delet from "../assets/std_icone/delete.svg";
import { useState } from "react";
import pen from "../assets/std_icone/pen.svg";
import SmallButton from "./small_button";
function Card({
  name,
  img,
  group,
  phone,
  clas,
  handlOverlayEdit,
  handlOberlayDeete,
  onClick,
  background,
  number,
}) {
  return (
    <div
      className={`std_card flex-center no_select ${clas}`}
      onClick={onClick}
      style={{
        backgroundColor:
          number === background ? "rgb(230, 230, 230)" : "#E8EFF6",
      }}
    >
      <span className={`flex-center std_name_container ${clas}`}>
        <img src={img} className="std_image" />
        <h4 className="std_name">{name}</h4>
      </span>
      <span className="flex-center std_span">
        <span className="hr_span flex-center">
          <hr className="std_hr" />
          <p className="std_p">{group}</p>
        </span>
        <span className="hr_span flex-center">
          <hr className="std_hr" />
          <p className="std_p">{phone}</p>
        </span>
      </span>
      <span className="std_icones flex-center">
        <SmallButton
          border={"red-border"}
          icone={delet}
          functione={handlOberlayDeete}
        />
        <SmallButton
          border={"blue-border"}
          icone={pen}
          functione={handlOverlayEdit}
        />
      </span>
    </div>
  );
}
export default Card;
