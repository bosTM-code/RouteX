import { useState } from "react";
import PassGreen from "../assets/PassGreen.svg";
import ArrowLeftSmall from "../assets/ArrowLeftSmall.svg";
import ArrowRightSmall from "../assets/ArrowRightSmall.svg";
import ArrowRight from "../assets/arrowRight.svg";

const coachingPrograms = [
  {
    id: 1,
    title: "Підготовка до візової співбесіди",
    description:
      "Пропрацьовуємо типові питання консула, логіку відповідей і вашу особисту історію, щоб ви почувалися впевнено.",
  },
  {
    id: 2,
    title: "Мовні іспити для імміграції",
    description:
      "IELTS, TOEFL, TestDaF, ÖSD — допомагаємо скласти план підготовки, підбираємо формати курсів та матеріали.",
  },
  {
    id: 3,
    title: "Карʼєрний коучинг для релокації",
    description:
      "Резюме під ринок цільової країни, LinkedIn-профіль та стратегія пошуку роботи після отримання візи.",
  },
  {
    id: 4,
    title: "Адаптація після переїзду",
    description:
      "Розбираємо податкові, побутові та культурні питання: що робити в перші місяці після приїзду.",
  },
];

function CoachingSection() {
  // показуємо по 3 картки, стрілками можна гортати
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex(
      (prev) => (prev - 1 + coachingPrograms.length) % coachingPrograms.length
    );
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % coachingPrograms.length);
  };

  const visibleCards = [];
  for (let i = 0; i < Math.min(visibleCount, coachingPrograms.length); i++) {
    visibleCards.push(
      coachingPrograms[(startIndex + i) % coachingPrograms.length]
    );
  }

  return (
    <section className="w-11/12 max-w-6xl mx-auto mb-16">
      {/* Верхній рядок: бейдж + заголовок + стрілки */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={PassGreen} alt="" className="w-5 h-5" />
            <p className="uppercase text-xs sm:text-sm font-semibold tracking-[0.12em] text-darkGreen">
              Підтримка та коучинг
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] leading-tight font-bold text-darkGreen max-w-xl">
            Освітні та візові програми, що підтримують вашу релокацію
          </h2>
        </div>

        {/* Стрілки керування */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          <button
            type="button"
            onClick={handlePrev}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-300 bg-white flex items-center justify-center hover:bg-slate-100 transition"
            aria-label="Попередні програми"
          >
            <img src={ArrowLeftSmall} alt="Попередня" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-lightGreen flex items-center justify-center hover:bg-green-600 transition"
            aria-label="Наступні програми"
          >
            <img src={ArrowRightSmall} alt="Наступна" />
          </button>
        </div>
      </div>

      {/* Картки */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {visibleCards.map((item) => (
          <article
            key={item.id}
            className="bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col"
          >
            {/* Верхній сірий прямокутник під картинку */}
            <div className="bg-slate-200 h-40 sm:h-48 lg:h-56 w-full" />
            {/* Нижня біла частина з текстом */}
            <div className="bg-white px-5 py-5 sm:px-6 sm:py-6 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-darkGreen mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
              <button
                type="button"
                className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-lightGreen flex items-center justify-center hover:bg-green-600 transition"
                aria-label={`Дізнатися більше про: ${item.title}`}
              >
                <img src={ArrowRight} alt="" className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CoachingSection;
