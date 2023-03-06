import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">M Babar Waseem </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />I am doing BSCS From <span className="purple">SMIU</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
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
