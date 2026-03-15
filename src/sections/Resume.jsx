import Navbar from "./Navbar";
import Footer from "./Footer";
import { Intro } from "./resume/Intro";
import { AboutMe } from "./resume/AboutMe";
import { Skills } from "./resume/Skills";
import { Education } from "./resume/Education";
import { Achievements } from "./resume/Achievements";
import { Experience } from "./resume/Experience";
import { Projects } from "./resume/Projects";
import { resumeData } from "../constants/index.js";
import { Contact } from "./resume/Contact";

const Resume = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-white relative z-10">
        <Intro data={resumeData.HEADER} />
        <AboutMe data={resumeData.ABOUT_ME} />
        <Experience data={resumeData.EXPERIENCE} />
        <Projects data={resumeData.PROJECTS} />
        <Skills data={resumeData.SKILLS} />
        <Education data={resumeData.EDUCATION} />
        <Achievements data={resumeData.ACHIEVEMENTS} />
        <Contact data={resumeData.HEADER} />
      </div>

      <Footer />
    </main>
  );
};

export default Resume;
