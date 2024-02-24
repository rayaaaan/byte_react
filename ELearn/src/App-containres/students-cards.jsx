import Card from "./student-card";
import image from "../assets/std_icone/std_picture.svg";
import React, { useEffect, useState } from "react";

function Cards({ data, handlOverlay }) {
  const [cards, setCards] = useState([
    {
      name: "Aissaoui Rayan",
      group: "IELTS group 01",
      phone: "0557447485",
      img: image,
      class: "",
    },
    {
      name: "Aissaoui Rayan",
      group: "IELTS group 01",
      phone: "0557447485",
      img: image,
      class: "",
    },
    {
      name: "Aissaoui Rayan",
      group: "IELTS group 01",
      phone: "0557447485",
      img: image,
      class: "",
    },
    {
      name: "Aissaoui Rayan",
      group: "IELTS group 01",
      phone: "0557447485",
      img: image,
      class: "",
    },
  ]);

  useEffect(() => {
    if (data.submit === true) {
      handleFormSubmit();
    }
  }, [data.submit]);

  const handleFormSubmit = () => {
    const updatedCards = [
      {
        name: `${data.firstName} ${data.lastName}`,
        group: "IELTS group 01",
        phone: `${data.phone}`,
        img: image,
        class: "new_card",
      },
      ...cards.slice(0, -1),
    ];
    setCards(updatedCards);
  };

  return (
    <>
      <div className="std_cards_container">
        {cards.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            group={card.group}
            phone={card.phone}
            img={card.img}
            clas={card.class}
            handlOverlay={handlOverlay}
          />
        ))}
      </div>
    </>
  );
}

export default Cards;
