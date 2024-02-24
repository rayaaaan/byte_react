import Button from "../landing-page-containres/button";
import icone from "../assets/Done.svg";
function AddStudent() {
  return (
    <div className="students-container">
      <h1 className="add_student_h1">Add new student</h1>
      <form className="add_form">
        <input type="text" className="Test" placeholder="First name" />
        <input type="email" className="Test" placeholder="Email" />
        <input type="text" className="Test" placeholder="Last name" />
        <input type="password" className="Test" placeholder="Password" />
        <input type="number" className="Test" placeholder="phone number" />
      </form>
      <div className="flex-end">
        <Button text="Done" icone={icone} />
      </div>
    </div>
  );
}
export default AddStudent;
