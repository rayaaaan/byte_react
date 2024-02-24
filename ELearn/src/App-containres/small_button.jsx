function SmallButton ({border, icone, text}) {
    return <button className={`app_small_button ${border}`}>{text} <img src={icone} alt="" /> </button>
}
export default SmallButton;