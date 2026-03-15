import { ArrowUpRight } from "lucide-react";

export function Achievements({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div id="achievements" className="py-10">
      <h2 className="font-medium text-primary text-base">achievements.</h2>

      <ul className="flex flex-col gap-6 mt-4 font-normal text-primary text-base">
        {data.map((item, index) => (
          <li
            key={index}
            className="cursor-target pl-4 border-muted-foreground hover:border-primary border-l size-full transition-all duration-300"
          >
            <div className="flex sm:flex-row flex-col justify-between items-start">
              <p className="text-primary text-lg">{item.TITLE}</p>
              <p className="text-muted-foreground text-sm max-sm:mt-2">
                {item.YEAR}
              </p>
            </div>
            <p className="text-primary/80 pt-2 text-sm">{item.DESCRIPTION}</p>
            {item.CERTIFICATE && (
              <a
                href={item.CERTIFICATE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mt-1"
              >
                View Certificate <ArrowUpRight size={16} />
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
