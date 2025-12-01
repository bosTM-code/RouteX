import VisaCard from "./VisaCard";
import { visaData } from "../data/visaData";

function VisaSection() {
  const homeVisaData = visaData.slice(0, 4);
  return (
    <section className="w-11/12 max-w-[1200px] mx-auto mb-16">
      {/* заголовок як був */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-6">
        {homeVisaData.map((item) => (
          <VisaCard
            key={item.id}
            {...item}
            // з головної всі стрілки ведуть просто на /visa
            linkTo="/visa"
          />
        ))}
      </div>
    </section>
  );
}

export default VisaSection;
