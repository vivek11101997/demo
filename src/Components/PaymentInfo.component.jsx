import React from "react";
import { STEPDOWN, STEPUP } from "../Redux/InfoReducer";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../Components/Formik/FormikControl";

const PaymentInfo = (props) => {
  const initialValues = {
    buyer_Name: "",
    buyer_LastName: "",
    buyer_upi: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    props.StepUp();
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <p>Payment Information</p>
          <FormikControl
            control="input"
            type="text"
            label="Email"
            name="buyer_Name"
          />

          <FormikControl
            control="input"
            type="text"
            label="Buyer LastName"
            name="buyer_LastName"
          />

          <FormikControl
            control="input"
            type="text"
            label="Buyer UPI"
            name="buyer_upi"
          />

          <button onClick={props.StepDown}>Back</button>
          {/* <button type="submit" onClick={saveAndContinue}>
            Save And Continue
          </button> */}
          <button type="submit">Save And Continue</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(PaymentInfo);
