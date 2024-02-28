import exit from "../assets/exit.svg";
import SmallButton from "./small_button";
function Delete({ Exit, DeleteCard }) {
  return (
    <div className="delete">
      <div className="flex-end">
        <img src={exit} alt="" onClick={Exit} className="hover-pointer" />
      </div>
      <div className="center">
        <p className="delete_p">Are you sure you wanna delete this user?</p>
        <div className="flex-center-gap margin-bottum30 margin">
          <SmallButton text="ANNULER" border={" blue"} Exit={Exit} />
          <SmallButton text="DELETE" border={" red"} DeleteCard={DeleteCard} />
        </div>
      </div>
    </div>
  );
}
export default Delete;
