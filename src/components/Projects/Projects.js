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
import ZB from "../../Assets/Projects/abc.png"
import HBD from "../../Assets/Projects/HBD.png"
import Masha from "../../Assets/Projects/Masha.jpg"
import SiteApp from "../../Assets/Projects/SiteApp.webp"
import EMS from "../../Assets/Projects/EMS.png"
import ATT from '../../Assets/Projects/ATT.png'
import Catstronaut from "../../Assets/Projects/GraphQL.png"


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
              imgPath={HBD}
              isBlog={false}
              title="Hotels By Day"
              description="Contributed significantly to the redevelopment of a hotel booking application for both Android and iOS platforms, focusing on UI/UX enhancements and seamless integration of essential features. This project involved a comprehensive redesign, API integration, and the incorporation of a webview for a seamless transition to the web within the app."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ZB}
              isBlog={false}
              title="Zindabhag"
              description="Zindabhag is a dynamic web application with a diverse range of functionalities designed to elevate user experience. The responsive design ensures seamless navigation on both web and mobile platforms. Key features include authentication, assessment capabilities, resume uploading with automatic score calculation, and an engaging landing page with captivating animations."
              demoLink="https://zindabhag.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Masha}
              isBlog={false}
              title="Masha & The Bear App"
              description="Masha and the Bear web app with responsive design for seamless use on web and mobile. Features include authentication,  personalized video greetings, Stripe payments, SendGrid emails, API integration, and immersive audio."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SiteApp}
              isBlog={false}
              title="Site App"
              description="Engaged in the frontend development of a tablet-based application using React Native, this project showcases a seamless and user-friendly interface catering to various functionalities. The focus lies on providing an optimal experience for users interacting with the app on tablet devices."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EMS}
              isBlog={false}
              title="Event Management System"
              description="I developed an Event Management Web Application that enables users to seamlessly create, manage, and attend events. The application implements secure user registration and login processes, event creation with image uploads, event editing and deletion functionality, and a comprehensive event display page. The system also includes features like waiting list management and attendee tracking."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ATT}
              isBlog={false}
              title="After The Tone"
              description="After The Tone is a unique project that offers a vintage twist to memory preservation. Users choose a personalized phone, set up a voicemail guestbook at an event location, and invite friends and family to leave heartfelt voicemail messages. The project culminates with users returning the phone and receiving a digital download of the recorded memories. An optional vinyl record adds a nostalgic touch, making it a charming and tangible keepsake for reliving special moments over time."
            demoLink="https://www.afterthetone.co/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Catstronaut}
              isBlog={false}
              title="Catstronaut Project"
              description="The project, built on Apollo GraphQL, provides a comprehensive exploration of GraphQL and Apollo basics. It covers essential elements such as understanding the GraphQL and Apollo ecosystem, designing a schema, and implementing an Apollo Server connected to a REST data source. The project extends to the practical application in a React app, incorporating features like resolvers, arguments, mutations, and best practices for shaping mutation responses and handling errors. Notably, the useMutation hook is employed to send mutations to the server. The practical application is exemplified through a cat app, where cards display detailed pages upon clicking, showcasing effective use of the useMutation hook for creating dynamic page views."
            demoLink="https://lift-off-client-demo.netlify.app/"
            />
          </Col>
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
              demoLink="https://react-text-util.netlify.app/"
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
