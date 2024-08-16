import React from "react";
import { Container, Row, Table } from "react-bootstrap";

function Diagnosislist() {
  let arr = [1, 2, 3, 4, 5, 6, 78, 4];
  return (
    <div className="dcol">
      <Container>
        <Row>
          <Table hover size="sm">
            <thead>
              <tr>
                <th>Problem/Diagnosis</th>
                <th>Description</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {arr.map(() => {
                return (
                  <tr>
                    <td>
                      <p className="text1">Hypertension</p>
                    </td>
                    <td>
                      <p className="text1">Chronic high blood pressure</p>
                    </td>
                    <td>
                      <p className="text1">
                        Under <br />
                        Observation
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
}

export default Diagnosislist;
