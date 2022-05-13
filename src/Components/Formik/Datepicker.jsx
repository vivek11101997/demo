import React from "react";
import DateView from "react-datepicker";
import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>Pick a date</label>
      <Field name={name}>
        {({ field, form }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(changedValue) => {
                setFieldValue(name, changedValue);
              }}
            />
          );
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
      <p></p>
    </div>
  );
};

export default Datepicker;
