import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
    DiNodejs,
} from "react-icons/di";
import { FaBootstrap, FaCss3Alt, FaDatabase, FaHtml5 } from "react-icons/fa";
import { SiPhp, SiSolidity } from "react-icons/si";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <CgCPlusPlus />
            </Col>{" "}
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
            </Col>{" "}
            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
            </Col>{" "}
            <Col xs={4} md={2} className="tech-icons">
                <FaHtml5 />
            </Col>{" "}
            <Col xs={4} md={2} className="tech-icons">
                {" "}
                <FaCss3Alt />{" "}
            </Col>{" "}
            <Col xs={4} md={2} className="tech-icons">
                {" "}
                <FaBootstrap />{" "}
            </Col>{" "}
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>{" "}
            <Col xs={4} md={2} className="tech-icons">
                {" "}
                <DiNodejs />{" "}
            </Col>{" "}
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb />
            </Col>{" "}
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>{" "}
            <Col xs={4} md={2} className="tech-icons">
                <SiPhp />
            </Col>{" "}
            <Col xs={4} md={2} className="tech-icons">
                <FaDatabase />
            </Col>{" "}
            <Col xs={4} md={2} className="tech-icons">
                <SiSolidity />
            </Col>{" "}
            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
            </Col>{" "}
        </Row>
    );
}

export default Techstack;
