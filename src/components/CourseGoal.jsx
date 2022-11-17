import React from "react";
import CourseGoalForm from "./CourseGoalForm";

import "./CourseGoal.css";

const courseGoal = (props) => {
  const getFormData = (enteredData) => {
    props.onSaveData(enteredData);
  };
  return (
    <div className="courseGoal">
      <CourseGoalForm onEnteredData={getFormData} />
    </div>
  );
};

export default courseGoal;
