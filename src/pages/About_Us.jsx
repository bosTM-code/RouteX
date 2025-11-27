import HeroCommon from "../components/HeroCommon";
import DreamSection from "../components/DreamSection";
import ProcessSection from "../components/ProcessSection";
import OfferStatsSection from "../components/OfferStatsSection";
import AvailibleCountriesSection from "../components/AvailibleCountriesSection";
import Sponsers from "../components/Sponsers";
import AboutContactSection from "../components/AboutContactSection";
import Travel1 from "../assets/Travel1.jpg";
import Globe from "../assets/Globe.svg";
import Security from "../assets/Security.svg";
import Wallet from "../assets/Wallet.svg";
import Passport from "../assets/PassGreen.svg";

function About() {
  return (
    <div className="overflow-x-hidden">
      <HeroCommon title="Про нас" />
      <DreamSection />
      <ProcessSection />
      <OfferStatsSection />
      <Sponsers />
      <AboutContactSection />
      {/* Блок 3: Unforgettable Getaways Escaping Routine */}
      <section className="py-16">
        <div className="w-11/12 max-w-5xl mx-auto">
          <div className="rounded-3xl bg-white shadow-sm border border-green-50 px-6 py-10 sm:px-10 sm:py-12">
            <div className="text-center mb-8">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-green-700">
                Наші напрямки
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
                Незабутні подорожі та вихід із рутини
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                Ми поєднуємо візові послуги, міграційний консалтинг та бізнес-
                рішення, щоб ваша подорож або релокація пройшла максимально
                спокійно.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Card 1 */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <img src={Security} alt="" className="w-8 h-8" />
                  <h3 className="font-semibold text-slate-900">
                    Візове агентство
                  </h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Підбір типу візи, перевірка документів, супровід подання та
                  комунікація з візовими центрами.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <img src={Passport} alt="" className="w-8 h-8" />
                  <h3 className="font-semibold text-slate-900">
                    Міжнародний доступ
                  </h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Допомагаємо відкрити бізнес, оформити дозвільні документи та
                  побудувати легальну схему роботи за кордоном.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <img src={Wallet} alt="" className="w-8 h-8" />
                  <h3 className="font-semibold text-slate-900">
                    Громадянство та ПМП
                  </h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Консультуємо щодо програм довгострокового перебування,
                  резидентства та отримання громадянства.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок 4: фото + цифри (Get our best offers quickly) */}
      <section className="pb-16">
        <div className="w-11/12 max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
          {/* Фото */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-md">
              <img
                src={Travel1}
                alt="Клієнт з паспортом"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Текст + цифри + CTA */}
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-green-700">
              Про нашу роботу
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">
              Отримуйте найкращі пропозиції швидко та без зайвої бюрократії
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              Ми беремо на себе координацію процесу: від підготовки першого
              пакета документів до моменту, коли ви вже тримаєте візу чи дозвіл
              у руках.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-green-50 px-4 py-3 text-center">
                <p className="text-2xl font-extrabold text-darkGreen">10k+</p>
                <p className="text-[11px] sm:text-xs text-slate-600">
                  консультацій
                </p>
              </div>
              <div className="rounded-2xl bg-green-50 px-4 py-3 text-center">
                <p className="text-2xl font-extrabold text-darkGreen">20+</p>
                <p className="text-[11px] sm:text-xs text-slate-600">
                  напрямків
                </p>
              </div>
              <div className="rounded-2xl bg-green-50 px-4 py-3 text-center">
                <p className="text-2xl font-extrabold text-darkGreen">5k+</p>
                <p className="text-[11px] sm:text-xs text-slate-600">
                  успішних кейсів
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Логотипи партнерів (як в макеті) */}
      </section>

      {/* Блок 5: Let Your Wanderlust Guide You (форма) */}
      <section className="pb-16">
        <div className="w-11/12 max-w-6xl mx-auto rounded-3xl bg-darkGreen text-white px-6 py-10 sm:px-10 sm:py-12 grid gap-8 lg:grid-cols-[1.1fr,1fr] items-center">
          {/* Ілюстрація */}
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
              <img src={Globe} alt="" className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                Нехай ваша мандрівка
                <br />
                почнеться з правильної стратегії
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/80">
                Залиште заявку — ми підберемо оптимальний варіант візи чи
                програми релокації саме під ваші цілі.
              </p>
            </div>
          </div>

          {/* Форма (статична, без відправки) */}
          <form className="bg-white rounded-2xl p-6 text-slate-900 space-y-4 shadow-md">
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">
                Ім&apos;я
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lightGreen"
                placeholder="Ваше ім'я"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lightGreen"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">
                Мета звернення
              </label>
              <select className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-lightGreen">
                <option>Робота за кордоном</option>
                <option>Навчання</option>
                <option>Бізнес / релокація компанії</option>
                <option>Туристична поїздка</option>
              </select>
            </div>
            <button
              type="button"
              className="w-full rounded-full bg-lightGreen text-white text-sm font-semibold py-2.5 hover:bg-green-600 transition-colors"
            >
              Надіслати запит
            </button>
          </form>
        </div>
      </section>

      {/* Нижній блок з країнами як в About (Experience the World…) */}
      <section className="pb-16">
        <AvailibleCountriesSection />
      </section>
    </div>
  );
}

export default About;
