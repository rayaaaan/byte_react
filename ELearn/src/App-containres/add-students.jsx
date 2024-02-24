import React from "react";
import Button from "../landing-page-containres/button";
import icone from "../assets/Done.svg";

function AddStudent({ text }) {
  return (
    <div className="students-container">
      <h1 className="add_student_h1">{text}</h1>
      <form id="form">
        <div className="add_form">
          <input type="text" className="Test" placeholder="First name" />
          <input type="email" className="Test" placeholder="Email" />
          <input type="text" className="Test" placeholder="Last name" />
          <input type="password" className="Test" placeholder="Password" />
          <input type="number" className="Test" placeholder="phone number" />
        </div>
        <div className="flex-end">
          <Button type="submit" text="Done" icone={icone} />
        </div>
      </form>
    </div>
  );
}

export default AddStudent;
