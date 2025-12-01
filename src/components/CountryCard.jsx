// src/components/CountryCard.jsx
import CheckIcon from "../assets/checkDark.svg";

function CountryCard({ title, points, flag, shortDescription }) {
  // Якщо points є – беремо їх, інакше показуємо короткий опис
  const items =
    points && points.length
      ? points.slice(0, 3)
      : shortDescription
        ? [shortDescription]
        : [];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E6EDE7] p-8 flex flex-col items-start hover:shadow-md transition cursor-pointer">
      {/* Прапор у кружечку */}
      <div className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-lightGreen mb-5 overflow-hidden">
        <img src={flag} alt={title} className="w-10 h-10 object-cover" />
      </div>

      {/* Назва */}
      <h4 className="font-semibold text-lg text-darkGreen mb-4">{title}</h4>

      {/* Список / опис */}
      {!!items.length && (
        <ul className="space-y-2">
          {items.map((text, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-sm text-[#3b4a3f]"
            >
              <img src={CheckIcon} alt="" className="w-4 h-4" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CountryCard;
