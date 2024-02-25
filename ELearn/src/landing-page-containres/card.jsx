function Card({ image, image2, text, clas }) {
  return (
    <div className="card">
      <img src={image} alt="" className="card_image_1" />
      <img src={image2} alt="" className={`card_Image_2 ${clas}`} />
      <h5 className="card_text">{text}</h5>
    </div>
  );
}

export default Card;
