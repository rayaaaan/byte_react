import Card from "./student-card";
import image from "../assets/std_icone/std_picture.svg";
import React, { useEffect } from "react";

function Cards() {
  return (
    <>
      <div className="std_cards_container">
        <Card
          name={"Aissaoui Rayan"}
          group={"IELTS group 01"}
          phone={"0557447485"}
          img={image}
        />
        <Card
          name={"Aissaoui Rayan"}
          group={"IELTS group 01"}
          phone={"0557447485"}
          img={image}
        />
        <Card
          name={"Aissaoui Rayan"}
          group={"IELTS group 01"}
          phone={"0557447485"}
          img={image}
        />
        <Card
          name={"Aissaoui Rayan"}
          group={"IELTS group 01"}
          phone={"0557447485"}
          img={image}
        />
        <Card
          name={"Aissaoui Rayan"}
          group={"IELTS group 01"}
          phone={"0557447485"}
          img={image}
        />
      </div>
    </>
  );
}
export default Cards;
