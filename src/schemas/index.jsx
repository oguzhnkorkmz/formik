import * as yup from "yup";
const passwordRules = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  age: yup
    .number()
    .positive("Please enter a valid age")
    .integer("Please enter a valid age")
    .required("Age is required"),
  password: yup
    .string()
    .min(8, "Plese enter min 8 character")
    .matches(passwordRules, {
      message: "Minimum eight characters, at least one letter and one number:",
    })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password did not match")
    .required("Confrim password is required"),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Please enter min 3 character")
    .required("Username is required"),
  university: yup
    .string()
    .oneOf(["Bogazici", "Odtu", "Marmara", "Itu"], "Plese select university")
    .required("University is required"),
  isAccepted: yup.boolean().oneOf([true], "Plese accept form"),
});
