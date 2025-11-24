import { useState } from "react";
import CountryCard from "./CountryCard";
import BrokenArrow from "../assets/ArrowBroken.svg";
import ArrowRight from "../assets/arrowRight.svg";
import caFlag from "../assets/flags/canada.svg";
import deFlag from "../assets/flags/germany.svg";
import plFlag from "../assets/flags/poland.svg";
import usFlag from "../assets/flags/usa.svg";
import ukFlag from "../assets/flags/uk.svg";
import esFlag from "../assets/flags/spain.svg";
import czFlag from "../assets/flags/czechia.svg";
import ptFlag from "../assets/flags/portugal.svg";
import nlFlag from "../assets/flags/netherlands.svg";
import atFlag from "../assets/flags/austria.svg";

const countryData = [
  {
    id: "ca",
    title: "Канада",
    points: [
      "Аналіз шансів за імміграційними програмами",
      "Підготовка документів на робочу чи навчальну візу",
      "Планування шляху до ПМП та громадянства",
    ],
    flag: caFlag,
  },
  {
    id: "de",
    title: "Німеччина",
    points: [
      "Консультації щодо Blue Card та робочих віз",
      "Релокація ІТ-спеціалістів та фахівців з дефіцитних сфер",
      "Податкове та юридичне структурування для бізнесу",
    ],
    flag: deFlag,
  },
  {
    id: "pl",
    title: "Польща",
    points: [
      "Робочі візи та воєводські запрошення",
      "Оформлення карт побиту та карти резидента ЄС",
      "Супровід відкриття ФОП/компанії для легальної роботи",
    ],
    flag: plFlag,
  },
  {
    id: "us",
    title: "США",
    points: [
      "Підбір візових категорій (B1/B2, F1, H-1B тощо)",
      "Підготовка документів для співбесіди в посольстві",
      "Довгострокові стратегії перебування та релокації",
    ],
    flag: usFlag,
  },
  {
    id: "uk",
    title: "Велика Британія",
    points: [
      "Візи для фахівців та підприємців (Skilled Worker, Start-up, Innovator)",
      "Супровід відкриття компанії та банківських рахунків",
      "Консультації щодо податкового резидентства та compliance",
    ],
    flag: ukFlag,
  },
  {
    id: "es",
    title: "Іспанія",
    points: [
      "Візи для цифрових кочівників та фрилансерів",
      "Довгострокове проживання за програмами резидентства",
      "Підбір регіону та моделі легального перебування",
    ],
    flag: esFlag,
  },
  {
    id: "cz",
    title: "Чехія",
    points: [
      "Робочі візи та бізнес-віза (Živnostenský list)",
      "Реєстрація ФОП / компанії в Чехії",
      "Консультації з легального перебування сім'ї",
    ],
    flag: czFlag,
  },
  {
    id: "pt",
    title: "Португалія",
    points: [
      "Візи D7, D8 та інші резидентські програми",
      "Підготовка документів для подання в консульство",
      "Податкове планування для релокації капіталу",
    ],
    flag: ptFlag,
  },
  {
    id: "nl",
    title: "Нідерланди",
    points: [
      "Візи для висококваліфікованих спеціалістів",
      "Супровід релокації в ІТ та стартап-секторі",
      "Консультації щодо програм для підприємців",
    ],
    flag: nlFlag,
  },
  {
    id: "at",
    title: "Австрія",
    points: [
      "Red-White-Red Card та інші типи віз",
      "Консультації щодо переїзду для фахівців і їхніх сімей",
      "Супровід відкриття бізнесу та реєстрації компанії",
    ],
    flag: atFlag,
  },
];

function AvailibleCountriesSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleCountries = showAll ? countryData : countryData.slice(0, 4);

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
          Країни, з яких ми починаємо план вашої релокації
        </h3>
        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          aria-expanded={showAll}
          className="self-start md:self-center xl:self-end px-6 py-3 bg-lightGreen rounded-full flex items-center gap-2 hover:bg-green-600 transition-all duration-300 ease-in-out shrink-0"
        >
          <span className="text-white text-sm sm:text-base">
            {showAll ? "Згорнути список" : "Переглянути всі"}
          </span>
          <img src={ArrowRight} alt="Стрілка вправо" />
        </button>
      </div>

      {/* Сітка карток */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {visibleCountries.map((item) => (
          <CountryCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default AvailibleCountriesSection;
