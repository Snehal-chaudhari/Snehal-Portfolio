import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Snehal Chaudhari</span> 
            from <span className="purple">Pune, India</span>.
            <br />
            <br />
            I am a <b className="purple">Frontend Developer with 3+ years of experience</b> 
            building scalable and production-ready web and mobile applications.
            <br />
            <br />
            I specialize in <b className="purple">React.js, React Native, Redux, and modern JavaScript</b>, 
            with strong expertise in reusable component architecture, API integration, 
            and performance optimization.
            <br />
            <br />
            I have worked on domain-driven applications including 
            Hospital Management Systems, Beauty & Fitness platforms, 
            Transportation dashboards, and Learning platforms.
            <br />
            <br />
            I am passionate about writing <b className="purple">clean, maintainable code</b>, 
            designing responsive UI systems, and delivering seamless user experiences.
            <br />
            <br />
            Apart from coding, here are a few things I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new frontend technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving real-world UI/UX challenges
            </li>
            <li className="about-activity">
              <ImPointRight /> Continuous learning & self-improvement
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “Building scalable products with clean code and great user experience.”
          </p>

          <footer className="blockquote-footer">Snehal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
