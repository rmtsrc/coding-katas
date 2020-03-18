import React from "react";

import Complexity from "../Complexity";
import Form from "../Form";

import "./styles.css";

export default () => {
  const page = window.location.pathname.slice(1);

  return (
    <>
      {page.length === 0 && (
        <ul className="exercise-list">
          <li className="exercise-list__item">
            <a href="/complexity">Complexity</a>
          </li>
          <li className="exercise-list__item">
            <a href="/form">Form</a>
          </li>
        </ul>
      )}

      {page === "complexity" && <Complexity />}

      {page === "form" && <Form />}
    </>
  );
};
