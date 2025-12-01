import { visaData } from "../data/visaData";
import VisaCard from "./VisaCard";

function VisaPageSection() {
  return (
    <section className="w-11/12 max-w-[1200px] mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visaData.map((item) => (
          <VisaCard
            key={item.id}
            {...item}
            // перехід у деталі конкретної візи
            linkTo={`/visa/${item.id}`}
          />
        ))}
      </div>
    </section>
  );
}

export default VisaPageSection;
