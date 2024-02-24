import React, { useState } from "react";
import Cards from "./students-cards";
import left from "../assets/std_icone/left-arrow.svg";
import right from "../assets/std_icone/right-arrow.svg";
import arrow from "../assets/std_icone/arrow.svg";

function YourStudents() {
  const [count, setCount] = useState(1);
  const [state, setState] = useState(1);
  const courses = ["IELTS Prepa", "IELTS Adven", "test 1", "test 2", "test 3"];

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

  return (
    <>
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
        <Cards />
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
