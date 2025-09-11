import Check from "../assets/CheckDark.svg";

function CountryCard({ title, p1, p2, p3 }) {
  return (
    <div className="border border-gray-500 flex flex-col gap-5 rounded-xl w-max-[300px] p-7">
      <div className="p-8 border border-lightGreen bg-slate-200 rounded-full self-start" />
      <h6 className="text-xl text-darkGreen font-bold">{title}</h6>
      <div className="flex items-center gap-1">
        <img src={Check} alt="" />
        <p>{p1}</p>
      </div>
      <div className="flex items-center gap-1">
        <img src={Check} alt="" />
        <p>{p2}</p>
      </div>
      <div className="flex items-center gap-1">
        <img src={Check} alt="" />
        <p>{p3}</p>
      </div>
    </div>
  );
}

export default CountryCard;
