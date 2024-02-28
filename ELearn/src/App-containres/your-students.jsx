import React, { useState } from "react";
import Cards from "./students-cards";
import AddStudent from "./add-students";
import left from "../assets/std_icone/left-arrow.svg";
import right from "../assets/std_icone/right-arrow.svg";
import arrow from "../assets/std_icone/arrow.svg";
import Delete from "./delete";

function YourStudents({
  data,
  handlOnchange,
  handlSubmit,
  formData,
  collectStd,
  EditData,
  CollectNumber,
  DeleteCard,
}) {
  const [count, setCount] = useState(1);
  const [state, setState] = useState(1);
  const courses = ["IELTS Prepa", "IELTS Adven", "test 1", "test 2", "test 3"];
  const [Overlay, setOverlay] = useState({
    bool: false,
    edit: false,
    delete: false,
  });
  const [CardNum, setCardNum] = useState(null);

  function goToNextPage() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  function goToPreviousPage() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function next() {
    if (state < courses.length) {
      setState(state + 1);
    } else {
      setState(1);
    }
  }

  function previous() {
    if (state > 1) {
      setState(state - 1);
    } else {
      setState(courses.length);
    }
  }
  const handlOverlayEdit = (event, num) => {
    setOverlay({
      ...Overlay,
      bool: true,
      edit: true,
    });
    setCardNum(num);
  };
  const handlOberlayDeete = () => {
    setOverlay({
      ...Overlay,
      bool: true,
      delete: true,
    });
  };
  const Exit = () => {
    setOverlay({
      bool: false,
      edit: false,
      delete: false,
    });
  };
  return (
    <>
      <div className={Overlay.bool ? "overlay" : "display_none"}></div>

      <div className="relative">
        <div
          className={
            Overlay.bool
              ? Overlay.edit
                ? "modal edit"
                : "display_none"
              : "display_none"
          }
        >
          <AddStudent
            text="Edit Student"
            handlOnchange={handlOnchange}
            handlSubmit={handlSubmit}
            formData={formData}
            EditData={EditData}
            button={true}
            Exit={Exit}
            name={"Edit"}
          />
        </div>
      </div>
      <div className="relative">
        <div
          className={
            Overlay.bool
              ? Overlay.delete
                ? "modal delete"
                : "display_none"
              : "display_none"
          }
        >
          <Delete Exit={Exit} DeleteCard={DeleteCard} />
        </div>
      </div>
      <div className="students_header flex-center">
        <h1 className="students_h1">Your students</h1>
        <span className="flex-center students_section">
          <img src={left} className="std_arrow" onClick={previous} />
          <h1 className="students_section_h1">{courses[state - 1]}</h1>
          <img src={right} className="std_arrow" onClick={next} />
        </span>
      </div>
      <div className="students-container">
        <div className="flex-center title">
          <span className="flex-center span_title">
            <img src={arrow} alt="Arrow" />
            <h3>Name</h3>
          </span>
          <span className="flex-center span_title">
            <img src={arrow} alt="Arrow" />
            <h3>Courses</h3>
          </span>
          <span className="flex-center span_title">
            <img src={arrow} alt="Arrow" />
            <h3>Phone number</h3>
          </span>
        </div>
        <Cards
          data={data}
          handlOverlayEdit={handlOverlayEdit}
          handlOberlayDeete={handlOberlayDeete}
          EditData={EditData}
          collectStd={collectStd}
          CollectNumber={CollectNumber}
        />
        <div className="change_std flex-center">
          <button className="change_std_button" onClick={goToPreviousPage}>
            Previous
          </button>
          <span className="std_change_span">Page {count} of 10</span>
          <button className="change_std_button next" onClick={goToNextPage}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default YourStudents;
