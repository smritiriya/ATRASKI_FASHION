// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { img1, img11, img12, img13, img14, img2, img3, img4, img5, img6, img7 } from "../assets";

// const ImageGallery = ({ images }) => {
//   return (
//     <Container>
//       <Row>
//         {/* {images.map((image, index) => ( */}
//           <Col  sm={6} md={4} lg={3}  className="imgbox" >
//             <img src={img1} alt="mig" className="img-fluid myimg" />
//           </Col>
//           <Col  sm={6} md={4} lg={3}>
//             <img src={img2} alt="mig" className="img-fluid myimg" />
//           </Col>
//           <Col  sm={6} md={4} lg={3}>
//             <img src={img3} alt="mig" className="img-fluid myimg" />
//           </Col>
//           <Col  sm={6} md={4} lg={3}>
//             <img src={img4} alt="mig" className="img-fluid myimg" />
//           </Col>
//           <Col  sm={6} md={4} lg={3}>
//             <img src={img5} alt="mig" className="img-fluid myimg" />
//           </Col>
//           <Col  sm={6} md={4} lg={3}>
//             <img src={img7} alt="mig" className="img-fluid myimg" />
//           </Col>
//           <Col  sm={6} md={4} lg={3}>
//             <img src={img6} alt="mig" className="img-fluid myimg" />
//           </Col>
//           <Col  sm={6} md={4} lg={3}>
//             <img src={img11} alt="mig" className="img-fluid myimg" />
//           </Col>
//           <Col  sm={6} md={4} lg={3}>
//             <img src={img12} alt="mig" className="img-fluid myimg" />
//           </Col>
//           <Col  sm={6} md={4} lg={3}>
//             <img src={img13} alt="mig" className="img-fluid myimg" />
//           </Col>
//           <Col  sm={6} md={4} lg={3}>
//             <img src={img14} alt="mig" className="img-fluid myimg" />
//           </Col>
          
//         {/* ))} */}
//       </Row>
//     </Container>
//   );
// };

// export default ImageGallery;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  img1,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  logo,
} from "../assets";

const ImageGallery = () => {
  // Dummy image URLs
  const imageUrls = [
    { url: img1, alt: "Image 1" },
    { url: img2, alt: "Image 2" },
    { url: img12, alt: "Image 9" },
    { url: img13, alt: "Image 10" },

    { url: img3, alt: "Image 3" },
    // { url: img7, alt: "Image 7" },

    { url: img4, alt: "Image 4" },
    { url: img14, alt: "Image 11" },

    { url: img5, alt: "Image 5" },
    { url: img6, alt: "Image 6" },
    { url: img11, alt: "Image 8" },

    { url: img15, alt: "Image 12" },
    { url: img16, alt: "Image 12" },
  ];

  return (
    <Container fluid>
      <Row>
        {/* {imageUrls.map((imageUrl, index) => ( */}
        <Col xs={6} sm={4} md={3} lg={2}>
          <div
            className="image-box"
            style={{ width: "100%", height: "100%" }}
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <img
              src={img1}
              //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <div
            className="image-box"
            style={{ width: "100%", height: "100%" }}
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <img
              src={img2}
              //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <div
            className="image-box"
            style={{ width: "100%", height: "100%" }}
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <img
              src={img12}
              //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <div
            className="image-box"
            style={{ width: "100%", height: "100%" }}
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <img
              src={img13}
              //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <div
            className="image-box"
            style={{ width: "100%", height: "100%" }}
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <img
              src={img14}
              //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <div
            className="image-box"
            style={{ width: "100%", height: "100%" }}
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <img
              src={img3}
              //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        {/* ))} */}
      </Row>

      <Row className="py-0">
        <marquee behavior="" direction="" scrollamount="10">
          {" "}
          ATRASKI &nbsp; | &nbsp; FASHION &nbsp; &nbsp; &nbsp; ATRASKI
          &nbsp;|&nbsp; FASHION &nbsp; &nbsp; ATRASKI &nbsp;|&nbsp; FASHION
          &nbsp; &nbsp; &nbsp; &nbsp;
          <img
            src={img7}
            alt=""
            style={{ width: "150px", height: "150px" }}
          />{" "}
          ATRASKI | FASHION &nbsp; &nbsp; &nbsp; ATRASKI | FASHION &nbsp; &nbsp;
          &nbsp; ATRASKI | FASHION &nbsp; &nbsp; &nbsp;
        </marquee>
      </Row>

      <Row>
        {/* {imageUrls.map((imageUrl, index) => ( */}
        <Col xs={6} sm={4} md={3} lg={2}>
          <div
            className="image-box"
            style={{ width: "100%", height: "100%" }}
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <img
              src={img4}
              //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <div
            className="image-box"
            style={{ width: "100%", height: "100%" }}
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <img
              src={img14}
              //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <div
            className="image-box"
            style={{ width: "100%", height: "100%" }}
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <img
              src={img5}
              //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <div
            className="image-box"
            style={{ width: "100%", height: "100%" }}
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <img
              src={img6}
              //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <div
            className="image-box"
            style={{ width: "100%", height: "100%" }}
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <img
              src={img11}
              //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col xs={6} sm={4} md={3} lg={2}>
          <div
            className="image-box"
            style={{ width: "100%", height: "100%" }}
            data-aos="flip-right"
            data-aos-duration="3000"
          >
            <img
              src={img15}
              //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
        {/* <Col xs={6} sm={4} md={3} lg={2}>
          <div className="image-box" style={{ width: "100%", height: "100%" }}>
            <img
              src={img16}
            //   alt={`Image ${index}`}
              className="img-fluid"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col> */}
        {/* ))} */}
      </Row>
    </Container>
  );
};

export default ImageGallery;
