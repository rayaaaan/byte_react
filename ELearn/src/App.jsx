import React, { useState } from "react";
import LeftSide from "./App-containres/left-sidebar";
import Main from "./App-containres/main";
import Profil from "./App-containres/profil";
import image from "./assets/std_icone/std_picture.svg";

function App() {
  const [showContainer, setShowContainer] = useState(false);

  const toggleContainer = () => {
    setShowContainer(!showContainer);
  };

  return (
    <div className="app">
      <div className="left_sidebar">
        <LeftSide />
      </div>
      <div className="main">
        <Main toggleContainer={toggleContainer} />
      </div>
        <div className={showContainer ? "right_sidebar" : "display_none"}>
          <Profil
            name="Aissaoui Rayan"
            email="mohemedryn@gmail.com"
            number="0557447485"
            profile_picture={image}
          />
        </div>
    </div>
  );
}

export default App;
