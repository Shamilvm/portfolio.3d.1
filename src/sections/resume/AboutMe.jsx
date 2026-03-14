export function AboutMe({ data }) {
  return (
    <div id="aboutme" className="py-10">
      <h2 className="font-medium text-primary/90 text-base">about me.</h2>

      <div className="flex flex-col gap-2 mt-4 font-normal text-muted-foreground text-base text-justify">
        <p>
          <span>{data.INTRO}</span>
        </p>
        <p>
          <span>{data.EXPERTISE}</span>
        </p>
      </div>
    </div>
  );
}
