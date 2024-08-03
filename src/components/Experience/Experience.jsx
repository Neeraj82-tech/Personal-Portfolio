
import React, { useState } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const [skillsOpen, setSkillsOpen] = useState(true);

  const toggleSkills = () => {
    setSkillsOpen(!skillsOpen);
  };

  const getSkillPosition = (index, total) => {
    const angle = (index / total) * (2 * Math.PI);
    let radius = 190;

    if (window.innerWidth <= 830) {
      radius = 135;
    }
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { transform: `translate(${x}px, ${y}px)` };
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skillsContainer}>
          <div className={styles.skillsWrapper}>
            <div className={styles.skills} data-open={skillsOpen}>
              {skills.map((skill, id) => {
                const positionStyle = getSkillPosition(id, skills.length);
                return (
                  <div key={id} className={styles.skill} style={positionStyle}>
                    <div className={styles.skillImageContainer}>
                      <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                    </div>
                    <p>{skill.title}</p>
                  </div>
                );
              })}
            </div>
            <button className={styles.toggleButton} onClick={toggleSkills}>
              {skillsOpen ? "Stop" : "Skills"}
            </button>
          </div>
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, expId) => {
                      return <li key={expId}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
