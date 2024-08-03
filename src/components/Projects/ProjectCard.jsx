import React from 'react';
import styles from "./ProjectCard.module.css"
import { getImageUrl} from '../../utils';



export const ProjectCard = ({
    project: { title, imageSrc, imageSrcMobile, description, skills, demo, source, view}
}) => {
  return (
    <div className={styles.container}>
        <img src={window.innerWidth <=500 ? getImageUrl(imageSrcMobile) : getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
            {skills.map((skill, id) => {
                return (
                <li key={id} className={styles.skill}>{skill} </li>
                );
            })}
        </ul>
        <div className={styles.links}>
            <a href={view} className={styles.link} target="_blank" >Have a look 🕵️‍♀️</a>
        </div>
    </div>
  );
};
