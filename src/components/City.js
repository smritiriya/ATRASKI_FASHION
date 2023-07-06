import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { location, map } from "../assets";

const City = () => {
  return (
    <Container>
      <h1 className="text-center my-5">Cities Associated with</h1>
      <Row className="col-12 justify-content-center ">
        <Col
          sm={6}
          className="py-5"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <Row>
            <Col xs={6} md={4} className="py-5">
              <div className="box d-flex justify-content-center">
                <Image
                  src={location}
                  fluid
                  style={{ width: "40px", height: "40px" }}
                />
                <h4>Mumbai</h4>
              </div>
            </Col>
            <Col xs={6} md={4} className="py-5">
              <div className="box d-flex justify-content-center">
                <Image
                  src={location}
                  fluid
                  style={{ width: "40px", height: "40px" }}
                />
                <h4>Pune</h4>
              </div>
            </Col>
            <Col xs={6} md={4} className="py-5">
              <div className="box d-flex justify-content-center">
                <Image
                  src={location}
                  fluid
                  style={{ width: "40px", height: "40px" }}
                />
                <h4>Kolkata</h4>
              </div>
            </Col>
            <Col xs={6} md={4} className="py-5">
              <div className="box d-flex justify-content-center">
                <Image
                  src={location}
                  fluid
                  style={{ width: "40px", height: "40px" }}
                />
                <h4>Guwahti</h4>
              </div>
            </Col>
            <Col xs={6} md={4} className="py-5">
              <div className="box d-flex justify-content-center">
                <Image
                  src={location}
                  fluid
                  style={{ width: "40px", height: "40px" }}
                />
                <h4>Delhi</h4>
              </div>
            </Col>
            <Col xs={6} md={4} className="py-5">
              <div className="box d-flex justify-content-center">
                <Image
                  src={location}
                  fluid
                  style={{ width: "40px", height: "40px" }}
                />
                <h4>Hyderabad</h4>
              </div>
            </Col>
            <Col xs={6} md={4} className="py-5">
              <div className="box d-flex justify-content-center">
                <Image
                  src={location}
                  fluid
                  style={{ width: "40px", height: "40px" }}
                />
                <h4>Bangalore</h4>
              </div>
            </Col>
            <Col xs={6} md={4} className="py-5">
              <div className="box d-flex justify-content-center">
                <Image
                  src={location}
                  fluid
                  style={{ width: "40px", height: "40px" }}
                />
                <h4>Indore</h4>
              </div>
            </Col>
            <Col xs={6} md={4} className="py-5">
              <div className="box d-flex justify-content-center">
                <Image
                  src={location}
                  fluid
                  style={{ width: "40px", height: "40px" }}
                />
                <h4>Jaipur</h4>
              </div>
            </Col>
          </Row>
        </Col>
        <Col
          sm={6}
          className="d-flex p-5 justify-content-center align-items-center"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <Image src={map} fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default City;
