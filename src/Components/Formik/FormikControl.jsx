import React from "react";
import Input from "./input";
import Textarea from "./Textarea";
import Select from "./Select";
import Radio from "./Radio";
import Datepicker from "./Datepicker";
import ChaktaInput from "./ChaktaInput";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
    case "date":
      return <Datepicker {...rest} />;
    case "chakraInput":
      return <ChaktaInput {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
