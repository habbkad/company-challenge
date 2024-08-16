import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Navbar from "./components/navbar/navbar";
import { Col, Container, Row } from "react-bootstrap";
import PatientsCol from "./components/patients/patientsCol";
import History from "./components/Diagnosis/history";
import Diagnosislist from "./components/Diagnosis/diagnosislist";
import Profile from "./components/profile/profile";

function App() {
  console.log(process.env.REACT_APP_API);
  axios.defaults.baseURL = "https://api.example.com";

  return (
    <div>
      <Navbar />
      <Container className="App " fluid>
        <Row>
          <Col lg={3}>
            <PatientsCol />
          </Col>
          <Col lg={6}>
            <Row>
              <History />
            </Row>
            <Row>
              <Diagnosislist />
            </Row>
          </Col>
          <Col lg={3}>
            <Profile />{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
