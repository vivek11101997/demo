import React from "react";
import { STEPDOWN, STEPUP } from "../Redux/InfoReducer";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../Components/Formik/FormikControl";

const FinalPage = (props) => {
  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
  });
  const onSubmit = (values) => console.log(values);

  const saveAndContinue = (e) => {
    e.preventDefault();
    props.StepUp();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <p>Final Page</p>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />

          <button onClick={props.StepDown}>Back</button>
          <button type="submit" onClick={saveAndContinue}>
            Save And Continue
          </button>
        </Form>
      )}
    </Formik>
  );
};

const mapStateToProps = (state) => {
  return {
    step: state.info.step,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    StepUp: () => dispatch(STEPUP()),
    StepDown: () => dispatch(STEPDOWN()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FinalPage);
