import React from "react";
import { STEPDOWN, STEPUP } from "../Redux/InfoReducer";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../Components/Formik/FormikControl";
import { Label } from "semantic-ui-react";

const ShipingInfo = (props) => {
  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    props.StepUp();
    console.log(values);
  };

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
        <>
          <Form>
            <p>Shiping Info</p>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="input"
              type="name"
              label="Username"
              name="name"
            />
            <FormikControl
              control="textarea"
              type=""
              label="Address"
              name="address"
            />

            {/* <button type="submit" onClick={saveAndContinue}>
            Save And Continue
          </button> */}
            <button type="submit">Save And Continue</button>
          </Form>
        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShipingInfo);
