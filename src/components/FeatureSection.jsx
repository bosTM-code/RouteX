import FeatureCard from "./FeatureCard";
import Globe from "../assets/Globe.svg";
import Visa from "../assets/Visa.svg";
import Ticket from "../assets/Ticket.svg";

const features = [
  {
    icon: Globe,
    title: "Міжнародний розвиток бізнесу",
    text: "Аналіз ринків, вибір оптимальної країни для виходу, підбір юридичної форми та базових вимог до компанії.",
  },
  {
    icon: Visa,
    title: "Візова підтримка для підприємців",
    text: "Пояснюємо вимоги до віз, готуємо пакет документів, допомагаємо уникнути типових відмов і затримок.",
  },
  {
    icon: Ticket,
    title: "Планування релокації команди",
    text: "Структуруємо етапи переїзду, ризики, податкові наслідки та організацію роботи після релокації.",
  },
];

function FeatureSection() {
  return (
    <section className=" py-12 sm:py-16">
      <div className="w-11/12 mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
