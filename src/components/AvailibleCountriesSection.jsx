import CountryCard from "./CountryCard";
import BrokenArrow from "../assets/ArrowBroken.svg";
import ArrowRight from "../assets/arrowRight.svg";

const countryData = [
  {
    title: "Canada",
    p1: "Mistakes To Avoid",
    p2: "Your Startup",
    p3: "Knew About Fonts",
  },
  {
    title: "Canada",
    p1: "Mistakes To Avoid",
    p2: "Your Startup",
    p3: "Knew About Fonts",
  },
  {
    title: "Canada",
    p1: "Mistakes To Avoid",
    p2: "Your Startup",
    p3: "Knew About Fonts",
  },
  {
    title: "Canada",
    p1: "Mistakes To Avoid",
    p2: "Your Startup",
    p3: "Knew About Fonts",
  },
];

function AvailibleCountriesSection() {
  return (
    <section className="w-[70%] mx-auto mb-10 ">
      <div className="flex items-center gap-2">
        <p className="uppercase text-darkGreen font-medium text-base">
          Availible Countries
        </p>
        <img src={BrokenArrow} alt="" />
      </div>

      <div className="flex flex-col md:flex-row justify-between mb-8">
        <h3 className="font-bold text-[1.5rem] mb-6 md:mb-0 md:text-[2.5rem] xl:text-[3rem] text-darkGreen max-w-[630px] min-[765px]:max-[1118px]:text-[2rem]">
          Urban Escapes City Hopping Adventures
        </h3>
        <button className="self-center xl:self-end px-6 py-3 bg-lightGreen rounded-full flex items-center gap-2 hover:bg-green-600 transition-all duration-500 ease-in-out shrink-0">
          <span className="text-white">View More</span>
          <img src={ArrowRight} alt="" />
        </button>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 min-[1340px]:grid-cols-4 gap-5 ">
        {countryData.map((item) => (
          <CountryCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

export default AvailibleCountriesSection;
