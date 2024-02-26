import Button from "./button";
import girlimage from "../assets/girl.png";
import arrow from "C:/Users/OMEN 16/Desktop/React/byte_react/ELearn/src/assets/arrow.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero_p">
        <p className="big_p p1">Elites School E-learning platform</p>
        <p className="big_p p2">
          “To have another <span className="hero_span">language</span> is to
          possess a <span className="hero_span">second soul</span> ”{" "}
          <span className="hero_span2">Charlemagne .</span>
        </p>
        <p className="small_p">
          Lorem ipsum dolor sit amet consectetur. In duis habitant ac nisi. Id
          odio nec vivamus id gravida. A nisl elit lorem posuere venenatis
          auctor(description 3la platform)
        </p>
        <a href="./login" className="text_deco-none">
          <Button text="Start Learning" icone={arrow} />
        </a>
      </div>
      <img src={girlimage} alt="girl" className="girl_image" />
    </div>
  );
}

export default Hero;
