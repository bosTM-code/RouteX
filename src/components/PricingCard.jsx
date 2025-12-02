import { Link } from "react-router-dom";
import CheckGreen from "../assets/CheckGreen.svg";

function PricingCard({ title, price, features }) {
  return (
    <article className="w-full rounded-3xl border border-slate-200 overflow-hidden shadow-sm bg-white">
      {/* Верхній світло-зелений блок */}
      <div className="bg-[#E8F1E8] w-full py-5 text-center">
        <h3 className="text-xl font-semibold text-darkGreen">{title}</h3>
      </div>

      {/* Низ: ціна + список + кнопка */}
      <div className="px-7 py-8">
        {/* Ціна */}
        <div className="text-center mb-6">
          <span className="text-4xl font-bold text-darkGreen">{price}</span>
          <span className="text-sm text-slate-500 ml-1">/міс</span>
        </div>

        {/* Переваги тарифу */}
        <ul className="space-y-3 mb-8">
          {features.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-slate-700 text-sm"
            >
              <img src={CheckGreen} className="w-4 h-4" alt="" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Кнопка */}
        <div className="flex justify-center">
          <button
            type="button"
            className="px-7 py-2 rounded-full border border-lightGreen text-darkGreen text-sm font-medium hover:bg-lightGreen hover:text-white transition-all flex items-center gap-2"
          >
            <Link to="/contact" className="hover:text-white">
              Обрати тариф →
            </Link>
          </button>
        </div>
      </div>
    </article>
  );
}

export default PricingCard;
