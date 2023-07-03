import React from 'react'
import { mission, vission } from '../assets';

const MissionVision = () => {
  return (
    // <div className="row m-0 py-3 py-md-5 px-2 d-flex justify-content-center  text-center text-lg-start">
    //   <div className="col-lg-5 d-none d-lg-block ps-0 ps-sm-4 text-start justify-content-center ">
    //     <div className="image" style={{width:"100px",height:"100px"}}>
    //       <img src={mission} alt="" />
    //     </div>
    //     <h2 className="Heading-1">OUR MISSION</h2>
    //     <br />
    //     <div className=" Text-1 p-2 " style={{ textAlign: "justify" }}>
    //       <p>
    //         Atraski Fashion strives to revolutionize the modelling industry.
    //       </p>
    //       <p>
    //         We sculpt raw talent and give their passion a shape, empower them
    //         with opportunities and valuable experiences ensuring an impactful
    //         commencement of the models into the fashion industry.
    //       </p>
    //     </div>
    //   </div>

    //   <div
    //     className="col-12 col-lg-5 py-3 py-lg-0 py-5"
    //     style={{ textAlign: "justify" }}
    //   >
    //     <text className="Heading-1">OUR VISON</text>
    //     <br />
    //     <div className=" Text-1 p-2 ">
    //       <p>
    //         We aim at building a comforting space where everyone can aspire to
    //         become a model even if they don’t fit the fashion industry
    //         norm/standard. We believe in providing hands-on experience to our
    //         models and help them to build a credible portfolio to set up a
    //         network/ community of young and talented student models, artists,
    //         photographers who find it tough to enter the industry
    //       </p>
    //     </div>
    //   </div>
    //   <div
    //     className="col-11  d-block d-lg-none ps-0 ps-sm-4 "
    //     style={{ textAlign: "justify" }}
    //   >
    //     <text className="Heading-1">OUR MISSION</text>
    //     <br />
    //     <div className=" Text-1 py-3 ">
    //       <p>
    //         Atraski Fashion strives to revolutionize the modelling industry.
    //       </p>
    //       <p>
    //         We sculpt raw talent and give their passion a shape, empower them
    //         with opportunities and valuable experiences ensuring an impactful
    //         commencement of the models into the fashion industry.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="container-fluid d-flex justify-content-center">
      <div className=" row col-12">
        <div className="col-6 p-4">
          <div
            className="row justify-content-center text-center text-align-justify my-3"
            style={{ height: "150px", width: "200px" }}
          >
            <img
              src={mission}
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="row">
            <h2 className="Heading-1" style={{ color: "pink" }}>
              OUR MISSION
            </h2>
            <div className=" Text-1 p-2 " style={{ textAlign: "justify" }}>
              <p>
                Atraski Fashion strives to revolutionize the modelling industry.
              </p>

              <p>
                We sculpt raw talent and give their passion a shape, empower
                them with opportunities and valuable experiences ensuring an
                impactful commencement of the models into the fashion industry.
              </p>
            </div>
          </div>
        </div>
        <div className="col-6 p-4">
          <div
            className="row justify-content-center text-center text-align-justify my-3"
            style={{ height: "150px", width: "200px" }}
          >
            <img
              src={vission}
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="row">
            <h2 className="Heading-1" style={{ color: "pink" }}>
              OUR VISION
            </h2>
            <div className=" Text-1 p-2 " style={{ textAlign: "justify" }}>
              <p>
                Atraski Fashion strives to revolutionize the modelling industry.
              </p>

              <p>
                We sculpt raw talent and give their passion a shape, empower
                them with opportunities and valuable experiences ensuring an
                impactful commencement of the models into the fashion industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
