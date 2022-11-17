import React, { useState } from "react";
import "./CourseGoalForm.css";

const CourseGoalForm = (props) => {
  const [inputText, setInputText] = useState("");
  const [isValid, setIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      goal: inputText,
      id: Math.random(),
    };

    if (inputText.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onEnteredData(data);
    setInputText("");
  };

  const goalChangeHandler = (event) => {
    setInputText(event.target.value);
  };

  return (
    <form action="#" onSubmit={submitHandler}>
      <div className="inputs">
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{ borderColor: !isValid ? "red" : "white" }}
          type="text"
          onChange={goalChangeHandler}
          value={inputText}
        />
      </div>
      <div className="buttons">
        <button type="submit">Add Goal</button>
      </div>
    </form>
  );
};

export default CourseGoalForm;
