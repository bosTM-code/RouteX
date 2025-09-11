import Travel1 from "../assets/Travel1.jpg";
import Travel2 from "../assets/Travel2.png";
import GridCircle from "../assets/GridCircle.svg";
import GridIcon from "../assets/GridIcon.svg";
import CheckGreen from "../assets/CheckGreen.svg";
import Camp from "../assets/Camp.svg";
import WebPage from "../assets/WebPage.svg";
import Phone from "../assets/Phone.svg";
import PassGreen from "../assets/PassGreen.svg";
import ArrowRightGreen from "../assets/ArrowRightGreen.svg";

function DreamSection() {
  return (
    <section className="">
      <div className="w-11/12 max-w-[1200px] mx-auto py-16 lg:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* LEFT content */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Left column */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
            <div className="relative ">
              <img
                src={Travel1}
                alt=""
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
              />
              <div className="absolute inset-2 sm:inset-3 rounded-xl sm:rounded-2xl border-2 border-[#86D946]" />
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={GridCircle}
                  alt=""
                  className="w-[120px] sm:w-[180px] lg:w-[230px] opacity-90"
                />
                <img
                  src={GridIcon}
                  alt=""
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10"
                />
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
            <div className="flex-[0.15] bg-[#86D946] rounded-xl sm:rounded-2xl px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-white shadow-sm flex items-center">
              <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold ">
                  25
                </span>
                <div className="text-xs sm:text-base font-semibold">
                  Years Of
                  <br />
                  experience
                </div>
              </div>
            </div>

            <div className="flex-[0.75] min-[1021px]:max-[1314px]:flex-[0.5]">
              <img
                src={Travel2}
                alt=""
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* RIGHT content */}
        <div className="max-w-[640px] mx-auto mt-8 xl:mt-0">
          <div className="flex items-center gap-2 text-[#0B4F39] font-semibold uppercase tracking-wide text-[13px]">
            <img src={PassGreen} alt="" className="w-5 h-5" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="mt-3 text-[40px] leading-[1.15] sm:text-[44px] lg:text-[45px] font-extrabold text-black">
            Where Wanderlust Meets{" "}
            <span className="text-darkGreen">Dream Destinations</span>
          </h2>
          <p className="mt-5 text-[#60756C] leading-7">
            Et purus duis sollicitudin dignissim habitant. Egestas nulla quis
            venenatis cras sed eu massa Et purus duis sollicitudin dignissim
            habitant. Egestas nulla quis venenatis cras sed eu massa Et purus
            duis sollicitudin dignissim habitant. Egestas nulla
          </p>

          {/* two feature cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* card 1 */}
            <div className="rounded-2xl border border-[#E6EEE9] bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#86D946] grid place-items-center">
                  <img src={WebPage} alt="" className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-[#0B4F39]">
                  Passport Plus
                </h3>
              </div>
              <ul className="mt-4 space-y-3 text-[#4E5F59]">
                <li className="flex items-start gap-2">
                  <img src={CheckGreen} alt="" className="mt-1 w-4 h-4" />
                  <span>Beyond Border Immigration</span>
                </li>
                <li className="flex items-start gap-2">
                  <img src={CheckGreen} alt="" className="mt-1 w-4 h-4" />
                  <span>Worldwide Visa Assistance</span>
                </li>
              </ul>
            </div>

            {/* card 2 */}
            <div className="rounded-2xl border border-[#E6EEE9] bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#86D946] grid place-items-center">
                  <img src={Camp} alt="" className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-[#0B4F39]">
                  Global Entry
                </h3>
              </div>
              <ul className="mt-4 space-y-3 text-[#4E5F59]">
                <li className="flex items-start gap-2">
                  <img src={CheckGreen} alt="" className="mt-1 w-4 h-4" />
                  <span>GlobeTrot Visa Services</span>
                </li>
                <li className="flex items-start gap-2">
                  <img src={CheckGreen} alt="" className="mt-1 w-4 h-4" />
                  <span>Infinity Visa Solutions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* actions */}
          <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button className="inline-flex items-center gap-3 rounded-full border border-[#86D946] bg-white px-6 py-3 text-[#0B4F39] hover:shadow transition">
              Read More
              <img src={ArrowRightGreen} alt="" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full border bg-lightGreen grid place-items-center">
                <img src={Phone} alt="" />
              </div>
              <div>
                <p className="text-[#6E7E76] text-sm">Need help?</p>
                <p className="text-[#0B4F39] font-semibold">(808) 555–0111</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DreamSection;
