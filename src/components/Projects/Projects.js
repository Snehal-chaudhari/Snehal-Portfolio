import learnbay from "../../Assets/Projects/Learnbay.jpeg"
import tysco from "../../Assets/Projects/tysco.jpeg"
import Vagaro from "../../Assets/Projects/Vagaro.jpeg"
import Komela from "../../Assets/Projects/Komela.jpeg"
import spelogic from "../../Assets/Projects/spelogic.png"
import clinicalapp from "../../Assets/Projects/clinicalapp.png"
import rsca1 from "../../Assets/Projects/rsca-1.jpeg"
import rsca2 from "../../Assets/Projects/rsca-2.jpeg"
import rsca3 from "../../Assets/Projects/rsca-3.jpeg"
import rsca4 from "../../Assets/Projects/rsca-4.jpeg"
import rsca5 from "../../Assets/Projects/rsca-5.jpeg"
import rsca6 from "../../Assets/Projects/rsca-6.jpeg"
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some production-level applications I have worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clinicalapp}
              isBlog={false}
              title="Clinical Health App (Hospital Management)"
              description="Led end-to-end frontend development of a role-based Hospital Management system built using React Native. Implemented modules including appointment booking, patient records, prescriptions, payments, and medical history. Integrated secure PHP-based REST APIs."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Vagaro}
              isBlog={false}
              title="Vagaro Products"
              description="Developed scalable and reusable UI components using React and Storybook for a Beauty & Fitness platform used across US, Germany, and Canada. Integrated REST APIs and resolved complex data-mapping challenges to improve performance and user experience."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Komela}
              isBlog={false}
              title="Komela – Transportation Dashboard"
              description="Built and maintained a complete admin dashboard for a Germany-based transportation service platform using React.js. Focused on data visualization, performance optimization, and seamless state-driven architecture."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={learnbay}
              isBlog={false}
              title="LearnBay – Learning Platform"
              description="Designed and developed a dynamic learning management dashboard using React.js. Implemented course management, user interaction flows, and API integrations for smooth user experience."
              demoLink="https://www.learnbay.co/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tysco}
              isBlog={false}
              title="Tysco – Cybersecurity Website"
              description="Developed a modern, responsive corporate website for a cybersecurity service provider using React.js and PHP. Designed and implemented the complete dashboard architecture."
              demoLink="https://tysco.co/en"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spelogic}
              isBlog={false}
              title="Spelogic – Hospital Staff System"
              description="Built a hospital management system tailored for internal hospital staff using React.js and PHP. Focused on structured UI architecture, API customization, and secure data handling."
            />
          </Col>
          <Col md={12}>
            <h1 className="project-heading">
              Personal <strong className="purple">Projects</strong>
            </h1>
            <p style={{ color: "white" }}>
              A self-initiated project built to demonstrate my frontend development skills and UI architecture.
            </p>
          </Col>

          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={rsca1}
              isBlog={false}
              title="RSCA School Website"
              description="Developed a fully responsive school management website for RSCA School. The platform includes admission inquiry forms, academic details, faculty information, event management, gallery section, and contact modules. Built using React.js with reusable components and clean UI architecture. Focused on performance optimization and responsive design across devices."
              demoLink="https://github.com/Sneha-Zambre/RSCA-School"
            />
          </Col>

          <Col md={12} style={{ marginTop: "40px" }}>
            <h3 className="purple" style={{ textAlign: "center" }}>
              Project Screenshots
            </h3>
          </Col>

          <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
            <Col md={4} className="project-card">
              <img src={rsca2} alt="RSCA Screenshot 1" className="img-fluid rounded shadow" />
            </Col>

            <Col md={4} className="project-card">
              <img src={rsca3} alt="RSCA Screenshot 2" className="img-fluid rounded shadow" />
            </Col>

            <Col md={4} className="project-card">
              <img src={rsca4} alt="RSCA Screenshot 3" className="img-fluid rounded shadow" />
            </Col>

            <Col md={4} className="project-card">
              <img src={rsca5} alt="RSCA Screenshot 4" className="img-fluid rounded shadow" />
            </Col>

            <Col md={4} className="project-card">
              <img src={rsca6} alt="RSCA Screenshot 5" className="img-fluid rounded shadow" />
            </Col>
          </Row>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

