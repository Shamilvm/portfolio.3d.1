export function Education({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div id="education" className="py-10">
      <h2 className="font-medium text-primary/90 text-base">education.</h2>

      <ul className="flex flex-col gap-8 mt-4 font-normal text-primary/90 text-base">
        {data.map((item, index) => (
          <li
            key={index}
            className="pl-4 border-muted-foreground hover:border-primary border-l size-full transition-all duration-300"
          >
            <div className="flex sm:flex-row flex-col justify-between items-start">
              <div>
                <p className="text-primary/90 text-lg">{item.COURSE}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.SCHOOL}
                </p>
                {item.MARK && (
                  <p className="text-sm font-medium mt-1">Grade: {item.MARK}</p>
                )}
              </div>
              <p className="text-muted-foreground text-sm max-sm:mt-2">
                {item.YEAR}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
