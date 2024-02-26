import Card from "./student-card";
import image from "../assets/std_icone/std_picture.svg";
import React, { useEffect, useState } from "react";

function Cards({ data, handlOverlayEdit, handlOberlayDeete, collectStd }) {
  const [CardNum, setCardNum] = useState(null);
  const [cards, setCards] = useState([
    {
      name: "Aissaoui Rayan",
      group: "IELTS group 01",
      phone: "0557447485",
      img: image,
      class: "",
      number: 1,
    },
    {
      name: "Test 1",
      group: "IELTS group 01",
      phone: "0345464345",
      img: image,
      class: "",
      number: 2,
    },
    {
      name: "Test 2",
      group: "IELTS group 01",
      phone: "0557346232",
      img: image,
      class: "",
      number: 3,
    },
    {
      name: "Test 3",
      group: "IELTS group 01",
      phone: "0557345645",
      img: image,
      class: "",
      number: 4,
    },
    {
      name: "Test 3",
      group: "IELTS group 01",
      phone: "0557345645",
      img: image,
      class: "",
      number: 5,
    },
  ]);

  useEffect(() => {
    if (data.submit === true) {
      handleFormSubmit();
    }
  }, [data.submit]);
  const [Count, SetCount] = useState(5);
  const handleFormSubmit = () => {
    SetCount(Count + 1);
    const updatedCards = [
      {
        name: `${data.firstName} ${data.lastName}`,
        group: "IELTS group 01",
        phone: `${data.phone}`,
        img: image,
        class: "new_card",
        number: Count,
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
            number={card.number}
            clas={`${card.class}`}
            handlOverlayEdit={handlOverlayEdit}
            handlOberlayDeete={handlOberlayDeete}
            onClick={() => {
              collectStd(card);
              setCardNum((Prev) => {
                if (Prev === card.number) {
                  return null;
                } else {
                  return card.number;
                }
              });
            }}
            background={CardNum}
          />
        ))}
      </div>
    </>
  );
}

export default Cards;
