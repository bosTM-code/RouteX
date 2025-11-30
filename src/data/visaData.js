import Icon2 from "../assets/GridIcon.svg";
import BusinessVisa from "../assets/BusinessVisa.jpg";
import WorkVisa from "../assets/WorkVisa.jpg";
import StudentVisa from "../assets/StudentVisa.jpg";
import TravelVisa from "../assets/TravelVisa.jpg";
import Location from "../assets/Location.svg";
import Security from "../assets/Security.svg";
import GlobeGreen from "../assets/GlobeGreen.svg";

export const visaData = [
  {
    id: "business",
    icon: Security,
    title: "Бізнес-віза",
    text: "Консультації та повний супровід при отриманні бізнес-візи для відкриття або ведення компанії за кордоном",
    img: BusinessVisa,
  },
  {
    id: "work",
    icon: Icon2,
    title: "Робоча віза",
    text: "Допомагаємо підготувати документи, обрати тип робочої візи та уникнути типових помилок при поданні",
    img: WorkVisa,
  },
  {
    id: "student",
    icon: Location,
    title: "Студентська віза",
    text: "Супроводжуємо вступ до університетів та оформлення студентських віз для навчання за кордоном",
    img: StudentVisa,
  },
  {
    id: "tourist",
    icon: GlobeGreen,
    title: "Туристична віза",
    text: "Пояснюємо вимоги до туристичних віз, страхування та підтвердження фінансових гарантій",
    img: TravelVisa,
  },
  {
    id: "guide",
    icon: GlobeGreen, // можеш замінити на іншу іконку
    title: "Віза-гід (Guide Visa)",
    text: "Пакет супроводу для тих, хто ще не визначився з країною чи типом візи: аналізуємо цілі та підбираємо найкращий маршрут.",
    // поки можна повторно використати TravelVisa або додати свою картинку
    img: TravelVisa,
  },
  {
    id: "budget",
    icon: Icon2, // умовно для 'Poor Visa', теж можна замінити
    title: "Бюджетні візові рішення",
    text: "Допомагаємо підібрати варіанти віз з мінімальними витратами, оптимізуємо пакет документів та консульські збори.",
    img: BusinessVisa,
  },
];
