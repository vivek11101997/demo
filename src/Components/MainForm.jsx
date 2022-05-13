import React from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";
import { connect } from "react-redux";
import { STEPUP, STEPDOWN } from "../Redux/InfoReducer";
import ShipingInfo from "./ShipingInfo.component";
import PaymentInfo from "./PaymentInfo.component";
import FinalPage from "./FinalPage.component";

// class MainForm extends Component {
//   state = {
//     step: 1,
//     firstName: "",
//     lastName: "",
//     email: "",
//     age: "",
//     city: "",
//     country: "",
//   };

//   nextStep = () => {
//     const { step } = this.state;
//     this.setState({
//       step: step + 1,
//     });
//   };

//   prevStep = () => {
//     const { step } = this.state;
//     this.setState({
//       step: step - 1,
//     });
//   };

//   handleChange = (input) => (event) => {
//     this.setState({ [input]: event.target.value });
//   };

//   render() {
//     const { step } = this.state;
//     const { firstName, lastName, email, age, city, country } = this.state;
//     const values = { firstName, lastName, email, age, city, country };
//     switch (step) {
//       case 1:
//         return (
//           <UserDetails
//             nextStep={this.nextStep}
//             handleChange={this.handleChange}
//             values={values}
//           />
//         );
//       case 2:
//         return (
//           <PersonalDetails
//             nextStep={this.nextStep}
//             prevStep={this.prevStep}
//             handleChange={this.handleChange}
//             values={values}
//           />
//         );
//       case 3:
//         return (
//           <Confirmation
//             nextStep={this.nextStep}
//             prevStep={this.prevStep}
//             values={values}
//           />
//         );
//       case 4:
//         return <Success />;
//       default:
//         return "";
//     }
//   }
// }

const MainForm = (props) => {
  const Page = () => {
    switch (props.step) {
      case 1:
        return <ShipingInfo nextStep={props.StepUp} />;
      case 2:
        return (
          <PaymentInfo nextStep={props.StepUp} prevStep={props.StepDown} />
        );
      case 3:
        return <FinalPage nextStep={props.StepUp} prevStep={props.StepDown} />;
      case 4:
        return <Success />;
      default:
        return "";
    }
  };
  return (
    <div>
      <Page />
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainForm);
