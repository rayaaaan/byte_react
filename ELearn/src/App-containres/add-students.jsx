import React from "react";
import Button from "../landing-page-containres/button";
import icone from "../assets/Done.svg";
import exit from "../assets/exit.svg";

function AddStudent({
  text,
  handlOnchange,
  handlSubmit,
  formData,
  button = false,
  Exit,
}) {
  return (
    <div className="students-container">
      <div className="flex-center-spacebetween margin-bottum30">
        <h1 className="add_student_h1">{text}</h1>
        {button && (
          <img onClick={Exit} src={exit} alt="" className="hover-pointer" />
        )}
      </div>
      <form onSubmit={handlSubmit}>
        <div className="add_form">
          <input
            onChange={handlOnchange}
            name="firstName"
            type="text"
            className="Test"
            placeholder="First name"
            value={formData.firstName}
          />
          <input
            onChange={handlOnchange}
            type="email"
            className="Test"
            placeholder="Email"
          />
          <input
            onChange={handlOnchange}
            name="lastName"
            type="text"
            className="Test"
            placeholder="Last name"
            value={formData.lastName}
          />
          <input
            onChange={handlOnchange}
            type="password"
            className="Test"
            placeholder="Password"
          />
          <input
            onChange={handlOnchange}
            name="phone"
            type="number"
            className="Test"
            placeholder="phone number"
            value={formData.phone}
          />
        </div>
        <div className="flex-end">
          <Button type="submit" text="Done" icone={icone} />
        </div>
      </form>
    </div>
  );
}

export default AddStudent;
