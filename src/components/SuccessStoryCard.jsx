import QuoteIcon from "../assets/quoteGreen.svg";
import { Link } from "react-router-dom";

function SuccessStoryCard({ id, name, role, text, bg }) {
  return (
    <Link
      to={`/success-story/${id}`}
      className={`block rounded-3xl p-6 sm:p-7 lg:p-8 ${bg} hover:shadow-md transition-shadow`}
    >
      <img src={QuoteIcon} alt="QuoteIcon" className="w-5 h-5 mb-4" />
      <p className="text-sm sm:text-base text-slate-700 mb-4">{text}</p>
      <div className="mt-4 border-t border-slate-200 pt-4">
        <p className="font-semibold text-darkGreen text-sm sm:text-base">
          {name}
        </p>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">{role}</p>

        <button
          type="button"
          className="mt-3 text-xs sm:text-sm font-semibold text-lightGreen hover:underline"
        >
          Детальніше
        </button>
      </div>
    </Link>
  );
}

export default SuccessStoryCard;
