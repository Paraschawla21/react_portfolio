import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3> Designed and Developed by Paras Chawla </h3>{" "}
                </Col>{" "}
                <Col md="4" className="footer-copywright">
                    <h3> Copyright© {year} paras </h3>{" "}
                </Col>{" "}
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://github.com/Paraschawla21"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>{" "}
                        </li>{" "}
                        <li className="social-icons">
                            <a
                                href="https://twitter.com/Paras_chawla_21"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiOutlineTwitter />
                            </a>{" "}
                        </li>{" "}
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/paras-chawla-00a262208/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>{" "}
                        </li>{" "}
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/paras_chawla.21/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillInstagram />
                            </a>{" "}
                        </li>{" "}
                    </ul>{" "}
                </Col>{" "}
            </Row>{" "}
        </Container>
    );
}

export default Footer;
