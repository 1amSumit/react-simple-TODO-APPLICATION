import React from "react";
import "./GoalItem.css";

const GoalItem = (props) => {
  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <div className="GoalItem" onClick={deleteHandler}>
      <p className="GoalItem__Text">{props.goalData}</p>
    </div>
  );
};

export default GoalItem;
