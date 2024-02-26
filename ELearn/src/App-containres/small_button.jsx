function SmallButton({ border, icone, text, functione }) {
  function alerte(number) {
    alert(number);
  }
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        functione();
      }}
      className={`app_small_button ${border}`}
    >
      {text} <img src={icone} alt="" />
    </button>
  );
}
export default SmallButton;
