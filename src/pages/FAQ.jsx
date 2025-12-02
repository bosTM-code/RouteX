// src/pages/Faq.jsx
import { useState } from "react";
import HeroCommon from "../components/HeroCommon";
import ArrowRight from "../assets/CheckRightGreen.svg";
import ArrowUp from "../assets/ArrowUp.svg";
import Sponsers from "../components/Sponsers";
import OfferStatsSection from "../components/OfferStatsSection";

const faqItems = [
  {
    id: "purpose",
    question: "Яка основна мета візи?",
    answer:
      "Віза підтверджує право іноземця в’їхати в країну на певний строк і з конкретною метою: туризм, робота, навчання, бізнес чи возз’єднання сім’ї. Без правильно підібраного типу візи можуть виникнути проблеми на кордоні або при майбутніх подачах.",
  },
  {
    id: "docs",
    question: "Які документи зазвичай потрібні для візової заявки?",
    answer:
      "Мінімально це: закордонний паспорт, фото, анкета, підтвердження мети поїздки (бронь готелю, запрошення, контракт), фінансові докази, медична страховка, довідки з роботи чи навчання. Повний перелік залежить від країни й типу візи.",
  },
  {
    id: "cost",
    question: "Скільки коштує робота з вашою агенцією?",
    answer:
      "Вартість залежить від типу послуги: разова консультація, повний супровід, підготовка до співбесіди або імміграційна стратегія. Ми фіксуємо ціну до початку роботи й прописуємо її в договорі.",
  },
  {
    id: "tourist-diff",
    question: "У чому різниця між туристичною та робочою візою?",
    answer:
      "Туристична віза дозволяє короткострокове перебування без права офіційно працювати. Робоча віза видається під конкретного роботодавця чи програму й передбачає працевлаштування з оплатою податків.",
  },
  {
    id: "tourist-work",
    question: "Чи можу я працювати з туристичною візою?",
    answer:
      "Ні. Робота з туристичною візою заборонена й може призвести до депортації або заборони на в’їзд. Для легальної роботи потрібен відповідний тип візи або дозвіл на проживання.",
  },
  {
    id: "processing-time",
    question: "Скільки часу займає розгляд візової заявки?",
    answer:
      "Середній строк — від кількох днів до кількох тижнів. На імміграційні та робочі програми це може бути 1–6 місяців. Ми завжди орієнтуємося на офіційні строки та попереджаємо про сезонні затримки.",
  },
  {
    id: "age-limit",
    question: "Чи є вікові обмеження для подачі на візу?",
    answer:
      "Для більшості туристичних і гостьових віз жорстких вікових обмежень немає. Окремі програми (Work&Travel, молодіжні візи, деякі студентські програми) мають свої вікові рамки.",
  },
  {
    id: "criminal-record",
    question: "Чи можу я податися на візу, якщо маю судимість?",
    answer:
      "Це залежить від типу правопорушення, строку давності та країни, до якої подаєтеся. У складних кейсах ми рекомендуємо індивідуальну консультацію й підготовку пояснювальних документів.",
  },
  {
    id: "refusal",
    question: "Що робити, якщо мені вже відмовили у візі?",
    answer:
      "Потрібно проаналізувати причину відмови, виправити слабкі місця (документи, фінанси, маршрут, пояснення) й подавати повторно, іноді в іншій візовій категорії. Ми працюємо саме з такими кейсами.",
  },
  {
    id: "transit",
    question: "Чи потрібна віза, якщо я лише в транзиті через країну?",
    answer:
      "Якщо ви не виходите з міжнародної зони аеропорту, часто віза не потрібна. Але для деяких країн діють транзитні візи навіть при коротких пересадках. Це обов’язково потрібно перевіряти перед купівлею квитків.",
  },
];

function Faq() {
  const [activeId, setActiveId] = useState(faqItems[0].id);

  const leftColumn = faqItems.slice(0, Math.ceil(faqItems.length / 2));
  const rightColumn = faqItems.slice(Math.ceil(faqItems.length / 2));

  const toggleItem = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const renderItem = (item) => {
    const isActive = item.id === activeId;

    return (
      <button
        key={item.id}
        type="button"
        onClick={() => toggleItem(item.id)}
        className={`w-full text-left rounded-2xl mb-4 px-5 py-4 sm:px-6 sm:py-4 flex items-center gap-4 transition shadow-sm
          ${
            isActive
              ? "bg-[#F4F9F4] border border-lightGreen"
              : "bg-white border border-transparent hover:border-lightGreen/60"
          }`}
      >
        <div className="flex-1">
          <p className="text-sm sm:text-base font-semibold text-darkGreen">
            {item.question}
          </p>
          {isActive && (
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              {item.answer}
            </p>
          )}
        </div>

        <span
          className={`flex items-center justify-center w-9 h-9 rounded-full ${isActive ? "bg-lightGreen" : "bg-[#F4F8F2]"} flex-shrink-0 border border-lightGreen transition`}
        >
          <img
            src={isActive ? ArrowUp : ArrowRight}
            alt={isActive ? "Згорнути" : "Розгорнути"}
            className="w-3.5 h-3.5"
          />
        </span>
      </button>
    );
  };

  return (
    <div className="bg-[#F4F8F2] min-h-screen">
      <HeroCommon title="FAQ" />

      <section className="w-11/12 max-w-6xl mx-auto py-12 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>{leftColumn.map(renderItem)}</div>
          <div>{rightColumn.map(renderItem)}</div>
        </div>
      </section>
      <Sponsers />
      <OfferStatsSection />
    </div>
  );
}

export default Faq;
