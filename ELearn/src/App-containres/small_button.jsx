function SmallButton({
  border,
  icone,
  text,
  functione,
  CollectNumber,
  number,
  DeleteCard,
  Exit
}) {
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        functione();
        CollectNumber(number);
        DeleteCard();
        Exit();
      }}
      className={`app_small_button ${border}`}
    >
      {text} <img src={icone} alt="" />
    </button>
  );
}
export default SmallButton;
