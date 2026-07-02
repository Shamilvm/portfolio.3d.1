import { lazy, Suspense } from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const MovingElement = lazy(() =>
  import("../../components/ui/moving-element").then((module) => ({
    default: module.MovingElement,
  }))
);

const StaticAction = ({ children, className = "", onClick, href, download }) => {
  const Component = href ? "a" : "button";
  return (
    <Component
      href={href}
      download={download}
      onClick={onClick}
      className={`transition-transform hover:scale-105 active:scale-95 ${className}`}
    >
      {children}
    </Component>
  );
};

export function Intro({ data }) {
  const handleChange = (url) => {
    window.open(url, "_blank");
  };

  return (
    <header id="intro" className="pt-32 space-y-2">
      <p className="font-normal text-base">hi there👋, I&apos;m</p>

      <div>
        <h1 className="font-bold text-primary text-4xl tracking-tight">
          {data.NAME}
        </h1>
        <p className="font-normal text-primary/90 text-base">{data.HEADLINE}</p>
      </div>

      <div className="flex items-center gap-4 text-sm">
        <Suspense
          fallback={
            <StaticAction
              href="/resume/MUHAMMED SHAMIL V M.pdf"
              download="MUHAMMED SHAMIL V M.pdf"
              className="flex justify-center items-center bg-primary shadow px-4 py-2 rounded-md h-9 font-medium text-black text-sm"
            >
              <span className="flex gap-2 items-center">
                Resume <Download size={16} />
              </span>
            </StaticAction>
          }
        >
          <a
            href="/resume/MUHAMMED SHAMIL V M.pdf"
            download="MUHAMMED SHAMIL V M.pdf"
          >
            <MovingElement
              className="flex w-full justify-center items-center bg-primary betterhover:hover:bg-primary/90 disabled:opacity-50 shadow px-4 py-2 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-9 font-medium text-black text-sm transition-colors disabled:pointer-events-none"
              toChange={false}
              ariaLabel="Download resume PDF"
            >
              <span className="flex gap-2 items-center">
                Resume <Download size={16} />
              </span>
            </MovingElement>
          </a>
        </Suspense>
        <div className="flex gap-4">
          <Suspense
            fallback={
              <StaticAction
                onClick={() => handleChange(data.EMAIL)}
                className="py-2.5 px-2.5"
                aria-label="Email"
              >
                <Mail size={16} />
              </StaticAction>
            }
          >
            <MovingElement
              change={() => handleChange(data.EMAIL)}
              ariaLabel="Email"
              className="py-2.5 px-2.5"
            >
              <Mail size={16} />
            </MovingElement>
          </Suspense>
          <Suspense
            fallback={
              <StaticAction
                onClick={() => handleChange(data.GITHUB)}
                className="py-2.5 px-2.5"
                aria-label="GitHub"
              >
                <Github size={16} />
              </StaticAction>
            }
          >
            <MovingElement
              change={() => handleChange(data.GITHUB)}
              ariaLabel="GitHub"
              className="py-2.5 px-2.5"
            >
              <Github size={16} />
            </MovingElement>
          </Suspense>
          <Suspense
            fallback={
              <StaticAction
                onClick={() => handleChange(data.LINKEDIN)}
                className="py-2.5 px-2.5"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </StaticAction>
            }
          >
            <MovingElement
              change={() => handleChange(data.LINKEDIN)}
              ariaLabel="LinkedIn"
              className="py-2.5 px-2.5"
            >
              <Linkedin size={16} />
            </MovingElement>
          </Suspense>
        </div>
      </div>
    </header>
  );
}
