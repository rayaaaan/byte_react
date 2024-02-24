function Card({ image, image2, text }) {
  return (
    <div className="card">
      <img src={image} alt="" className="card_image_1" />
      <img src={image2} alt="" className="card_Image_2" />
      <h5 className="card_text">{text}</h5>
    </div>
  );
}

export default Card;
