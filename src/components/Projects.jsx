import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import nextguitar from "../assets/img/nextguitar.png";
import cryptoreact from "../assets/img/cryptoreact.png";
import crmclients from "../assets/img/crmclients.png";
import guitar from "../assets/img/guitar.png";
import spendwise from "../assets/img/spendwise.png";
import vetappointments from "../assets/img/vetappointments.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const project1 = 
    {
      title: "E-Commerce",
      description: "React, Node & CSS",
      imgUrl: projImg1,
      link: "https://the-rookies.vercel.app/"
    };
  const project2 = 
    {
      title: "Foodify",
      description: "React, Node & MaterialUI",
      imgUrl: projImg2,
      link: "https://github.com/BernardoFarias/PI-food"
    };
  const project3 = 
    {
      title: "Woof!",
      description: "React, Node & CSS",
      imgUrl: projImg3,
      link: "https://github.com/BernardoFarias/PI-DOGS"
    };
  const project4 = 
    {
      title: "CRM Clients",
      description: "React, React Router DOM & TailwindCSS",
      imgUrl: crmclients,
      link: "https://github.com/BernardoFarias/crm-clients-react"
    };
  const project5 = 
    {
      title: "Vet Appointments",
      description: "React & TailwindCSS",
      imgUrl: vetappointments,
      link: "https://github.com/BernardoFarias/appointments_react_vite"
    };
    const project6 = 
    {
      title: "Crypto React",
      description: "React & Styled Components",
      imgUrl: cryptoreact,
      link: "https://github.com/BernardoFarias/CryptoReact"
    };
    const project7= 
    {
      title: "Budget Control React",
      description: "React & CSS",
      imgUrl: spendwise,
      link: "https://github.com/BernardoFarias/budget_control_react"
    };
    const project8= 
    {
      title: "Next Guitar",
      description: "NextJS & CSS",
      imgUrl: nextguitar,
      link: "https://next-guitar-nine.vercel.app"
    };
    const project9= 
    {
      title: "Remix Run",
      description: "Remix Run & CSS",
      imgUrl: guitar,
      link: "https://remix-run-project.vercel.app/"
    };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">1º</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2º</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">3º</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        <ProjectCard
                          {...project8}
                        />
                        <ProjectCard
                          {...project9}
                        />
                        <ProjectCard
                          {...project1}
                        />
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row className="justify-content-md-center">
                      <ProjectCard
                        {...project4}
                      />
                      <ProjectCard
                        {...project6}
                      />
                      <ProjectCard
                        {...project7}
                      />
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        <ProjectCard
                          {...project5}
                        />
                        <ProjectCard
                          {...project2}
                        />
                        <ProjectCard
                          {...project3}
                        />
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="colorSharp2"/>
    </section>
  )
}