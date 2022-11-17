import React from "react";
import GoalItem from "./GoalItem";
import "./RenderGoalItem.css";

const RenderGoalItem = (props) => {
  return (
    <div className="goalList">
      {props.items.map((item) => (
        <GoalItem
          id={item.id}
          key={item.id}
          goalData={item.goal}
          onDelete={props.onDelete}
        />
      ))}
    </div>
  );
};

export default RenderGoalItem;
