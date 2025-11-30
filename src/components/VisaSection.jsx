import VisaCard from "./VisaCard";
import VisaIcon from "../assets/VisaIcon.svg";
import { visaData } from "../data/visaData";

function VisaSection() {
  const homeVisaData = visaData.slice(0, 4);
  return (
    <section className="w-11/12 max-w-[1200px] mx-auto mb-16">
      <div className="text-center mb-10  text-darkGreen">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide flex  text-darkGreen items-center justify-center gap-2">
          <img
            src={VisaIcon}
            alt="Іконка візи"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
          <span>Візові рішення</span>
        </p>
        <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold">
          Основні типи віз, з якими ми працюємо
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          Обираємо оптимальний тип візи під ваші цілі: бізнес, робота, навчання
          або подорожі. Пояснюємо вимоги, готуємо пакет документів і
          супроводжуємо до моменту отримання рішення.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {homeVisaData.map((item) => (
          <div
            key={item.id}
            className="col-span-1 xl:col-span-2 2xl:max-w-[630px]"
          >
            <VisaCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default VisaSection;
