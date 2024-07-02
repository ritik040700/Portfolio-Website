import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";

const experience = {
  title: "Experience",
  description:
    "I have worked with evolving startup as a Software Developer. I love organizing events and that is why I am also involved with many open-source communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Companies",
      experiences: [
        {
          title: "MERN Full Stack Developer",
          company: "Todquest",
          company_url: "https://www.renewbuy.com/",
          logo_path: "todquest.png",
          duration: "September 2023 - June 2024",
          location: "Noida",
          description:
            "Designed and implemented user interfaces using React.js, ensuring a visually appealing and intuitive user experience. Developed and integrated APIs using Node.js and Express.js, along with MongoDB, contributing to seamless communication between the front-end and back-end systems.",
        },
        {
          title: "Software Engineer",
          company: "Renewbuy",
          company_url: "https://www.renewbuy.com/",
          logo_path: "legato_logo.png",
          duration: "October 2022 - July 2023",
          location: "Gurgaon",
          description:
            "Worked on multiple projects, including designing and implementing APIs that allow the Policy frontend system to communicate with the backend systems, providing access to inventory information and enabling the processing of customer details. Designed and maintained the database systems that store and manage the customer's and insurer information.",
        },
      ],
    },
  ],
};

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1 className="experience-heading-text" style={{ color: theme.text }}>
                  {experience.title}
                </h1>
                <h3 className="experience-heading-sub-text" style={{ color: theme.text }}>
                  {experience.subtitle}
                </h3>
                <p className="experience-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                  {experience.description}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <ExperienceAccordion sections={experience.sections} theme={theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
