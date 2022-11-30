import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";

const Programs = () => {
  return (
    <div className="programs" id="programs">
      {/* header */}
      <div className="programs-header">
        <span className="stroke-text">Explor our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      {/* cards */}
      <div className="programs-cards">
        {programsData.map((program, index) => {
          return (
            <div className="program" key={index}>
              {program.image}
              <span className="program-heading">{program.heading}</span>
              <span className="program-details">{program.details}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
