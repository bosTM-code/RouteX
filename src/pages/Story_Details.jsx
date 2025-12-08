import { Link } from "react-router-dom";
import HeroCommon from "../components/HeroCommon";
import ArrowRight from "../assets/arrowRight.svg";
import QuoteBig from "../assets/quoteBig.svg";
import ArrowBroken from "../assets/ArrowBroken.svg"; // декоративна стрілка
import Travel2 from "../assets/Travel2.png"; // ЗАМІНИ на потрібне фото

function StoryDetails() {
  return (
    <div className="overflow-x-hidden bg-[#F4F8F2] min-h-screen">
      {/* спільний зелений банер зверху */}
      <HeroCommon title="Історія успіху" />

      {/* основний контент сторінки */}
      <main className="w-11/12 max-w-6xl mx-auto py-16 lg:py-20">
        <section className="grid gap-10 lg:gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
          {/* ЛІВА КОЛОНКА — текст історії */}
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-darkGreen mb-6 leading-tight">
              Віза до Єгипту схвалена
            </h1>

            {/* лапки */}
            <img src={QuoteBig} alt="" className="w-16 h-16 mb-4" />

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              Аліна звернулася до нашого консалтингового центру з метою отримати
              довгострокову візу для роботи в туристичній сфері. Ми
              проаналізували її досвід, освіту та вимоги роботодавця, підібрали
              оптимальний тип візи та поетапно підготували весь пакет
              документів.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              На співбесіді в консульстві вона почувалася впевнено, адже
              попередньо пройшла з нами симуляцію запитань консула. Результат —
              віза схвалена з першої спроби, без додаткових запитів та затримок.
            </p>

            {/* Табличка з деталями */}
            <dl className="space-y-3 text-sm sm:text-base text-slate-800 mb-8">
              <div className="flex gap-2 sm:gap-4">
                <dt className="font-semibold min-w-[110px] text-darkGreen">
                  Тип візи:
                </dt>
                <dd>Робоча віза (туристична індустрія)</dd>
              </div>
              <div className="flex gap-2 sm:gap-4">
                <dt className="font-semibold min-w-[110px] text-darkGreen">
                  Термін:
                </dt>
                <dd>2 роки з правом продовження</dd>
              </div>
              <div className="flex gap-2 sm:gap-4">
                <dt className="font-semibold min-w-[110px] text-darkGreen">
                  Клієнт:
                </dt>
                <dd>alina.work@example.com</dd>
              </div>
            </dl>

            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-lightGreen bg-lightGreen text-white px-6 py-3 text-sm sm:text-base hover:bg-white hover:text-darkGreen transition"
              >
                Подати на візу
                <img
                  src={ArrowRight}
                  alt="arrow"
                  className="w-4 h-4 group-hover:invert"
                />
              </button>

              <button
                type="button"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-lightGreen text-darkGreen px-6 py-3 text-sm sm:text-base bg-white hover:bg-lightGreen hover:text-white transition"
              >
                <Link to="/success-story" className="hover:text-white">
                  Читати інші історії
                </Link>
              </button>
            </div>
          </div>

          {/* ПРАВА КОЛОНКА — картинка з рамкою */}
          <div className="relative h-[260px] sm:h-[320px] md:h-[360px] lg:h-[400px]">
            {/* декоративна пунктирна стрілка зверху */}
            <img
              src={ArrowBroken}
              alt="Пунктирна стрілка"
              className="absolute -top-6 right-12 w-16 opacity-60"
            />

            {/* блідий прямокутник позаду */}
            <div className="absolute inset-6 lg:inset-8 bg-[#F4F8F2] rounded-3xl rotate-[4deg]" />

            {/* основна картинка з зеленою рамкою */}
            <div className="absolute inset-0 lg:inset-4 rounded-3xl border-[4px] border-lightGreen overflow-hidden rotate-[-3deg] shadow-md bg-slate-200">
              <img
                src={Travel2}
                alt="Фото клієнтки після успішного отримання візи"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default StoryDetails;
