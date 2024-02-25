import Button from "../landing-page-containres/button";
import scop from "../assets/scop.svg";
import image from "../assets/std_icone/std_picture.svg";
function Nav2() {
  return (
    <nav className="nav2">
      <h1>Students</h1>
      <span className="flex-center nav_span">
        <form className="nav_form">
          <div className="search_container">
            <Button icone={scop} clas={"-padding"} img_class={"scop"} />
            <input type="text" placeholder="Search" className="nav_search" />
          </div>
        </form>
        <img src={image} className="profile_img" />
      </span>
    </nav>
  );
}
export default Nav2;
