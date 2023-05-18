import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log(values, actions);
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  actions.resetForm();
};

function GeneralForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });
  return (
    <form className="generalForm" onSubmit={handleSubmit}>
      <div className="formItem">
        <label>Email</label>
        <input
          className={errors.email ? "inputError formInput" : "formInput"}
          type="email"
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="Enter Your Email"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="formItem">
        <label>Age</label>
        <input
          className={errors.age ? "inputError formInput" : "formInput"}
          type="number"
          value={values.age}
          onChange={handleChange}
          id="age"
          placeholder="Enter Your Age"
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div className="formItem">
        <label>Password</label>
        <input
          className={errors.password ? "inputError formInput" : "formInput"}
          type="password"
          value={values.password}
          onChange={handleChange}
          id="password"
          placeholder="Enter Your Password"
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className="formItem">
        <label>Confrim Password</label>
        <input
          className={
            errors.confirmPassword ? "inputError formInput" : "formInput"
          }
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          id="confirmPassword"
          placeholder="Confrim Password"
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      </div>
      <div className="formItem">
        <button disabled={isSubmitting} className="submitBtn " type="submit">
          Submit
        </button>
        <Link to="/portal">Portal Form</Link>
      </div>
    </form>
  );
}

export default GeneralForm;
