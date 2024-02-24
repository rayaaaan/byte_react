function Button({ text, icone, clas, position, img_class, type }) {
  if (!icone) {
    return <button type={type} className={`button ${clas}`}>{text}</button>;
  }
  if (position === "left") {
    return (
      <button type={type} className={`button ${clas}`}>
        <img src={icone} className="button_image" />
        {text}
      </button>
    );
  }
  return (
    <button type={type} className={`button ${clas}`} >
      {text} <img src={icone} className={`button_image ${img_class}`} />
    </button>
  );
}

export default Button;
