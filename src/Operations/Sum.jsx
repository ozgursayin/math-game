import React from "react";

const Sum = (props) => {
  let answer = parseInt(props.num1) + parseInt(props.num2);

  return (
    <div>
      <br />
      <h1 className={props.incorrect ? "incorrect" : ""}>
        {props.num1} + {props.num2}
      </h1>
      <hr />
      <input
        id="input"
        type="text"
        autoFocus
        value={props.response}
        onKeyPress={(e) => props.onKeyPress(e)}
        onChange={(e) => props.onChange(e)}
        try={props.try}
      />
      <p className={props.try === 3 ? "visible" : "invisible"}>{answer}</p>
    </div>
  );
};

export default Sum;
