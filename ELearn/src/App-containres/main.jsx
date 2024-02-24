import Nav2 from "./nav_bar";
import YourStudents from "./your-students";
import { useState } from "react";
import AddStudent from "./add-students";
function Main({ toggleContainer }) {
  // const [formData, SetformData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   phone: "",
  // });
  // const handlOnchange = (event) => {
  //   const{name, value} = event.target;
  //   SetformData({
  //     ...formData,
  //     [name]:value
  //   })
  // }
  return (
    <>
      <Nav2 toggleContainer={toggleContainer} />
      <YourStudents />
      <AddStudent text="Add new student"  />
    </>
  );
}

export default Main;
