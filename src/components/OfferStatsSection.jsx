import { Link } from "react-router-dom";
import Travel1 from "../assets/Travel1.jpg";
import Travel2 from "../assets/Travel2.png";
import Globe from "../assets/Globe.svg";
import ArrowRight from "../assets/arrowRightGreenSmall.svg";

function OfferStatsSection() {
  const stats = [
    { value: "500+", label: "Успішних візових кейсів" },
    { value: "30+", label: "Країн для релокації" },
    { value: "7+", label: "Років досвіду в імміграції" },
    { value: "95%", label: "Клієнтів отримують візу з першої спроби" },
  ];

  return (
    <section className="w-11/12 max-w-6xl mx-auto mb-16">
      <div className="md:flex md:items-stretch md:gap-6">
        {/* Ліва висока картинка */}
        <div className="hidden md:block md:w-[32%] rounded-3xl overflow-hidden bg-slate-200">
          <img
            src={Travel1}
            alt="Консультація з візових питань"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Правий стовпець */}
        <div className="w-full md:w-[68%] flex flex-col gap-6 mt-4 md:mt-0">
          {/* Біла картка + права картинка зі скошеним краєм */}
          <div className="bg-white rounded-3xl shadow-lg px-0 py-0 overflow-hidden">
            <div className="flex flex-col md:flex-row items-stretch">
              {/* Ліва текстова частина */}
              <div className="flex-1 px-6 py-8 sm:px-10 sm:py-10 flex flex-col gap-5">
                <div className="w-14 h-14 rounded-full bg-lightGreen flex items-center justify-center">
                  <img
                    src={Globe}
                    alt="Іконка консультацій"
                    className="w-7 h-7"
                  />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-darkGreen mb-2">
                    Отримайте індивідуальну візову стратегію
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 mb-1">
                    Заповніть коротку заявку — ми оцінимо ваші шанси на візу,
                    врахуємо освіту, досвід роботи та сімейні обставини.
                  </p>
                  <p className="text-sm sm:text-base text-slate-600">
                    Підберемо оптимальну програму релокації і пояснимо крок за
                    кроком, що робити далі.
                  </p>
                </div>

                <div>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-lightGreen text-darkGreen font-medium text-sm sm:text-base hover:bg-lightGreen hover:text-white transition"
                  >
                    <span>Зв&apos;язатися з нами</span>
                    <img
                      src={ArrowRight}
                      alt="Стрілка вправо"
                      className="group w-4 h-4 transition group-hover:brightness-0 group-hover:invert"
                    />
                  </Link>
                </div>
              </div>

              {/* Права частина зі скошеним краєм */}
              <div
                className="
                  hidden md:block w-[35%] bg-slate-200
                  [clip-path:polygon(18%_0,100%_0,100%_100%,0%_100%)]
                "
              >
                <img
                  src={Travel2}
                  alt="Клієнти готуються до подорожі"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Зелений блок статистики */}
          <div className="bg-lightGreen rounded-3xl py-4 sm:py-6 px-6 sm:px-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center text-white">
            {stats.map((item) => (
              <div key={item.label} className="space-y-1 sm:space-y-1.5">
                <div className="text-lg sm:text-2xl font-extrabold">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm text-white/90">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfferStatsSection;
