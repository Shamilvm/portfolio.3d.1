import { Download, Github, Linkedin, Mail } from "lucide-react";
import { MovingElement } from "../../components/ui/moving-element";

export function Intro({ data }) {
  const handleChange = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div id="intro" className="pt-32 space-y-2">
      <p className="font-normal text-base">hi there👋, I&apos;m</p>

      <div>
        <h1 className="font-bold text-primary text-4xl tracking-tight">
          {data.NAME}
        </h1>
        <h2 className="flex flex-col gap-0 font-normal text-primary/90 text-base">
          {/* <p>{data.AGE}, {data.PRONOUN}</p> */}
          <p>{data.HEADLINE}</p>
        </h2>
      </div>

      <div className="flex items-center gap-4 text-sm">
        <a
          href="/resume/MUHAMMED SHAMIL V M.pdf"
          download="MUHAMMED SHAMIL V M.pdf"
        >
          <MovingElement
            className="flex w-full justify-center items-center bg-primary betterhover:hover:bg-primary/90 disabled:opacity-50 shadow px-4 py-2 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-9 font-medium text-black text-sm transition-colors disabled:pointer-events-none"
            // change={() => handleChange(data.RESUME)}
            toChange={false}
            ariaLabel="Resume"
          >
            <span className="flex gap-2 items-center">
              Resume <Download size={16} />
            </span>
          </MovingElement>
        </a>
        <div className="flex gap-4">
          <MovingElement
            change={() => handleChange(data.EMAIL)}
            ariaLabel="Email"
            className="py-2.5 px-2.5"
          >
            <Mail size={16} />
          </MovingElement>
          <MovingElement
            change={() => handleChange(data.GITHUB)}
            ariaLabel="Github"
            className="py-2.5 px-2.5"
          >
            <Github size={16} />
          </MovingElement>
          <MovingElement
            change={() => handleChange(data.LINKEDIN)}
            ariaLabel="Linkedin"
            className="py-2.5 px-2.5"
          >
            <Linkedin size={16} />
          </MovingElement>
        </div>
      </div>
    </div>
  );
}
