import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group m-1">
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} className="btn btn-success btn-block mt-3 p-2">
      {props.children}
    </button>
  );
}

export const CancelBtn = (props) => {
  return (
    <button  type="button" onClick={props.handleCancelClick} className="btn btn-danger btn-block mt-3 p-2">
      {props.children}
    </button>
  );
}
