import React, { useEffect } from "react";
import { connect } from "react-redux";
import { REMOVE_PARAMS, SET_PARAMS } from "../../actions/action";

function CheckBoxContainer({ items, params, dispatch, usp }) {
  const addParams = ({ target: { value } }) => {
    dispatch({
      type: usp[params].includes(value) ? REMOVE_PARAMS : SET_PARAMS,
      payload: { params: params, item: value },
    });
  };

  return (
    <div className="container">
      {items.map(({ title, value }, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              onClick={(e) => addParams(e)}
              value={value}
            />
            <label htmlFor={title}>{title}</label>
          </div>
        );
      })}
    </div>
  );
}

export default connect((state) => state)(CheckBoxContainer);
