import React from 'react'
import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
                <a href="mailto:nrjsaini82@gmail.com"> nrjsaini82@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon" />
                <a href="https://linkedin.com/in/neeraj-saini-4a72611b2"> linkedin.com/in/neeraj-saini-4a72611b2</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/telephone.png")} alt="telephone icon" />
                <a href="tel: +918005811727"> +91 8005811727</a>
            </li>
        </ul>
    </footer>
  );
};
