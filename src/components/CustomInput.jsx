import { useField } from "formik";
import React from "react";

function CustomInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="formItem">
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.error ? "inputError formInput" : "formInput"}
      />
      {meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
}

export default CustomInput;
