import { FileText, Mail } from "lucide-react";

export function Contact({ data }) {
  const handleChange = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="py-10">
      <div className="space-y-6 text-center">
        <div className="space-y-4">
          <h2 className="font-bold text-3xl">Let&apos;s work together.</h2>
          <p className="mx-auto max-w-2xl text-gray-300 text-base">
            I&apos;m always interested in new opportunities and exciting
            projects. Whether you have a project in mind or just want to chat
            about tech, I&apos;d love to hear from you.
          </p>
        </div>

        <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
          <button
            className="inline-flex justify-center items-center bg-primary betterhover:hover:bg-primary/90 disabled:opacity-50 shadow px-4 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-9 font-medium text-black text-sm whitespace-nowrap transition-colors cursor-target disabled:pointer-events-none"
            onClick={() => handleChange(data.EMAIL)}
          >
            <Mail className="mr-2 w-4 h-4" />
            Get in touch
          </button>
          <a
            href="/resume/MUHAMMED SHAMIL V M.pdf"
            download="MUHAMMED SHAMIL V M.pdf"
          >
            <button
              className="inline-flex justify-center items-center hover:bg-primary/10 disabled:opacity-50 shadow px-4 border border-primary rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-9 font-medium text-primary text-sm whitespace-nowrap transition-colors cursor-target disabled:pointer-events-none"
              // onClick={() => handleChange(data.RESUME)}
            >
              <FileText className="mr-2 w-4 h-4" />
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
