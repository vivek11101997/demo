import MainForm from "./Components/MainForm";
import { Container } from "semantic-ui-react";
import './App.css'
import UserDetails from "./Components/UserDetails";
import { Provider } from "react-redux";
import store from "./Redux/store";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Container textAlign="center">
          <MainForm />
        </Container>
      </Provider>
    </div>
  );
}

export default App;
