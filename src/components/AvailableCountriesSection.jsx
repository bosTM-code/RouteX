// src/componente/AvailibleCountriesSection.jsx
import { useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import CountryCard from "./CountryCard";
import BrokenArrow from "../assets/ArrowBroken.svg";
import ArrowRight from "../assets/arrowRight.svg";
import { countryData } from "../data/countryData";

// 4 країни, які показуємо в блоці
const featuredCountryIds = ["canada", "germany", "australia", "uk"];

function AvailibleCountriesSection() {
  const navigate = useNavigate();

  // беремо потрібні країни з загального масиву
  const featuredCountries = useMemo(
    () =>
      countryData
        .filter((c) => featuredCountryIds.includes(c.id))
        .map((c) => ({
          id: c.id,
          title: c.name, // для CountryCard
          points: c.services || [c.shortDescription],
          flag: c.flag,
          shortDescription: c.shortDescription,
        })),
    []
  );

  const handleViewMore = () => {
    navigate("/countries");
  };

  return (
    <section className="w-11/12 max-w-6xl mx-auto mb-16">
      {/* Маленький заголовок з іконкою */}
      <div className="flex items-center gap-2 mb-3">
        <p className="uppercase text-darkGreen font-semibold text-xs sm:text-sm tracking-wide">
          Доступні країни
        </p>
        <img src={BrokenArrow} alt="Декоративна стрілка" />
      </div>

      {/* Заголовок + кнопка */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <h3 className="font-bold text-[1.5rem] mb-2 md:mb-0 md:text-[2.2rem] xl:text-[2.6rem] text-darkGreen max-w-[630px] leading-tight">
          Міста та країни для вашої наступної подорожі
        </h3>

        <button
          type="button"
          onClick={handleViewMore}
          className="self-start md:self-center xl:self-end px-6 py-3 bg-lightGreen rounded-full flex items-center gap-2 hover:bg-green-600 transition-all duration-300 ease-in-out shrink-0"
        >
          <span className="text-white text-sm sm:text-base">
            Переглянути всі
          </span>
          <img src={ArrowRight} alt="Стрілка вправо" />
        </button>
      </div>

      {/* Рівно 4 картки з посиланням на деталі */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {featuredCountries.map((item) => (
          <Link key={item.id} to={`/countries/${item.id}`} className="block">
            <CountryCard {...item} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default AvailibleCountriesSection;
