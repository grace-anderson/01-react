import React, { useState} from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //function clickHandler
  //register state using useState()
  //useState always returns two values
  //[the value itself, AND the updating function]
  //call updating function (e.g. setTitle) whenever the state should change
  //use the value (e.g. title) whenever you want to use the value as an output in JSX code (e.g. <h2>{title}</h2>)
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');

  const clickHandler = () => {
    setTitle("updated!!!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
