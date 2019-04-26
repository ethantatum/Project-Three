import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

export const CancelBtn = (props) => {
  return (
    <button  type="button" style={{ float: "right", marginBottom: 10, marginRight: 5 }} onClick={props.handleCancelClick} className="btn btn-danger">
      {props.children}
    </button>
  );
}
