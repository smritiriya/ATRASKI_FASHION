// import React from 'react'
// import { pantaloon } from '../assets';

// const Collaboration = () => {
//   const mystyle = {
//     margin:"10px"
//   }
//   return (
//     <div className='collab'>
//       <div className="row my-3 py-3 py-md-5 px-2  justify-content-center align-items-center">
//         <h1 className="Heading-1 text-center"> OUR PAST COLLABORATION</h1>
//         {/* <div className="col-lg-5 d-none d-lg-block ps-0 ps-sm-4 text-start py-3"> */}
//         <div className="col-9 ps-0 ps-sm-4 m-2 p-3 justify-content-center">
//           <p>
//             Atraski welcomes each and every individual starting from a beginner
//             to an intermediate who believes in the fact that ‘Fashion is like
//             the air they need to breathe and survive.
//           </p>
//           <p>
//             Here are some of our previous journeys and collaborations where our
//             models amazed the world with their gorgeous performance & aesthetic
//             expressions while our designers lit up the garments with their
//             brilliance!
//           </p>
//         </div>
//         <div
//           className="col-9 d-flex justify-content-center"
//           style={{ fontWeight: "bold" }}
//         >
          
//           <ul className="row col-12 d-flex justify-content-center">
//             <li className="m-4 col-3" style={{ color: "rgb(9, 201, 201)" }}>
//               Bhubaneswar Fashion Week
//             </li>
//             <li className="m-4 col-3" style={{ color: "rgb(198, 198, 48)" }}>
//              <img src={pantaloon} alt="" />
//             </li>
//             <li className="m-4 col-3" style={{ color: "pink" }}>
//               Big Bazar{" "}
//             </li>
//             <li className="m-4 col-3" style={{ color: "rgb(26, 160, 42)" }}>
//               Bangalore Fashion Confluence
//             </li>

//             <li className="m-4 col-3" style={{ color: "rgb(234, 141, 3);" }}>
//               Pride campaign
//             </li>
//             <li className="m-4 col-3" style={{ color: "rgb(151, 5, 151)" }}>
//               IIT Kanpur – KIIT fest.
//             </li>
//           </ul>
//         </div>

//         {/* <div className="col-11  d-block d-lg-none ps-0 ps-sm-4 ">
//         <text className="Heading-1">About Us</text>
//         <br />
//         <div className=" Text-1 py-3 ">
//           <p>
//             Atraski Fashion is the runway where we groom our models; upcoming
//             fashionistas to make a giant leap into the real world of fashion
//             with brilliance and extraordinaire!
//           </p>
//           <p>
//             The sole mission of Atraski Fashion is to sculpt raw talent and give
//             shape to passion in order to facilitate their strong commencement
//             into the fashion spree.
//           </p>
//         </div>
//       </div> */}
//       </div>
//     </div>
//   );
// }

// export default Collaboration;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { bigb, fashionweek, pantaloon } from "../assets";

const BrandCollaboration = () => {
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
      <h2 className="Heading-1 text-center py-5">Our Brand Collaborations</h2>
      <Container fluid className="py-3 collab ">
        <Row
          className="justify-content-center py-5"
          // style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          {/* <hr /> */}
          {brandLogos.map((logo) => (
            <Col
              xs={10}
              sm={6}
              md={4}
              lg={3}
              key={logo.id}
              className="p-4"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <img
                src={logo.src}
                alt={`Logo ${logo.id}`}
                className="img-fluid"
              />
            </Col>
          ))}
          {/* <hr /> */}
        </Row>
      </Container>
    </>
  );
};

export default BrandCollaboration;
