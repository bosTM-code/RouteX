import Icon2 from "../assets/GridIcon.svg";
import BusinessVisa from "../assets/BusinessVisa.jpg";
import WorkVisa from "../assets/WorkVisa.jpg";
import StudentVisa from "../assets/StudentVisa.jpg";
import TravelVisa from "../assets/TravelVisa.jpg";
import VisaCard from "./VisaCard";
import Location from "../assets/Location.svg";
import Security from "../assets/Security.svg";
import GlobeGreen from "../assets/GlobeGreen.svg";
import VisaIcon from "../assets/VisaIcon.svg";
const VisaData = [
  {
    icon: Security,
    title: "Бізнес-віза",
    text: "Консультації та повний супровід при отриманні бізнес-візи для відкриття або ведення компанії за кордоном",
    img: BusinessVisa,
  },
  {
    icon: Icon2,
    title: "Робоча віза",
    text: "Допомагаємо підготувати документи, обрати тип робочої візи та уникнути типових помилок при поданні",
    img: WorkVisa,
  },
  {
    icon: Location,
    title: "Студентська віза",
    text: "Супроводжуємо вступ до університетів та оформлення студентських віз для навчання за кордоном",
    img: StudentVisa,
  },
  {
    icon: GlobeGreen,
    title: "Туристична віза",
    text: "Пояснюємо вимоги до туристичних віз, страхування та підтвердження фінансових гарантій",
    img: TravelVisa,
  },
];

function VisaSection() {
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
        {VisaData.map((item) => (
          <VisaCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

export default VisaSection;
