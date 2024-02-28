import Nav2 from "./nav_bar";
import YourStudents from "./your-students";
import { useState } from "react";
import AddStudent from "./add-students";
function Main({ collectStd, onclick_nav }) {
  const [formData, SetformData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [data, Setdata] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    submit: false,
  });
  const [EditData, SetEditData] = useState({
    firstNameEdit: "",
    lastNameEdit: "",
    phoneEdit: "",
    number: null,
  });
  const [TempNum, setTempNum] = useState(null);
  const [DeleteNum, setDeleteNum] = useState(null);
  const handlOnchange = (event) => {
    const { name, value } = event.target;
    SetformData({
      ...formData,
      [name]: value,
    });
    SetEditData({
      ...EditData,
      [name]: value,
    });
    Setdata({
      firstName: "",
      lastName: "",
      phone: "",
      submit: false,
    });
  };
  const handlSubmit = (event) => {
    event.preventDefault();
    if (
      formData.firstName !== "" &&
      formData.lastName !== "" &&
      formData.phone.length === 10
    ) {
      Setdata({
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        submit: true,
      });
      SetformData({
        firstName: "",
        lastName: "",
        phone: "",
      });
    } else {
      if (
        EditData.firstNameEdit !== "" &&
        formData.lastNameEdit !== "" &&
        formData.phoneEdit.length === 10
      ) {
        SetEditData({
          ...EditData,
          number: TempNum,
        });
        alert("Submit");
        setTempNum(null);
      } else {
        alert("false");
      }
    }
  };

  const CollectNumber = (number) => {
    setTempNum(number);
  };
  const DeleteCard = () => {
    setDeleteNum(TempNum);
    console.log(TempNum);
    setTempNum(null);
  };
  return (
    <div className="relative">
      <Nav2 onclick_nav={onclick_nav} />
      <YourStudents
        data={data}
        handlOnchange={handlOnchange}
        handlSubmit={handlSubmit}
        formData={formData}
        collectStd={collectStd}
        EditData={EditData}
        CollectNumber={CollectNumber}
        DeleteCard={DeleteCard}
      />
      <AddStudent
        text="Add new student"
        handlOnchange={handlOnchange}
        handlSubmit={handlSubmit}
        formData={formData}
      />
    </div>
  );
}

export default Main;
