import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Passport.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    // <Container fluid className="home-about-section" id="about">
    //   <Container>
    //     <Row>
    //       <Col md={8} className="home-about-description">
    //         <h1 style={{ fontSize: "2.6em" }}>
    //           LET ME <span className="purple"> INTRODUCE </span> MYSELF
    //         </h1>
    //         <p className="home-about-body">
    //           I am a <b className="purple">Software Developer with 3+ years of experience</b>
    //           building scalable and high-performance web and mobile applications.
    //           <br />
    //           <br />
    //           I specialize in
    //           <b className="purple"> React.js, React Native, Redux, and modern JavaScript</b>,
    //           with strong expertise in designing reusable UI components and
    //           integrating REST APIs efficiently.
    //           <br />
    //           <br />
    //           I have led end-to-end frontend development for products including
    //           <b className="purple"> Hospital Management Systems, Beauty & Fitness Platforms,
    //             Transportation Dashboards, and Learning Platforms</b>.
    //           <br />
    //           <br />
    //           I focus on writing <b className="purple">clean, maintainable code</b>,
    //           building responsive interfaces, and delivering seamless user experiences
    //           across web and mobile platforms.
    //         </p>

    //       </Col>
    //       <Col md={4} className="myAvtar">
    //         <Tilt>
    //           <img src={myImg} className="img-fluid" alt="avatar" />
    //         </Tilt>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col md={12} className="home-about-social">
    //         <h1>FIND ME ON</h1>
    //         <p>
    //           Feel free to <span className="purple">connect </span>with me
    //         </p>
    //         <ul className="home-about-social-links">
    //           <li className="social-icons">
    //             <a
    //               href="https://github.com/Sneha-Zambre"
    //               target="_blank"
    //               rel="noreferrer"
    //               className="icon-colour  home-social-icons"
    //             >
    //               <AiFillGithub />
    //             </a>
    //           </li>

    //           <li className="social-icons">
    //             <a
    //               href="https://www.linkedin.com/in/snehal-chaudhari-320604171/"
    //               target="_blank"
    //               rel="noreferrer"
    //               className="icon-colour  home-social-icons"
    //             >
    //               <FaLinkedinIn />
    //             </a>
    //           </li>
    //         </ul>
    //       </Col>
    //     </Row>
    //   </Container>
    // </Container>
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a <b className="purple">Software Developer with 3+ years of experience</b>
              building scalable and high-performance web and mobile applications.
              <br /><br />
              I specialize in
              <b className="purple"> React.js, React Native, Redux, and modern JavaScript</b>,
              with strong expertise in designing reusable UI components and
              integrating REST APIs efficiently.
              <br /><br />
              I have led end-to-end frontend development for products including
              <b className="purple">
                {" "}Hospital Management Systems, Beauty & Fitness Platforms,
                Transportation Dashboards, and Learning Platforms
              </b>.
              <br /><br />
              I focus on writing <b className="purple">clean, maintainable code</b>,
              building responsive interfaces, and delivering seamless user experiences
              across web and mobile platforms.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid profile-img"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sneha-Zambre"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/snehal-chaudhari-320604171/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
