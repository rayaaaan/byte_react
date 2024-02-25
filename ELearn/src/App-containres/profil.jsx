import SmallButton from "./small_button";
import pen from "../assets/std_icone/pen.svg";
import delet from "../assets/std_icone/delete.svg";
import icone from "../assets/not.svg";
function Profil({ user, name, profile_picture, email, number }) {
  return (
    <div className="profile">
      <div className="flex-center-spacebetween">
        <img src={icone} alt="" />
        <span className="flex-center-gap">
          <p className="profile_text">{user}</p>
          <img src={profile_picture} alt="" className="small-profile_picture" />
        </span>
      </div>
      <div className="flex-center center margin-bottum30">
        <img src={profile_picture} alt="" className="big-profile_picture" />
      </div>
      <div className="flex-center-spacebetween margin-bottum30">
        <p className="profile_text ">{name}</p>
        <span className="flex-center-gap">
          <SmallButton border={"blue-border"} icone={pen} text={"Edit"} />
          <SmallButton border={"red-border"} icone={delet} text={"Delete"} />
        </span>
      </div>
      <p className="profile_text margin-bottum30">Coureses: ...</p>
      <p className="profile_text margin-bottum30">{email}</p>
      <p className="profile_text margin-bottum30">{number}</p>
    </div>
  );
}
export default Profil;
