import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { img1, img2, img3, img4, img5, img6, img7, bannerimg, img11,img12,img13,img14,img15,img16 } from "../assets";
import "../App.css";

const Section1 = () => {
  const mystyle = {
    // border: "2px solid green",
    padding: "10px",
    // display:"flex"
  };
  const mystyle1 = {
    // border: "2px solid red",
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const mystyle2 = {
    // border: "2px solid blue",
  };

  return (
    <div className="container-fluid">
      <div className="d-none d-lg-block">
        <div className="row col-12 ">
          <div className="col-4 " style={mystyle}>
            <div className="row col-12">
              <div className="col-6 imgBox">
                <img
                  src={img1}
                  alt=""
                  style={{ height: "90%", width: "230px" }}
                />
              </div>
              <div className="col-6 imgBox">
                <img
                  src={img2}
                  alt=""
                  style={{ height: "90%", width: "230px" }}
                />
              </div>
            </div>
            <div className="row col-12">
              <div className="col-6 imgBox">
                <img
                  src={img3}
                  alt=""
                  style={{ height: "90%", width: "230px" }}
                />
              </div>
              <div className="col-6 imgBox">
                <img
                  src={img4}
                  alt=""
                  style={{ height: "90%", width: "230px" }}
                />
              </div>
            </div>
            <div className="row col-12">
              <div className="col-6 imgBox">
                <img
                  src={img5}
                  alt=""
                  style={{ height: "90%", width: "230px" }}
                />
              </div>
              <div className="col-6 imgBox">
                <img
                  src={img6}
                  alt=""
                  style={{ height: "90%", width: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="col-4" style={mystyle1}>
            <div className="row col-12 biglogoBox">
              <img
                src={img7}
                alt=""
                style={{ width: "80%", height: "320px" }}
              />
            </div>
          </div>
          <div className="col-4 " style={mystyle}>
            <div className="row col-12">
              <div className="col-6 imgBox">
                <img
                  src={img11}
                  alt=""
                  style={{ height: "90%", width: "230px" }}
                />
              </div>
              <div className="col-6 imgBox">
                <img
                  src={img12}
                  alt=""
                  style={{ height: "90%", width: "230px" }}
                />
              </div>
            </div>
            <div className="row col-12">
              <div className="col-6 imgBox">
                <img
                  src={img13}
                  alt=""
                  style={{ height: "90%", width: "230px" }}
                />
              </div>
              <div className="col-6 imgBox">
                <img
                  src={img14}
                  alt=""
                  style={{ height: "90%", width: "230px" }}
                />
              </div>
            </div>
            <div className="row col-12">
              <div className="col-6 imgBox">
                <img
                  src={img15}
                  alt=""
                  style={{ height: "90%", width: "230px" }}
                />
              </div>
              <div className="col-6 imgBox">
                <img
                  src={img16}
                  alt=""
                  style={{ height: "90%", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 d-block d-lg-none justify-content-center">
        <img
          src={bannerimg}
          alt=""
          className="image-fluid"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default Section1;
