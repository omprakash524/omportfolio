import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import  Contactus  from "./components/Contactme/Contactus";
import Footer from "./components/Footer/footer";
import Qualifications from "./components/Qualifications/Qualifications";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Qualifications/>
      <Contactus/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
