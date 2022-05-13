import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContanier() {
  const dropdownOptions = [
    { key: "Select An Role", value: "" },
    { key: "Admin", value: "Admin" },
    { key: "Super Admin", value: "Super Admin" },
    { key: "Supervisor", value: "Supervisor" },
    { key: "Operator", value: "Operator" },
  ];

  const radioOptions = [
    { key: "Male", value: "Male" },
    { key: "Female", value: "Female" },
    { key: "Other", value: "Other" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    birthDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => console.log(values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />

          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />

          <FormikControl
            control="select"
            label="Select Role"
            name="selectOption"
            options={dropdownOptions}
          />

          <FormikControl
            control="radio"
            label="Select Gender"
            name="radioOption"
            options={radioOptions}
          />

          <FormikControl control="date" label="Pick a date" name="birthDate " />

          {/* <FormikControl
            control="chakraInput"
            type="email"
            label="Email"
            name="email"
          /> */}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContanier;
