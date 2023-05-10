import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TextUtil from "../../Assets/Projects/TextUtil.webp";
import TaskManagement from '../../Assets/Projects/TaskManagement.webp'
import ExpenseManagement from '../../Assets/Projects/ExpenseManagement.webp'
import UsersApp from '../../Assets/Projects/UsersApp.webp'
import NewsApp from "../../Assets/Projects/NewsApp.webp";
import serviceApp from "../../Assets/Projects/serviceApp.webp"
import LoginRegister from "../../Assets/Projects/about.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TaskManagement}
              isBlog={false}
              title="Task Management"
              description="I have created a backend for Task Management, there is a login and signup first with passport  i have used guard that uses jwt token as a security bearer, and after that user can create a task every user create its own and see only their tasks, then we can search it by title or description keywords or in task there is a status option we can find by the status as well."
              ghLink="https://github.com/MuhammadBabarWaseem/Nest-Task-Management-Udemy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ExpenseManagement}
              isBlog={false}
              title="Expense Management App"
              description="I have created a backend for Expense Management in which there is a first login and signup with passport  i have used guard that uses jwt token as a security bearer, and after that user can add their expense every user create its own and see only their expense, and there is also a endpoint that will calculate all the net and expense of the user  "
              ghLink="https://github.com/MuhammadBabarWaseem/Expense-App-Using-Nest-JS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={UsersApp}
              isBlog={false}
              title="Users App"
              description="I have created a backend for users app, in which we can create a user, update a user, and i uses sql with typeORM, CRUD, Pipes, Passport Authentication, Protected with JWT Token, and access to the protected route via JWT Token"
              ghLink="https://github.com/MuhammadBabarWaseem/User-App-Using-Nest-JS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NewsApp}
              isBlog={false}
              title="News App"
              description="I have created a frontend news app using the news api, in this frontend i have used react js with bootstrap, and in react i have used hooks, spinner for every load, and the main important thing is i have used the phenomena of infinite scroll "
              ghLink="https://github.com/MuhammadBabarWaseem/NewsApp_React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LoginRegister}
              isBlog={false}
              title="Full Stack Auth"
              description="I have created a full stack users auth app, in which React and Bulma CSS is used in frontend, and Nodejs, (JWT, Passowrd Hashing, Protected Route)  , ExpressJS, Sql is ued in Backend"
              ghLink="https://github.com/MuhammadBabarWaseem/FullStack-Auth-UserApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextUtil}
              isBlog={false}
              title="Text Util App"
              description="I have created a frontend app with react js named as text util and for the framework i have used bootstrap with a feature of dark mode, in which we can play with the text like, count the letter, words, change to uppercase, lowercase, copy text, delete extra spaces etc."
              ghLink="https://github.com/MuhammadBabarWaseem/Text-Utils-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={serviceApp}
              isBlog={false}
              title="Service Providing App"
              description="I Have created a service provider frontend web application using react js, with Simple and Animated UI"
              ghLink="https://github.com/MuhammadBabarWaseem/Service-Providing-App"
            />
          </Col>
        </Row>
         <p style={{ color: "white" }}>Rest Projects Are Available on My github</p>
      </Container>
    </Container>
  );
}

export default Projects;
