import React from 'react';

import Complexity from '../Complexity';
import Form from '../Form';
import FormHooks from '../FormHooks';
import CustomHook from '../CustomHook';
import ReduxToolkit from '../ReduxToolkit';

import './styles.css';

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
          <li className="exercise-list__item">
            <a href="/form-hooks">React Form Hook</a>
          </li>
          <li className="exercise-list__item">
            <a href="/custom-hook">Custom Hook</a>
          </li>
          <li className="exercise-list__item">
            <a href="/redux-toolkit">Redux Toolkit</a>
          </li>
        </ul>
      )}

      {page === 'form' && <Form />}

      {page === 'form-hooks' && <FormHooks />}

      {page === 'custom-hook' && <CustomHook />}

      <div style={{ margin: 10 }}>
        {page === 'complexity' && <Complexity />}

        {page === 'redux-toolkit' && <ReduxToolkit />}
      </div>
    </>
  );
};
