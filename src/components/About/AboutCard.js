import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi everyone, I'm{" "}
                        <span className="purple"> Paras Chawla </span>
                        from{" "}
                        <span className="purple">
                            {" "}
                            Rudrapur, Uttarakhand, India.{" "}
                        </span>{" "}
                        <br /> Currently, I am a final year student pursuing
                        Bachelor of Technology in Computer Science with
                        specialization in Blockchain Technology from VIT
                        University (Vellore). <br /> I am an aspiring engineer
                        interested in Web Development and Design. Primarily, I
                        am a Front End Developer. <br />
                        <br />
                        In my spare time, I love to spend my time in activities
                        like:
                    </p>{" "}
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Watching Movies{" "}
                        </li>{" "}
                        <li className="about-activity">
                            <ImPointRight /> Sports like Volleyball and
                            Badminton{" "}
                        </li>{" "}
                        <li className="about-activity">
                            <ImPointRight /> Travelling{" "}
                        </li>{" "}
                    </ul>{" "}
                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Strive to build things that make a difference!"{" "}
                    </p>{" "}
                    <footer className="blockquote-footer"> Paras </footer>{" "}
                </blockquote>{" "}
            </Card.Body>{" "}
        </Card>
    );
}

export default AboutCard;
