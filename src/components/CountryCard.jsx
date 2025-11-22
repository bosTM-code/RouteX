import Check from "../assets/CheckDark.svg";

function CountryCard({ title, points }) {
  return (
    <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
      {/* Кружок зверху */}
      <div className="w-14 h-14 rounded-full border border-lightGreen bg-slate-50 flex items-center justify-center self-start mb-1">
        {/* Якщо захочеш, можна вставити сюди маленький прапорець/іконку країни */}
      </div>

      {/* Назва країни */}
      <h4 className="text-lg sm:text-xl text-darkGreen font-bold">{title}</h4>

      {/* Список послуг / можливостей */}
      <div className="space-y-2 text-sm sm:text-base text-slate-700">
        {points.map((text) => (
          <div key={text} className="flex items-start gap-2">
            <img src={Check} alt="" className="mt-[2px]" />
            <p>{text}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default CountryCard;
