function Button({ text, icone, clas, position, img_class }) {
  if (!icone) {
    return <button className={`button ${clas}`}>{text}</button>;
  }
  if (position === "left") {
    return (
      <button className={`button ${clas}`}>
        <img src={icone} className="button_image" />
        {text}
      </button>
    );
  }
  return (
    <button className={`button ${clas}`}>
      {text} <img src={icone} className={`button_image ${img_class}`} />
    </button>
  );
}

export default Button;
