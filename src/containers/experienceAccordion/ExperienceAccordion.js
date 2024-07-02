import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        {this.props.sections.map((section) => {
          return (
            <div key={section.title}>
              <h2 className="section-title" style={{ color: theme.text }}>
                {section.title}
              </h2>
              {section.experiences.map((experience, index) => {
                return (
                  <ExperienceCard
                    key={index}
                    index={index}
                    totalCards={section.experiences.length}
                    experience={experience}
                    theme={theme}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExperienceAccordion;
