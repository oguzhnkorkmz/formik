import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log(values, actions);
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  actions.resetForm();
};

function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          university: "",
          isAccepted: false,
        }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Username"
              name="username"
              type="text"
              placeholder="Plese enter username"
            />
            <CustomSelect
              label="University"
              name="university"
              placeholder="Plese select university"
            />
            <CustomCheckbox type="checkbox" name="isAccepted" />
            <div className="formItem">
              <button
                disabled={isSubmitting}
                className="submitBtn "
                type="submit"
              >
                Submit
              </button>
              <Link to="/">General Form</Link>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
