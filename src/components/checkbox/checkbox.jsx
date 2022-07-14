import React from "react";

function CheckBoxContainer({ items }) {
  return (
    <div className="container">
      {items.map((item, i) => {
        return (
          <div key={i}>
            <input type="checkbox" name={item} id="" />
            <label htmlFor={item}>{item}</label>
          </div>
        );
      })}
    </div>
  );
}

export default CheckBoxContainer;
