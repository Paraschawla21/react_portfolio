import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span>{" "}
                            MYSELF{" "}
                        </h1>{" "}
                        <p className="home-about-body">
                            I fell in love with programming when I started to
                            explore the various languages that were used in Web
                            Development. <br />
                            <br /> I am fluent in classics like{" "}
                            <i>
                                <b className="purple"> C++ and React.js </b>{" "}
                            </i>{" "}
                            <br />
                            <br />
                            My field of Interest includes building new{" "}
                            <i>
                                <b className="purple">
                                    {" "}
                                    Web Technologies and Products{" "}
                                </b>{" "}
                                and also in areas related to{" "}
                                <b className="purple"> Blockchain. </b>{" "}
                            </i>{" "}
                            <br />
                            <br />
                            Whenever possible, I also integrate my passion for
                            designing and developing products with{" "}
                            <b className="purple"> React.js </b> and{" "}
                            <i>
                                <b className="purple">
                                    {" "}
                                    Modern Javascript Library and Frameworks{" "}
                                </b>{" "}
                            </i>{" "}
                            like{" "}
                            <i>
                                <b className="purple"> Express and Node.js </b>{" "}
                            </i>{" "}
                        </p>{" "}
                    </Col>{" "}
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img
                                src={myImg}
                                className="img-fluid"
                                alt="avatar"
                            />
                        </Tilt>{" "}
                    </Col>{" "}
                </Row>{" "}
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1> FIND ME ON </h1>{" "}
                        <p>
                            Feel free to{" "}
                            <span className="purple"> connect </span>with me{" "}
                        </p>{" "}
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/Paraschawla21"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>{" "}
                            </li>{" "}
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/Paras_chawla_21"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>{" "}
                            </li>{" "}
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/paras-chawla-00a262208/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>{" "}
                            </li>{" "}
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/paras_chawla.21/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>{" "}
                            </li>{" "}
                        </ul>{" "}
                    </Col>{" "}
                </Row>{" "}
            </Container>{" "}
        </Container>
    );
}
export default Home2;
