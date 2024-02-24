import Form from "./form";
import boy from "../assets/boy.png";
function Loginbody() {
  return (
    <div className="body">
      <div className="hero_login">
        <div className="hero_login_1">
          <h1 className="hero_login_h1">Elites School E-learning platform</h1>
          <img src={boy} alt="aaaaaaaa" className="hero_login_img" />
        </div>
        <div className="hero_login_2">
          <Form />
        </div>
      </div>
    </div>
  );
}
export default Loginbody;
