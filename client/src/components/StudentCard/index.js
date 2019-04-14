import React from "react";
import "./style.css";

export function StudentCard({ children }) {
  return (
    <div className="studentCard">
      <img src={children} />
      <h1 className="studentName">{children}</h1>
      <p>Age: {children}</p>
      <p>Teacher: {children}</p>
    </div>
  );
}
