function SmallButton ({border, icone}) {
    return <button className={`app_small_button ${border}`}> <img src={icone} alt="" /> </button>
}
export default SmallButton;