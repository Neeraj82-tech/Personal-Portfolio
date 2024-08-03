// import styles from "./App.module.css";
// import { Navbar } from "./components/Navbar/Navbar";
// import { Hero } from "./components/Hero/Hero";
// import { About } from "./components/About/About"
// import { Experience } from "./components/Experience/Experience";
// import { Projects } from "./components/Projects/Projects";
// import { Contact } from "./components/Contact/Contact";

// function App() {
//   return <div className={styles.App}>
//     <Navbar />
//     <Hero />
//     <About />
//     <Experience />
//     <Projects />
//     <Contact />
//   </div>;
// }

// export default App;


import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import Preloader from './components/Preloader/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Reduced loading time from 2000ms to 1000ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.App}>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
