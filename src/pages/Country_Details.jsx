// src/pages/CountryDetails.jsx
import { useParams, Link, useNavigate } from "react-router-dom";
import HeroCommon from "../components/HeroCommon";
import { countryData, regions } from "../data/countryData";

function CountryDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const country = countryData.find((c) => c.id === id);

  if (!country) {
    return (
      <div className="bg-[#F4F8F2] min-h-screen">
        <HeroCommon title="Деталі країни" />
        <div className="w-11/12 max-w-4xl mx-auto py-16">
          <h2 className="text-3xl font-bold mb-4">Країну не знайдено</h2>
          <p className="mb-6">
            Можливо, вона була видалена або ви перейшли за некоректним
            посиланням.
          </p>
          <Link
            to="/countries"
            className="text-[#1C7C54] font-medium underline"
          >
            ← Повернутися до списку країн
          </Link>
        </div>
      </div>
    );
  }

  const handleCountryChange = (e) => {
    const value = e.target.value;
    if (value) {
      navigate(`/countries/${value}`);
    }
  };

  return (
    <div className="bg-[#F4F8F2] min-h-screen">
      {/* Верхній блок як у Figma */}
      <HeroCommon
        title="Деталі країни"
        breadcrumb={`Головна / Країни / ${country.name}`}
      />

      <section className="w-11/12 max-w-6xl mx-auto py-12 lg:py-16 grid gap-10 lg:grid-cols-[minmax(0,2fr),minmax(320px,1fr)]">
        {/* Лівий великий текстовий блок */}
        <article>
          <h1 className="text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
            Відкрийте для себе {country.name}: нові можливості для життя, роботи
            та подорожей
          </h1>

          <p className="text-[#555] leading-relaxed mb-6">
            {country.name} — одна з найпопулярніших напрямків для тих, хто хоче
            поєднати комфортне життя, карʼєрні можливості та яскраві враження.
            Ми допомагаємо пройти шлях від першої консультації до повного
            оформлення документів: віз, дозволів на проживання, навчання чи
            бізнесу.
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            Чому саме {country.name}?
          </h2>
          <p className="text-[#555] leading-relaxed mb-6">
            Країна пропонує стабільну економіку, розвинену інфраструктуру та
            широкий спектр програм для іноземців: від робочих віз до
            студентських і бізнес-програм. Ви можете обрати шлях, який найкраще
            відповідає вашим цілям: працевлаштування, навчання, інвестиції,
            релокація сімʼї чи формат digital nomad.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Паспортно-візова підтримка
          </h3>
          <p className="text-[#555] leading-relaxed mb-4">
            Ми пояснюємо вимоги до кожного типу візи, допомагаємо зібрати пакет
            документів, заповнюємо анкети, готуємо до співбесіди в консульстві
            та супроводжуємо до моменту отримання візи або дозволу на
            проживання.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Освіта та навчальні програми
          </h3>
          <p className="text-[#555] leading-relaxed mb-4">
            Якщо ви плануєте навчатись, ми підкажемо навчальні заклади,
            програми, вимоги до вступу та допоможемо з оформленням студентської
            візи. Це актуально як для коледжів і університетів, так і для мовних
            курсів.
          </p>

          <h3 className="text-xl font-semibold mb-2">Робота та карʼєра</h3>
          <p className="text-[#555] leading-relaxed mb-4">
            Для фахівців з досвідом ми підбираємо формат імміграції під ваш
            профіль: робочі візи, програми для кваліфікованих спеціалістів,
            бізнес-імміграція чи релокація з роботодавцем.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Як ми працюємо з {country.name}
          </h2>
          <p className="text-[#555] leading-relaxed mb-4">
            Ми аналізуємо вашу ситуацію, пропонуємо кілька можливих маршрутів,
            попереджаємо про ризики та реалістичні терміни. Далі разом з вами
            обираємо оптимальний варіант і крок за кроком рухаємося до
            результату.
          </p>

          <p className="text-[#555] leading-relaxed">
            Якщо ви розглядаєте {country.name} як країну для нового старту,
            напишіть нам — ми допоможемо перетворити ідею на чіткий план дій.
          </p>
        </article>

        {/* Права колонка з картками, як у Figma */}
        <aside className="space-y-8">
          {/* Картка "Спланувати подорож" */}
          <div className="bg-[#F7FBF4] border border-[#E2E9E0] rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-1">Спланувати подорож</h3>
            <p className="text-sm text-[#777] mb-4">
              Залиште запит — ми підберемо оптимальний варіант для{" "}
              {country.name}.
            </p>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="inline-block w-6 h-6 rounded-full bg-[#E3F3E8]" />
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (234) 567-89-00
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-6 h-6 rounded-full bg-[#E3F3E8]" />
                <a href="mailto:info@example.com" className="hover:underline">
                  info@example.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-6 h-6 rounded-full bg-[#E3F3E8]" />
                <span>Онлайн-консультація, запис за попереднім зверненням</span>
              </li>
            </ul>

            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#1C7C54] hover:underline"
            >
              Звʼязатися з нами
              <span aria-hidden="true">↗</span>
            </button>
          </div>

          {/* Картка "Обрати країну" */}
          <div className="bg-white border border-[#E2E9E0] rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Обрати країну</h3>

            {/* селект з усіма країнами */}
            <div className="mb-5">
              <label className="block text-xs text-[#777] mb-1">
                Оберіть країну зі списку
              </label>
              <div className="relative">
                <select
                  value={country.id}
                  onChange={handleCountryChange}
                  className="w-full appearance-none border border-[#E2E9E0] rounded-xl py-2.5 px-3 pr-8 text-sm bg-[#F9FAF9] focus:outline-none focus:ring-1 focus:ring-[#1C7C54]"
                >
                  {countryData.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs">
                  ▾
                </span>
              </div>
            </div>

            {/* список регіонів як у Figma */}
            <div className="space-y-1 text-sm">
              {regions.map((region) => {
                const isActive = region.id === country.region;
                return (
                  <button
                    key={region.id}
                    type="button"
                    className={`w-full flex items-center justify-between rounded-xl px-3 py-2 text-left transition 
                      ${
                        isActive
                          ? "bg-[#F1F8F3] text-[#1C7C54] font-medium"
                          : "bg-transparent hover:bg-[#F7FBF8] text-[#333]"
                      }`}
                  >
                    <span>{region.name}</span>
                    <span aria-hidden="true">›</span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default CountryDetails;
