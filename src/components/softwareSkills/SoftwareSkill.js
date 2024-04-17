import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skill.skillName}
              >
                {skill.svgComponent ? (
                  <skill.svgComponent
                    className="bw-filter"
                    style={{width: "2.8rem", height: "2.8rem"}}
                  />
                ) : (
                  <i className={skill.fontAwesomeClassname}></i>
                )}
                <p>{skill.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
