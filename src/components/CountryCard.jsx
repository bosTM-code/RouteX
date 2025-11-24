import Check from "../assets/CheckDark.svg";

function CountryCard({ title, points = [], flag }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
      {/* Кружок з прапором */}
      <div className="w-14 h-14 rounded-full overflow-hidden border border-lightGreen self-start">
        <img
          src={flag}
          alt={`Прапор ${title}`}
          className="w-full h-full object-cover"
        />
      </div>

      <h4 className="text-lg font-bold text-darkGreen">{title}</h4>

      <div className="space-y-2 text-slate-700">
        {points.map((p) => (
          <div className="flex items-start gap-2" key={p}>
            <img src={Check} className="mt-[3px]" />
            <p>{p}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default CountryCard;
