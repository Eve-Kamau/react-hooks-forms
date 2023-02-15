import React from "react";
import Checkbox from "./Checkbox";

function Form(props) {
  return (
    <div>
    <form>
      <input
        type="text"
        onChange={props.handleFirstNameChange}
        value={props.firstName}
      />
      <input
        type="text"
        onChange={props.handleLastNameChange}
        value={props.lastName}
      />
      <button type="submit">Submit</button>
    </form>
    <Checkbox />
    </div>
  );
}

export default Form;