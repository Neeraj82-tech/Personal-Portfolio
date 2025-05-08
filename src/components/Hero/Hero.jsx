import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  const title = "Hi, I'm Neeraj";
  const description = "I'm a Full-Stack Developer with 2+ year of experience using React and NodeJS. Reach out if you like to learn more!";

  const handleResumeClick = () => {
    // const url = '../../../assets/Neeraj-Saini-Developer-Resume.pdf';
    const url = '..//..//..//assets//Neeraj-Saini-Developer-Re.pdf'

    // Open the file in a new tab
    window.open(url, '_blank');

    // Trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Neeraj-Saini-Developer-Resume.pdf';
    link.click();
  };

  return (
    <section className={styles.container}>
      <div className={styles.stars}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
      <div className={styles.stars4}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.wavingHand}><img src={getImageUrl('hero/wave.png')} alt="Waving hand" /></span>
          {title.split('').map((char, index) => (
            <span key={index} className={styles.splitChar}>
              {char}
            </span>
          ))}
        </h1>
        <p className={styles.description}>
          {description.split('').map((char, index) => (
            <span key={index} className={styles.splitChar}>
              {char}
            </span>
          ))}
        </p>
        <a href="mailto:nrjsaini82@gmail.com" className={styles.contactBtn}>
          Contact Me
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" ry="37px" />
          </svg>
        </a>
        <button onClick={handleResumeClick} className={styles.resumeBtn}>
          View Resume
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" ry="37px" />
          </svg>
        </button>
      </div>
      <img
        src={getImageUrl('hero/PassPort.jpeg')}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

