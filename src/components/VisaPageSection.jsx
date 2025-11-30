import { visaData } from "../data/visaData";
import VisaCard from "./VisaCard";

function VisaPageSection() {
  return (
    <section className="w-11/12 max-w-[1200px] mx-auto py-14">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-darkGreen mb-8">
        Усі візові рішення
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visaData.map((item) => (
          <VisaCard key={item.id} {...item} to="/visa" />
        ))}
      </div>
    </section>
  );
}

export default VisaPageSection;
