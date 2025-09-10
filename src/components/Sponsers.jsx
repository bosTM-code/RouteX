import Sponsor1 from "../assets/Sponsor1.svg";
import Sponsor2 from "../assets/Sponsor2.svg";
import Sponsor3 from "../assets/Sponsor3.svg";
import Sponsor4 from "../assets/Sponsor4.svg";
import Sponsor5 from "../assets/Sponsor5.svg";

function Sponsers() {
  return (
    <div className="w-[70%] flex flex-col sm:flex-row flex-wrap items-center justify-between mx-auto pb-11 gap-7">
      <img src={Sponsor1} alt="" />
      <img src={Sponsor2} alt="" />
      <img src={Sponsor3} alt="" />
      <img src={Sponsor4} alt="" />
      <img src={Sponsor5} alt="" />
    </div>
  );
}

export default Sponsers;
