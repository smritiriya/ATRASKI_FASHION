
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { bigb, fashionweek, pantaloon } from "../assets";

// const BrandCollaboration = () => {
  

    const IP = () => {
    const brandLogos = [
    { id: 1, src:pantaloon },
    { id: 2, src: bigb },
    // { id: 3, src: fashionweek },
    // { id: 4, src: "logo4.png" },
    // { id: 5, src: "logo5.png" },
    // { id: 6, src: "logo6.png" },
    // Add more logo objects as needed
  ];
    return (
      <>
        <h2 className="Heading-1 text-center py-5 mt-5">
          Intellectual Presentors
        </h2>
        <Container fluid className="py-3 collab ">
          {/* <Row>
        <div className="justify-content-center text-center">
          <p>
            Atraski welcomes each and every individual starting from a beginner
            to an intermediate who believes in the fact that ‘Fashion is like
            the air they need to breathe and survive. Here are some of our
            previous journeys and collaborations where our models amazed the
            world with their gorgeous performance & aesthetic expressions while
            our designers lit up the garments with their brilliance!
          </p>
        </div>
      </Row> */}

          <Row
            className="justify-content-center py-5"
            // style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            {/* <hr /> */}
            {brandLogos.map((logo) => (
              <Col xs={10} sm={6} md={4} lg={3} key={logo.id} className="p-4">
                <img
                  src={logo.src}
                  alt={`Logo ${logo.id}`}
                  className="img-fluid"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                />
              </Col>
            ))}
            {/* <hr /> */}
          </Row>
        </Container>
      </>
    );
}

export default IP