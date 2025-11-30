import HeroCommon from "../components/HeroCommon";
import { coachingPrograms } from "../data/coachingPrograms";
import Sponsers from "../components/Sponsers";
import { Link } from "react-router-dom";

function Coaching() {
  return (
    <div className="overflow-x-hidden bg-[#F4F8F2]">
      <HeroCommon title="Коучинг та навчальні програми" />

      <section className="w-11/12 max-w-6xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coachingPrograms.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col"
            >
              <div className="w-full h-40 bg-slate-200 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-darkGreen">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {item.shortDescription}
                </p>
                <Link
                  to={`/coaching/${item.id}`}
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-lightGreen hover:text-green-600"
                >
                  Детальніше
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Sponsers />
    </div>
  );
}

export default Coaching;
