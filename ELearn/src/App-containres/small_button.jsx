function SmallButton({ border, icone, text, functione }) {
  return (
    <button onClick={functione} className={`app_small_button ${border}`}>
      {text} <img src={icone} alt="" />
    </button>
  );
}
export default SmallButton;
