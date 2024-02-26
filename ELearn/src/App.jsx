import React, { useState } from "react";
import LeftSide from "./App-containres/left-sidebar";
import Main from "./App-containres/main";
import Profil from "./App-containres/profil";
import image from "./assets/std_icone/std_picture.svg";

function App() {
  const [showContainer, setShowContainer] = useState(false);

  const [Std, setStd] = useState({
    number: null,
    name: "",
    email: "",
    phone: "",
    image: null,
  });

  const toggleContainer = () => {
    setShowContainer(!showContainer);
  };
  function collectStd(card) {
      if (Std.number === card.number) {
        toggleContainer();
      } else if (showContainer === false) {
        toggleContainer();
      }
      setStd({
        name: card.name,
        email: card.email,
        phone: card.phone,
        image: card.img,
        number: card.number,
      });
    }
  
  return (
    <div className="app">
      <div className="left_sidebar">
        <LeftSide />
      </div>
      <div className="main">
        <Main collectStd={collectStd} />
      </div>
      <div className={showContainer ? "right_sidebar" : "display_none"}>
        <Profil
          user={"Aissaoui Rayan"}
          name={Std.name}
          email={Std.email}
          number={Std.phone}
          profile_picture={Std.image}
        />
      </div>
    </div>
  );
}

export default App;
