import icon_1 from "../assets/card_1/Icon.png";
import icon_2 from "../assets/card_2/Icon.png";
import icon_3 from "../assets/card_3/Icon.png";
import icon_4 from "../assets/card_4/Icon.png";
import hover_1 from "../assets/card_1/Hover.png";
import hover_2 from "../assets/card_2/Hover.png";
import hover_3 from "../assets/card_3/Hover.png";
import hover_4 from "../assets/card_4/Hover.png";
import Card from "./card";
import SmallButton from "./small_button";
import left from "../assets/left_blue_arrow.png";
import right from "../assets/right_blue_arrow.png";
import icon from "../assets/left_arrow.png";

function Cards() {
  return (
    <>
      <div className="cards_header">
        <h1 className="h1_cards">Our programs</h1>
        <button className="see_all">
          See All
          <img src={icon} alt="" className="left_arrow" />
        </button>
      </div>
      <div className="cards">
        <SmallButton icone={left} />
        <Card image={hover_1} image2={icon_1} text="GENERAL PROGRAM" />
        <Card image={hover_2} image2={icon_2} text="INTENSIVE PROGRAM" />
        <Card image={hover_3} image2={icon_3} text="KIDS PROGRAM" />
        <Card image={hover_4} image2={icon_4} text="IELTS PROGRAM" />
        <SmallButton icone={right} />
      </div>
    </>
  );
}

export default Cards;
