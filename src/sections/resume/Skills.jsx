export function Skills({ data }) {
  return (
    <div id="skills" className="py-10">
      <h2 className="font-medium text-primary text-base">technical skills.</h2>

      <ul className="flex flex-col gap-2 mt-4 font-normal text-primary text-base">
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className="items-end grid sm:grid-cols-[170px_1fr]">
            <p>{key}:</p>
            <p className="text-primary/80 text-sm">{value.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
