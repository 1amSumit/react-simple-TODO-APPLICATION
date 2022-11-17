import { useState } from "react";
import "./App.css";

import CourseGoal from "./components/CourseGoal";
import RenderGoalItem from "./components/RenderGoalItem";

const Dummy_Data = [
  {
    goal: "math",
    id: "e1",
  },
  {
    goal: "english",
    id: "e2",
  },
];

function App() {
  const [storedData, setStoredData] = useState(Dummy_Data);
  const getData = (goalData) => {
    setStoredData((previousData) => {
      const updatedGoals = [...previousData];
      updatedGoals.unshift(goalData);
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setStoredData((prevGoals) => {
      console.log(prevGoals);
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (storedData.length > 0) {
    content = (
      <RenderGoalItem items={storedData} onDelete={deleteItemHandler} />
    );
  }

  return (
    <div>
      <CourseGoal onSaveData={getData} />
      {content}
    </div>
  );
}

export default App;
