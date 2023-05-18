import { useField } from "formik";
import React from "react";

function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="formItem">
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.error ? "inputError formInput" : "formInput"}
      >
        <option value="">Select university</option>
        <option value="Bogazici">Boğaziçi University</option>
        <option value="Odtu">Odtu university</option>
        <option value="Marmara">Marmara university</option>
        <option value="Itu">Istanbul Ticaret Universitesi</option>
      </select>
      {meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
}

export default CustomSelect;
