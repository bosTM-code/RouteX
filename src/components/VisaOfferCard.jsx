import { Link } from "react-router-dom";
import ArrowRight from "../assets/arrowRight.svg";

function VisaOfferCard({
  title,
  description,
  price,
  currency = "€",
  image,
  badgeIcon,
}) {
  return (
    <article className="bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col border border-slate-100 hover:shadow-md transition-shadow">
      {/* Верхній блок з картинкою */}
      <div className="relative h-40 sm:h-44 md:h-48 w-full bg-slate-200">
        {image && (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        )}

        {/* маленький квадратик у куті (наприклад прапор / піктограма) */}
        <div className="absolute top-4 left-4 w-8 h-8 rounded-lg border border-lightGreen bg-white flex items-center justify-center">
          {badgeIcon && (
            <img src={badgeIcon} alt="" className="w-5 h-5 object-contain" />
          )}
        </div>
      </div>

      {/* Нижній блок з текстом */}
      <div className="px-6 py-5 flex flex-col gap-4 sm:gap-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-darkGreen">
              {title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="shrink-0 rounded-full border border-slate-200 px-3 py-1 text-[11px] sm:text-xs font-semibold text-darkGreen bg-[#F4F8F2]">
            {currency}
            {price}
          </div>
        </div>

        <div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-lightGreen text-darkGreen px-4 py-2 text-xs sm:text-sm hover:bg-lightGreen hover:text-white transition"
          >
            <Link to="/contact" className="hover:text-white">
              Подати заявку
            </Link>
            <img src={ArrowRight} alt="" className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default VisaOfferCard;
