import React from 'react';
import { useForm } from 'react-hook-form';

import '../Form/styles.css';

export default function FormHooks() {
  const { register, handleSubmit, reset, errors } = useForm();
  const onSubmit = data => {
    console.log('onSubmit', data);
  };

  const minLengthTwo = { required: true, minLength: 2 };

  const Error = ({ error }) => {
    if (!error) return null;

    return <span>{error?.type === 'minLength' ? 'Enter 2 characters or more' : 'This field is required'}</span>;
  };

  return (
    <div className="Form">
      <div className="FormContainer">
        <h1>Sign up form</h1>
        <form className="form" onSubmit={handleSubmit(onSubmit)} onReset={reset}>
          <div className={errors.email ? 'error' : ''}>
            <label htmlFor="email">Email address *</label>
            <input id="email" name="email" type="email" ref={register(minLengthTwo)} />
            <Error error={errors.email} />
          </div>
          <div className={errors.name ? 'error' : ''}>
            <label htmlFor="name">First name *</label>
            <input id="name" name="name" type="text" ref={register(minLengthTwo)} />
            <Error error={errors.name} />
          </div>
          <div className={errors.surname ? 'error' : ''}>
            <label htmlFor="surname">Last name *</label>
            <input id="surname" name="surname" ref={register(minLengthTwo)} />
            <Error error={errors.surname} />
          </div>
          <div className={errors.starsign ? 'error' : ''}>
            <label htmlFor="starsign">Star sign</label>
            <input id="starsign" name="starsign" ref={register()} />
            <Error error={errors.starsign} />
          </div>
          <input type="reset" value="Clear" className="clear" />
          <input type="submit" value="Submit" className="submit" />
        </form>
      </div>
    </div>
  );
}
