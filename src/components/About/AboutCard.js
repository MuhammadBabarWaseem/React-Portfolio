import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings!, I am <span className="purple">M Babar Waseem </span>
            a passionate individual hailing from <span className="purple"> Karachi, Pakistan.</span> My journey in the realm of <span className="purple">technology</span> is fueled by curiosity and a drive for excellence.
            <br />
            <br />
            Beyond the world of <span className="purple"> coding</span>, I find joy in engaging with a diverse array of activities that enrich my life and broaden my perspectives.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building Tech To Elevate People!"{" "}
          </p>
          <footer className="blockquote-footer">M Babar Waseem</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
