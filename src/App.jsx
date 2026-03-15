import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import LoaderWrapper from "./components/LoaderWrapper";
import TargetCursor from "./components/ui/target-cursor";
import NotFound from "./sections/NotFound";

function App() {
  return (
    <Router>
      <LoaderWrapper>
        <TargetCursor />
        <Routes>
          <Route
            path="/"
            element={
              <main className="max-w-7xl mx-auto">
                <Navbar />
                <Hero />
                <About />
                <Projects />
                <Contact />
                <Footer />
              </main>
            }
          />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LoaderWrapper>
    </Router>
  );
}

export default App;
