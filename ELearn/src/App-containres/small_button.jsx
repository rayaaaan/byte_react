function SmallButton({ border, icone, text, handlOverlay }) {
  return (
    <button onClick={handlOverlay} className={`app_small_button ${border}`}>
      {text} <img src={icone} alt="" />{" "}
    </button>
  );
}
export default SmallButton;
