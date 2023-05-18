import { useField } from "formik";
import React from "react";

function CustomCheckbox({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="checkboxDiv">
      <input {...field} {...props} className="checkboxInput" />
      <span>Accept Form</span>
      {meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
}

export default CustomCheckbox;
