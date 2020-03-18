import React, { useState } from 'react';

import './styles.css';

export default () => {
  const defaultValues = {
    email: '',
    name: '',
    surname: '',
    starsign: '',
  };
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});

  const notEqualToGreaterThanTwo = value => value.length <= 2 && 'Needs to be more than 2 characters';

  const validators = {
    email: notEqualToGreaterThanTwo,
    name: notEqualToGreaterThanTwo,
    surname: notEqualToGreaterThanTwo,
    starsign: () => {},
  };

  const onFormChange = e => {
    const { id, value } = e.target;
    setValues({ ...values, [id]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    const formValues = Object.entries(values);
    const validationResult = formValues.map(([field, value]) => [field, validators[field](value)]);
    setErrors(Object.fromEntries(validationResult));
  };

  const onReset = () => {
    setValues(defaultValues);
    setErrors({});
  }

  return (
    <>
      <h1>Sign up form</h1>
      <form className="form" onSubmit={onSubmit} onReset={onReset}>
        <div className={errors.email ? 'error' : ''}>
          <label htmlFor="email">Email address *</label>
          <input id="email" type="email" value={values.email} onChange={onFormChange} />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className={errors.name ? 'error' : ''}>
          <label htmlFor="name">First name *</label>
          <input id="name" type="text" value={values.name} onChange={onFormChange} />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div className={errors.surname ? 'error' : ''}>
          <label htmlFor="surname">Last name *</label>
          <input id="surname" value={values.surname} onChange={onFormChange} />
          {errors.surname && <span>{errors.surname}</span>}
        </div>
        <div className={errors.starsign ? 'error' : ''}>
          <label htmlFor="starsign">Star sign</label>
          <input id="starsign" value={values.starsign} onChange={onFormChange} />
          {errors.starsign && <span>{errors.starsign}</span>}
        </div>
        <input type="reset" value="Clear" className="clear" />
        <input type="submit" value="Submit" className="submit" />
      </form>
    </>
  );
};
