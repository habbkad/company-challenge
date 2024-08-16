import React from "react";
import { Col, Row } from "react-bootstrap";
import PatientItem from "./patientItem";

function PatientsCol() {
  let arr = [1, 2, 3, 4, 5, 5, 5, 5, 43, 3, 2];
  return (
    <Row className="">
      <Col className="pcol">
        <p className="mt-4 heading1" style={{ marginTop: "10px" }}>
          Patients
        </p>
        {arr.map((item) => {
          return <PatientItem />;
        })}
      </Col>
    </Row>
  );
}

export default PatientsCol;
