import QuoteIcon from "../assets/quoteGreen.svg";

function SuccessStoryCard({ text, name, role, bg }) {
  return (
    <article
      className={`${bg} hover:bg-[#E6F1DD] transition rounded-2xl shadow-sm px-7 py-7 flex flex-col justify-between h-full`}
    >
      <img src={QuoteIcon} alt="" className="w-5 h-5 mb-4" />

      <p className="text-[15px] sm:text-base leading-relaxed text-slate-700 mb-6">
        {text}
      </p>

      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-full bg-slate-200" />
        <div className="space-y-0.5">
          <p className="text-[15px] sm:text-[16px] font-semibold text-darkGreen">
            {name}
          </p>
          <p className="text-xs sm:text-sm text-slate-500">{role}</p>
        </div>
      </div>
    </article>
  );
}

export default SuccessStoryCard;
