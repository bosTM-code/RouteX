import FeatureCard from "./FeatureCard";
import Globe from "../assets/Globe.svg";
import Visa from "../assets/Visa.svg";
import Ticket from "../assets/Ticket.svg";

const features = [
  {
    icon: Globe,
    title: "Food and Wine Tours",
    text: "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ",
  },
  {
    icon: Visa,
    title: "Travel Opportunities",
    text: "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ",
  },
  {
    icon: Ticket,
    title: "Solo Travel Planning",
    text: "Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ",
  },
];

function FeatureSection() {
  return (
    <section className="bg-[#f8fbf5] py-12 sm:py-16">
      <div className="w-11/12 mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
