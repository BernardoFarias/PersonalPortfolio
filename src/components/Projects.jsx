import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const project1 = 
    {
      title: "E-Commerce",
      description: "Front-end design & Development",
      imgUrl: projImg1,
    };
    const project2 = 
    {
      title: "Single-page application",
      description: "Design & Development",
      imgUrl: projImg2,
    };
    const project3 = 
    {
      title: "Single-page application",
      description: "Design & Development",
      imgUrl: projImg3,
    };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">The Rookies</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Foodify</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Dogs</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="justify-content-md-center">
                              <ProjectCard
                                {...project1}
                                />
                      </Row>
                      <p>Participated in an team project to develop an e-commerce site using agile methodologies (SCRUM).
                      Developed features such as user authentication,
                      product searching, result sorting and filtering,
                      payment gateway, cart management, and optional
                      reviewing.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row className="justify-content-md-center">
                              <ProjectCard
                                {...project2}
                                />
                      </Row>
                      <p>🍪 This web app helps you find recipes based on the ingredients you have, sort them by difficulty or cook time, and even add your own recipes! <br/>
                      🍕 I used a lot of different technologies to create this app, including JavaScript, NodeJS, React, Redux, and Material Design. <br/>
                      🍟 Include some logic, like filtering, search, sort, delete recipes, add to favorites recipes, and create new recipes.
                      </p>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row className="justify-content-md-center">
                              <ProjectCard
                                {...project3}
                                />
                      </Row>
                      <p>Designed and developed a SPA that receives data
                      from an API through a Back End created with Node.JS
                      using Express. Database in PostgreSQL and
                      Sequelize. Frontend with React and CSS.</p>
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