// import React from 'react';
// import "./../App.css";

// const Services = () => {
//     const card = {
//       backgroundColor: "rgb(255, 164, 179)",
//       padding: "30px",
//       //   paddingBottom: "30px",
//       //   paddingLeft: "20px",
//       //   paddingRight: "20px",
//       borderRadius: "15px",
//       margin: "2rem",
//       boxShadow: " 0 4px 8px 0 white, 0 6px 20px 0 pink",
//       color: "black",
//     };

//   return (
//     <div className="container">
//       <h1 className="text-center my-4 Heading-1">OUR SERVICES</h1>
//       <div className="row col-12 justify-content-center my-2 text-center ">
//         <div className="col-12  col-md-6 col-lg-3 my-1 " style={card}>
//           <h5 style={{ fontWeight: "bolder", alignItems: "center",color:"black" }}>
//             PORTFOLIO BUILDING + MANAGEMENT & MARKETING
//           </h5>
//         </div>
//         <div className="col-12  col-md-6 col-lg-3 my-1 " style={card}>
//           <h5 style={{ fontWeight: "bolder", alignItems: "center" }}>
//             {" "}
//             PROFESSIONALS
//           </h5>
//         </div>
//         <div className="col-12  col-md-6 col-lg-3 my-1 " style={card}>
//           <h5 style={{ fontWeight: "bolder" }}>
//             COLLABORATION WITH INDUSTRIES
//           </h5>
//         </div>
//       </div>
//       <div className="row col-12 justify-content-center my-5">
//         <div className="col-12  col-md-6 col-lg-3 my-1 " style={card}>
//           <h5 style={{ fontWeight: "bolder" }}>MODEL SCOUTING</h5>
//         </div>
//         <div className="col-12  col-md-6 col-lg-3 my-1  " style={card}>
//           <h5 style={{ fontWeight: "bolder" }}>TEST SHOOTS</h5>
//         </div>
//         <div className="col-12  col-md-6 col-lg-3 my-1 " style={card}>
//           <h5 style={{ fontWeight: "bolder" }}>MODEL TRAINING</h5>
//         </div>
//       </div>
//     </div>

//     // <div className="row d-flex justify-content-between m-0 py-3 py-md-5 px-5">
//     //   <text className="Heading-1 text-center col-12 pt-2 pb-5">
//     //     Our Core Values
//     //   </text>
//     //   <div
//     //     className="col-12  col-md-6 col-lg-4 my-1 py-2 py-md-1"

//     //   >
//     //     <div
//     //       className="row d-flex justify-content-center align-items-start shadow m-auto p-2 py-5 "

//     //     >

//     //       <text className="Heading-2 text-center" >
//     //       hello
//     //       </text>
//     //       <text className="Text-1 text-center" >
//     //        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nostrum.
//     //       </text>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// }

// export default Services

import React from "react";
// import OfferCard from "./Card/Offercard";
// import { WhatWeOffer } from "./config";
import OfferCard from "./serviceCard";
import { WhatWeOffer } from "../config";
// import color from "../../constant";
// import OfferCard from "../../components/Card/OfferCard";
// import { WhatWeOffer } from "../../config";

function Opportunities() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="container row col-12 d-flex justify-content-center text-center my-5 py-3 py-md-5 px-5 mx-0 offerbg">
          <h1 className="Heading-1 text-center col-12 py-5">
            Runway Shows Opportinities
          </h1>
          <div className="row text-center">
            <p>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              harum fuga aspernatur veritatis assumenda reprehenderit minima,
              dolor unde repellendus tenetur error doloribus impedit nobis
              laboriosam! Voluptates placeat impedit magni explicabo, assumenda
              dolorum dolore nemo quas beatae expedita sint, corporis ipsa ullam
              dignissimos ea animi? Voluptas consequuntur a exercitationem
              accusamus perspiciatis.
                      </p>
                      <br />
            <p>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              harum fuga aspernatur veritatis assumenda reprehenderit minima,
              dolor unde repellendus tenetur error doloribus impedit nobis
              laboriosam! Voluptates placeat impedit magni explicabo, assumenda
              dolorum dolore nemo quas beatae expedita sint, corporis ipsa ullam
              dignissimos ea animi? Voluptas consequuntur a exercitationem
              accusamus perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, accusantium.
            </p> 
          </div>
        </div>
      </div>
    </>
  );
}

export default Opportunities;
