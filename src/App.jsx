import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import PageSEO from "./components/PageSEO";
import LandingLoader from "./components/LandingLoader";
import DeferredTargetCursor from "./components/DeferredTargetCursor";
import {
  PAGE_SEO,
  getPersonJsonLd,
  getWebsiteJsonLd,
} from "./constants/seo";

const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));
const Resume = lazy(() => import("./sections/Resume"));
const NotFound = lazy(() => import("./sections/NotFound"));

const homeJsonLd = [getPersonJsonLd(), getWebsiteJsonLd()];

const homePreload = (
  <>
    <Navbar />
    <Hero />
  </>
);

function App() {
  return (
    <Router>
      <DeferredTargetCursor />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageSEO {...PAGE_SEO.home} jsonLd={homeJsonLd} />
              <LandingLoader preload={homePreload}>
                <Suspense fallback={null}>
                  <About />
                </Suspense>
                <Suspense fallback={null}>
                  <Projects />
                </Suspense>
                <Suspense fallback={null}>
                  <Contact />
                </Suspense>
                <Footer />
              </LandingLoader>
            </>
          }
        />
        <Route
          path="/resume"
          element={
            <Suspense fallback={null}>
              <Resume />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={null}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
