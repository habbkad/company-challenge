import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./history.css";
import Lung from "../../images/lung.png";
import Temp from "../../images/temperature.png";
import Heart from "../../images/heart.png";
import { LineChart } from "@mui/x-charts";

function History() {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];

  return (
    <div className="diaCon">
      <p className="heading1" style={{ marginTop: 20 }}>
        Diagonosis History
      </p>
      <Container>
        {" "}
        <Row>
          <Col md={9}>
            {" "}
            <Row>
              <Col md={4}>
                <p className="heading">Blood pressure</p>
              </Col>
              <Col md={5}></Col>
              <Col md={3}></Col>
            </Row>
            <LineChart
              width={"559"}
              height={300}
              series={[
                { data: pData, label: "pv" },
                { data: uData, label: "uv" },
              ]}
              xAxis={[{ scaleType: "point", data: xLabels }]}
            />
          </Col>
          <Col md={3}>mbjk</Col>
        </Row>
        <Row className="mt-0">
          <Col>
            <div className="orgCon">
              <img src={Lung} alt="" height={96} width={96} />
              <p className="text1 mt-2">
                Respiratory Rate<h2>20 bpm</h2>
              </p>
              <p className="text1">Normal</p>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="tempCon">
              <img src={Temp} alt="" height={96} width={96} />
              <p className="text1 mt-2">
                Temperature<h2>98.6°F</h2>
              </p>
              <p className="text1">Normal</p>
            </div>
          </Col>
          <Col>
            <div className="heartCon">
              <img src={Heart} alt="" height={96} width={96} />
              <p className="text1 mt-2">
                Heart Rate<h2>78 bpm</h2>
              </p>
              <p className="text1"> Lower than Average</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default History;
