export function Intro({ data }) {
  return (
    <div id="intro" className="pt-32 space-y-2">
      <p className="font-normal text-base">hi there👋, I&apos;m</p>

      <div>
        <h1 className="font-bold text-primary/90 text-4xl tracking-tight">
          {data.NAME}
        </h1>
        <h2 className="flex flex-col gap-0 font-normal text-primary/90 text-base">
          {/* <p>{data.AGE}, {data.PRONOUN}</p> */}
          <p>{data.HEADLINE}</p>
        </h2>
      </div>
    </div>
  );
}
