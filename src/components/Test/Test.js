import React from "react";
import "./Test.css";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { Container, Card } from "react-bootstrap";



import AOS from "aos";
import "aos/dist/aos.css";
import {
  model1,
  model2,
  model3,
  model4,
  model5,
  model6,
  model7,
} from "../../assets";
AOS.init();

export default function Test() {
  return (
    <div className="container my-5 py-5">
      <h1 className="team-heading" style={{ color: "white" }}>
        {" "}
        Our Models
      </h1>

      <div className="scrollable-card-grid" style={{ color: "black" }}>
        <div className="scrollable-card">
          <div className="card-header">
            <div className="team-card text-center">
              <img className="team-img" src={model1} alt="member1" />
              {/* <div className="team-role">CEO, CTO</div> */}
              <div className="team-name my-4">Shashank Singh </div>
              {/* <div className="team-contacts">
                <a href="https://www.faceboook.com" target="_blank">
                  <BsFacebook className="team-icons" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shashank-singh-088426204"
                  target="_blank"
                >
                  <BsLinkedin className="team-icons" />
                </a>
                <a href="https://github.com" target="_blank">
                  <BsGithub className="team-icons" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="scrollable-card">
          <div className="card-header">
            <div className="team-card text-center">
              <img className="team-img" src={model2} alt="member1" />
              {/* <div className="team-role">CEO, CTO</div> */}
              <div className="team-name my-4">Shashank Singh </div>
              {/* <div className="team-contacts">
                <a href="https://www.faceboook.com" target="_blank">
                  <BsFacebook className="team-icons" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shashank-singh-088426204"
                  target="_blank"
                >
                  <BsLinkedin className="team-icons" />
                </a>
                <a href="https://github.com" target="_blank">
                  <BsGithub className="team-icons" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="scrollable-card">
          <div className="card-header">
            <div className="team-card text-center">
              <img className="team-img" src={model3} alt="member1" />
              {/* <div className="team-role">CEO, CTO</div> */}
              <div className="team-name my-4">Shashank Singh </div>
              {/* <div className="team-contacts">
                <a href="https://www.faceboook.com" target="_blank">
                  <BsFacebook className="team-icons" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shashank-singh-088426204"
                  target="_blank"
                >
                  <BsLinkedin className="team-icons" />
                </a>
                <a href="https://github.com" target="_blank">
                  <BsGithub className="team-icons" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="scrollable-card">
          <div className="card-header">
            <div className="team-card text-center">
              <img className="team-img" src={model4} alt="member1" />
              {/* <div className="team-role">CEO, CTO</div> */}
              <div className="team-name my-4">Shashank Singh </div>
              {/* <div className="team-contacts">
                <a href="https://www.faceboook.com" target="_blank">
                  <BsFacebook className="team-icons" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shashank-singh-088426204"
                  target="_blank"
                >
                  <BsLinkedin className="team-icons" />
                </a>
                <a href="https://github.com" target="_blank">
                  <BsGithub className="team-icons" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="scrollable-card">
          <div className="card-header">
            <div className="team-card text-center">
              <img className="team-img" src={model5} alt="member1" />
              {/* <div className="team-role">CEO, CTO</div> */}
              <div className="team-name my-4">Shashank Singh </div>
              {/* <div className="team-contacts">
                <a href="https://www.faceboook.com" target="_blank">
                  <BsFacebook className="team-icons" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shashank-singh-088426204"
                  target="_blank"
                >
                  <BsLinkedin className="team-icons" />
                </a>
                <a href="https://github.com" target="_blank">
                  <BsGithub className="team-icons" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="scrollable-card">
          <div className="card-header">
            <div className="team-card text-center">
              <img className="team-img" src={model6} alt="member1" />
              {/* <div className="team-role">CEO, CTO</div> */}
              <div className="team-name my-4">Shashank Singh </div>
              {/* <div className="team-contacts">
                <a href="https://www.faceboook.com" target="_blank">
                  <BsFacebook className="team-icons" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shashank-singh-088426204"
                  target="_blank"
                >
                  <BsLinkedin className="team-icons" />
                </a>
                <a href="https://github.com" target="_blank">
                  <BsGithub className="team-icons" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="scrollable-card">
          <div className="card-header">
            <div className="team-card text-center">
              <img className="team-img" src={model7} alt="member1" />
              {/* <div className="team-role">CEO, CTO</div> */}
              <div className="team-name my-4">Shashank Singh </div>
              {/* <div className="team-contacts">
                <a href="https://www.faceboook.com" target="_blank">
                  <BsFacebook className="team-icons" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shashank-singh-088426204"
                  target="_blank"
                >
                  <BsLinkedin className="team-icons" />
                </a>
                <a href="https://github.com" target="_blank">
                  <BsGithub className="team-icons" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="scrollable-card">
          <div className="card-header">
            <div className="team-card text-center">
              <img className="team-img" src={model5} alt="member1" />
              {/* <div className="team-role">CEO, CTO</div> */}
              <div className="team-name my-4">Shashank Singh </div>
              {/* <div className="team-contacts">
                <a href="https://www.faceboook.com" target="_blank">
                  <BsFacebook className="team-icons" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shashank-singh-088426204"
                  target="_blank"
                >
                  <BsLinkedin className="team-icons" />
                </a>
                <a href="https://github.com" target="_blank">
                  <BsGithub className="team-icons" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="scrollable-card">
          <div className="card-header">
            <div className="team-card text-center">
              <img className="team-img" src={model6} alt="member1" />
              {/* <div className="team-role">CEO, CTO</div> */}
              <div className="team-name my-4">Ashly Nelyndem  </div>
              {/* <div className="team-contacts">
                <a href="https://www.faceboook.com" target="_blank">
                  <BsFacebook className="team-icons" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shashank-singh-088426204"
                  target="_blank"
                >
                  <BsLinkedin className="team-icons" />
                </a>
                <a href="https://github.com" target="_blank">
                  <BsGithub className="team-icons" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
