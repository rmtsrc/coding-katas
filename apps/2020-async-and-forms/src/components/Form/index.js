import React, { useState } from "react";

import "./styles.css";

export default () => {
  const [form, setForm] = useState({
    email: { value: "", errors: false },
    name: { value: "", errors: false },
    surname: { value: "", errors: false },
    starsign: { value: "", errors: false }
  });

  const isEqualToGreaterThanTwo = value => value.length >= 2;

  const validators = {
    email: isEqualToGreaterThanTwo,
    name: isEqualToGreaterThanTwo,
    surname: isEqualToGreaterThanTwo,
    starsign: isEqualToGreaterThanTwo
  };

  const onFormChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    const formValue = Object.values(form);
    console.log(formValue);
  };

  return (
    <>
      <h1>Sign up form</h1>
      <form className="form" onSubmit={onSubmit}>
        <label htmlFor="email">Email address *</label>
        <input
          name="email"
          type="email"
          value={form.email.value}
          onChange={onFormChange}
        />
        <label htmlFor="name">First name *</label>
        <input name="name" type="text" value={form.name.value} />
        <label htmlFor="surname">Last name *</label>
        <input name="surname" value={form.surname.value} />
        <label htmlFor="starsign">Star sign</label>
        <input name="starsign" value={form.starsign} />
        <input type="button" value="Clear" className="clear" />
        <input type="submit" value="Submit" className="submit" />
      </form>
    </>
  );
};
