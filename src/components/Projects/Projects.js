import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import odyssey from "../../Assets/Projects/odyssey.png";
import school from "../../Assets/Projects/school-erp.png";
import chotaDhobi from "../../Assets/Projects/chotaDhobi.png";
import studentList from "../../Assets/Projects/studentList.png";
import dashboard from "../../Assets/Projects/dashboard.png";
import keeper from "../../Assets/Projects/keeper.png";
import todo from "../../Assets/Projects/todo.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple"> Works </strong>{" "}
                </h1>{" "}
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.{" "}
                </p>{" "}
                <Row
                    style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={odyssey}
                            title="Odyssey"
                            description="A MERN based Learning Management System designed to empower learners with expert-led courses, allowing them to master new skills effectively. Odyssey aims to provide learners with a diverse range of courses led by industry experts, enabling them to excel in their learning endeavors. Not only can users access an extensive library of courses, but they also have the unique ability to create and add their own courses."
                            ghLink="https://github.com/Paraschawla21/LMS_Odyssey"
                            demoLink="https://odyssey-pt6n.onrender.com/"
                        />
                    </Col>{" "}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={school}
                            title="School ERP"
                            description="A simple React based application which basically is a child admission form. Filling all the details about the child and his / her parents and some other details, all the form data will be posted to the backend server through an Application Programming Interface (API)."
                            ghLink="https://github.com/Paraschawla21/school_erp"
                            demoLink="https://school-erp-ruddy.vercel.app/"
                        />
                    </Col>{" "}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={chotaDhobi}
                            title="Chota Dhobi"
                            description="Designed and developed a Laundry Solutions web application named Chota Dhobi in which we can deposit our clothes for washing. HTML, CSS and Bootstrap was used for designing the website, Javascript for the functioning and validation, and PHP for handling the Data and sending the data to the backend. Also, PHP mailer is used, which instantly sends a mail whenever you register."
                            ghLink="https://github.com/Paraschawla21/chota_dhobi"
                        />
                    </Col>{" "}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={studentList}
                            title="Demo Project to learn MERN"
                            description="A basic MERN Stack Web application. By entering the student details we can store them at the localhost backend server by using a post request. Moreover, displayed the stored student records using an API by a get request. Also, we can edit the details (put request) and delete the details (delete request)."
                            ghLink="https://github.com/Paraschawla21/MERNStack_StudentList_Project"
                            demoLink="https://mern-stack-student-list-project.vercel.app/"
                        />
                    </Col>{" "}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={dashboard}
                            title="Covid Dashboard"
                            description="A Covid Dashboard website built with React.js. All the covid data which were present online have been integrated through an API and have been displayed in a table format. Also, React charts have been used."
                            ghLink="https://github.com/Paraschawla21/covid_dashboard"
                            demoLink="https://school-erp-ruddy.vercel.app/"
                        />
                    </Col>{" "}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={keeper}
                            title="Keeper App"
                            description="A basic React application in which we can write about any important stuff or can use it as a daily diary also. Just simply write the title of the note and the note itself and add it. Moreover, we can delete the note using the delete button."
                            ghLink="https://github.com/Paraschawla21/react-project-keeper-app"
                            demoLink="https://keeper-app-murex.vercel.app/"
                        />
                    </Col>{" "}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={todo}
                            title="To-Do List"
                            description="A basic To-Do List Application designed and developed using React.js. We can simply add the list of items which we have to do and just simply cut them when they are done."
                            ghLink="https://github.com/Paraschawla21/react-project-to-do-list-app-"
                            demoLink="https://react-project-to-do-list-app.vercel.app/"
                        />
                    </Col>{" "}
                </Row>{" "}
            </Container>{" "}
        </Container>
    );
}

export default Projects;
