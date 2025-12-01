// src/components/VisaCard.jsx
import { Link } from "react-router-dom";
import ArrowTopRight from "../assets/ArrowTopRight.svg";

function VisaCard({ id, icon, title, text, img, linkTo }) {
  const target = linkTo || `/visa/${id}`;

  return (
    <article className="w-full border border-gray-300 rounded-3xl bg-white shadow-sm">
      <div className="flex flex-col md:flex-row gap-5 p-4 sm:p-5">
        {/* Картинка */}
        <div className="w-full md:w-40 lg:w-48 xl:w-56 shrink-0 h-32 sm:h-40 md:h-44 lg:h-52 overflow-hidden rounded-2xl bg-slate-200">
          {img && (
            <img src={img} alt={title} className="w-full h-full object-cover" />
          )}
        </div>

        {/* Текст */}
        <div className="flex flex-col justify-between gap-3 sm:gap-4 flex-1">
          <div>
            <h6 className="text-darkGreen font-bold text-base sm:text-lg lg:text-xl">
              {title}
            </h6>
            <p className="text-gray-600 text-sm sm:text-base">{text}</p>
          </div>

          <div className="flex justify-between items-center">
            <Link
              to={target}
              className="border border-lightGreen w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center hover:bg-darkGreen hover:border-darkGreen transition"
              aria-label={`Детальніше про: ${title}`}
            >
              <img src={ArrowTopRight} alt="" className="w-4 h-4" />
            </Link>

            {icon && (
              <img
                src={icon}
                alt=""
                className="w-7 h-7 sm:w-8 sm:h-8 translate-x-2"
              />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default VisaCard;
