import { lazy, Suspense } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageSEO from "../components/PageSEO";
import { Intro } from "./resume/Intro";
import { AboutMe } from "./resume/AboutMe";
import { resumeData } from "../constants/index.js";
import {
  PAGE_SEO,
  getPersonJsonLd,
  getResumePageJsonLd,
} from "../constants/seo";

const Experience = lazy(() =>
  import("./resume/Experience").then((m) => ({ default: m.Experience }))
);
const Projects = lazy(() =>
  import("./resume/Projects").then((m) => ({ default: m.Projects }))
);
const Skills = lazy(() =>
  import("./resume/Skills").then((m) => ({ default: m.Skills }))
);
const Education = lazy(() =>
  import("./resume/Education").then((m) => ({ default: m.Education }))
);
const Achievements = lazy(() =>
  import("./resume/Achievements").then((m) => ({ default: m.Achievements }))
);
const Contact = lazy(() =>
  import("./resume/Contact").then((m) => ({ default: m.Contact }))
);

const SectionSkeleton = () => (
  <div className="py-10 space-y-3 animate-pulse" aria-hidden>
    <div className="h-4 w-28 bg-white/10 rounded" />
    <div className="h-3 w-full bg-white/5 rounded" />
    <div className="h-3 w-5/6 bg-white/5 rounded" />
  </div>
);

const Resume = () => {
  return (
    <>
      <PageSEO
        {...PAGE_SEO.resume}
        jsonLd={[getPersonJsonLd(), getResumePageJsonLd()]}
      />
      <main className="min-h-screen relative">
        <Navbar />

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-white relative z-10">
          <Intro data={resumeData.HEADER} />
          <AboutMe data={resumeData.ABOUT_ME} />
          <Suspense fallback={<SectionSkeleton />}>
            <Experience data={resumeData.EXPERIENCE} />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Projects data={resumeData.PROJECTS} />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Skills data={resumeData.SKILLS} />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Education data={resumeData.EDUCATION} />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Achievements data={resumeData.ACHIEVEMENTS} />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Contact data={resumeData.HEADER} />
          </Suspense>
        </article>

        <Footer />
      </main>
    </>
  );
};

export default Resume;
